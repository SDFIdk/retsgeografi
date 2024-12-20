// MapViewer.js

import {css, html, LitElement} from 'lit';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer} from 'ol/layer';
import {WMTS} from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import svg from '@dataforsyningen/designsystem/assets/icons.svg'
import {Circle, Fill, Stroke, Style} from 'ol/style.js';
import GML32 from 'ol/format/GML32.js';
import {register} from 'ol/proj/proj4';
import {get, getPointResolution} from 'ol/proj';
import proj4 from 'proj4';
import Overlay from 'ol/Overlay.js';
import * as SLDReader from '@nieuwlandgeo/sldreader';
import {extend} from 'ol/extent';

// Define and register the projection for EPSG:25832
proj4.defs('EPSG:25832', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +axis=enu');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25832', proj4.defs('EPSG:25832'));
register(proj4);

// Get the EPSG:25832 projection
const epsg25832 = get('EPSG:25832');

export class MapViewer extends LitElement {
  static styles = css`
      #map-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
      }

      .map {
          width: 100%;
          height: 100%;
      }

      #compass-container {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          padding: 8px;
          width: 3rem;
          height: 3rem;
      }

      #controls-container {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .control-icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
      }

      #data-toggle {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      button:hover, label:hover {
          transform: scale(1.1);
      }

      label svg {
          width: 20px;
          height: 20px;
          fill: #333;
      }

      input[type="file"] {
          display: none;
      }
  `;

  static properties = {
    gmlFile: {type: String},
    xmlFile: {type: String},
    sldFile: {type: String},
  };

  constructor() {
    super();
    this.vectorLayers = [];
    this.styles = {
      fillColor: '#ffffff',
      strokeColor: '#000000',
      strokeWidth: 1,
    };
    // Initialize to null, but don't rely on constructor for attribute retrieval
    this.gmlFile = null;
    this.sldFile = null;
    this.xmlFile = null;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Connected Properties:', this.gmlFile, this.xmlFile, this.sldFile);

    if (this.gmlFile) {
      fetch(this.gmlFile)
        .then(response => response.text())
        .then(gmlString => {
          if (this.sldFile) {
            return fetch(this.sldFile)
              .then(response => response.text())
              .then(sldString => this.loadGML(gmlString, sldString));
          }
          this.loadGML(gmlString, null);
        })
        .catch(error => console.error('Error loading GML or SLD:', error));
    }

    if (this.xmlFile) {
      fetch(this.xmlFile)
        .then(response => response.text())
        .then(xmlData => {
          this.loadMetadata(xmlData);
        })
        .catch(error => console.error('Error loading XML:', error));
    }
  }

  firstUpdated() {
    this.initMaps();
    this.initHoverPopup();
  }

  initMaps() {
    this.map1 = new Map({
      target: this.shadowRoot.getElementById('map1'), layers: [new TileLayer({
        source: new WMTS({
          url: 'https://services.datafordeler.dk/DKskaermkort/topo_skaermkort_daempet/1.0.0/wmts?username=QKJBQATHVS&password=ytxCA8UGM5n0Z*zi',
          layer: 'topo_skaermkort_daempet',
          matrixSet: 'View1',
          format: 'image/jpeg',
          style: 'default',
          tileGrid: new WMTSTileGrid({
            extent: [120000, 5900000, 1000000, 6500000],
            resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
            matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
          }),
        }),
        visible: true,
      }),],
      view: new View({
        center: [600000, 6225000], zoom: 9, projection: epsg25832,
      }),
      controls: [],
    });
  }

  initHoverPopup() {
    const container = document.createElement('div');
    container.id = 'popup';
    container.style.cssText = `
      background: white;
      border: 1px solid black;
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      position: absolute;
      display: none;
      width: max-content;
    `;

    // Append the container to the shadow root
    this.shadowRoot.appendChild(container);

    // Create an overlay using the container
    this.overlay = new Overlay({
      element: container, offset: [10, 10], positioning: 'center-left',
    });

    // Add overlay to the map
    this.map1.addOverlay(this.overlay);

    // Set up hover event to display feature information
    this.map1.on('pointermove', (event) => {
      const feature = this.map1.forEachFeatureAtPixel(event.pixel, (feat) => feat);
      if (feature) {
        const rgeoNavn = feature.get('navn');
        const rgeoType = feature.get('type');

        // Build the popup content dynamically
        let popupContent = '';
        if (rgeoNavn) popupContent += `<strong>${rgeoNavn}</strong><br/>`;
        if (rgeoType) popupContent += `Type: ${rgeoType}`;

        // Display the popup if there's any content to show
        if (popupContent) {
          container.innerHTML = popupContent;
          container.style.display = 'block';
          this.overlay.setPosition(event.coordinate);
        } else {
          container.style.display = 'none';
        }
      } else {
        container.style.display = 'none';
      }
    });
  }

  zoomIn() {
    const view = this.map1.getView();
    view.setZoom(view.getZoom() + 1);
  }

  zoomOut() {
    const view = this.map1.getView();
    view.setZoom(view.getZoom() - 1);
  }

  getStyle(geometryType, sldStyle = null) {
    if (sldStyle) {
      return sldStyle;
    }

    const {fillColor, strokeColor, strokeWidth} = this.styles;

    switch (geometryType) {
      case 'Polygon':
      case 'MultiPolygon':  // Add MultiPolygon here
        return new Style({
          fill: new Fill({color: fillColor}), stroke: new Stroke({color: strokeColor, width: strokeWidth}),
        });
      case 'LineString':
        return new Style({
          stroke: new Stroke({color: strokeColor, width: strokeWidth}),
        });
      case 'Point':
        return new Style({
          image: new Circle({
            radius: 5, fill: new Fill({color: fillColor}), stroke: new Stroke({color: strokeColor, width: 1}),
          }),
        });
      default:
        console.warn(`No style found for geometry type: ${geometryType}`);
        return null;
    }
  }

  uploadFiles(event) {
    const files = [...event.target.files];
    const gmlFile = files.find(file => file.name.endsWith('.gml'));
    const sldFile = files.find(file => file.name.endsWith('.sld'));
    const geojsonFile = files.find(file => file.name.endsWith('.geojson'));
    const xmlFile = files.find(file => file.name.endsWith('.xml'));

    if (gmlFile) {
      const gmlReader = new FileReader();
      gmlReader.onload = () => {
        if (sldFile) {
          const sldFileReader = new FileReader();
          sldFileReader.onload = () => {
            this.loadGML(gmlReader.result, sldFileReader.result);
          };
          sldFileReader.readAsText(sldFile);
        } else {
          this.loadGML(gmlReader.result, null);
        }
      };
      gmlReader.readAsText(gmlFile);
    }

    if (geojsonFile) {
      const geojsonReader = new FileReader();
      geojsonReader.onload = () => {
        this.loadMetadata(JSON.parse(geojsonReader.result));
      };
      geojsonReader.readAsText(geojsonFile);
    }
    if (xmlFile) {
      const xmlReader = new FileReader();
      xmlReader.onload = () => {
        this.loadMetadata(xmlReader.result);
      };
      xmlReader.readAsText(xmlFile);
    }
  }

  loadMetadata(metadata) {
    let properties;

    if (typeof metadata === 'string') {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(metadata, 'application/xml');
      properties = Array.from(xmlDoc.documentElement.children).reduce((acc, child) => {
        acc[child.tagName] = child.textContent;
        return acc;
      }, {});
    } else if (metadata.properties) {
      properties = metadata.properties
    } else {
      console.warn('Unsupported metadata format.');
      return;
    }

    // Display metadata on the map or in a designated UI element
    let metadataBox = this.shadowRoot.getElementById('metadata-box');
    if (!metadataBox) {
      metadataBox = document.createElement('div');
      metadataBox.id = 'metadata-box';
      metadataBox.style.cssText = `
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(255, 255, 255, 0.95);
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      max-height: 300px;
      overflow-y: auto;
      max-width: 25rem;
    `;
      this.shadowRoot.appendChild(metadataBox);
    }
    let contentHtml = ``;
    for (const [key, value] of Object.entries(properties)) {
      const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
      contentHtml += `<div style="margin-bottom: 8px;"><strong>${displayKey}:</strong> ${value}</div>`;
    }

    // Display metadata with toggle
    metadataBox.innerHTML = `
    <button id="toggle-metadata" style="background:none; border:none; font-size:1rem; cursor:pointer;">
        Metadata ▼
    </button>
    <div id="metadata-content" style="display:none; margin-top:10px;">
        ${contentHtml}
    </div>
  `;

    const toggleButton = metadataBox.querySelector('#toggle-metadata');
    const contentBox = metadataBox.querySelector('#metadata-content');
    toggleButton.addEventListener('click', () => {
      const isVisible = contentBox.style.display === 'block';
      contentBox.style.display = isVisible ? 'none' : 'block';
      toggleButton.textContent = isVisible ? 'Metadata ▼' : 'Metadata ▲';
    });
  }

  loadGML(gmlString, sldString = null) {
    // Parse the GML data and get the features
    const {features, xmlDoc} = this.parseGML(gmlString);
    const featureGroups = this.groupFeaturesByType(features, xmlDoc);

    // Reset existing layers
    this.resetLayers();

    // Apply the feature groups to the map (same as original logic)
    this.applyFeatureGroupsToMap(featureGroups, sldString);

    // Calculate the combined extent of all features (same as original logic)
    const allFeaturesExtent = features.length > 0 ? features[0].getGeometry().getExtent().slice() : null;
    features.forEach((feature) => {
      const geometryExtent = feature.getGeometry().getExtent();
      if (allFeaturesExtent) {
        extend(allFeaturesExtent, geometryExtent);
      }
    });
    // Adjust the map view to fit all features
    if (allFeaturesExtent) {
      this.map1.getView().fit(allFeaturesExtent, {
        size: this.map1.getSize(),
        padding: [50, 50, 50, 50],
        maxZoom: 18,
      });
    }
  }

  applyFeatureGroupsToMap(featureGroups, sldString) {
    const viewProjection = this.map1.getView().getProjection();
    const sldObject = sldString ? SLDReader.Reader(sldString) : null;

    Object.keys(featureGroups).forEach(type => {
      const vectorSource = new VectorSource({features: featureGroups[type]});
      const sldStyleFunction = this.applySLDStyles(sldObject, type, viewProjection);
      this.addLayerWithControls(type, vectorSource, sldStyleFunction || this.getStyle(type));
    });

    this.map1.render();
    this.requestUpdate();
  }

  parseGML(gmlString) {
    try {
      const format = new GML32();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(gmlString, 'application/xml');
      const features = format.readFeatures(gmlString, {
        featureProjection: epsg25832, dataProjection: epsg25832,
      });

      return {features, xmlDoc};
    } catch (error) {
      console.error("Failed to parse GML file:", error);
      return {features: [], xmlDoc: null};
    }
  }

  groupFeaturesByType(features, xmlDoc) {
    return features.reduce((groups, feature, index) => {
      const featureMembers = xmlDoc.getElementsByTagNameNS('*', 'featureMember');
      const featureMember = featureMembers[index];
      const firstChildElement = featureMember ? featureMember.firstElementChild : null;
      const featureType = firstChildElement ? firstChildElement.localName : 'Unknown Type';

      if (!groups[featureType]) groups[featureType] = [];
      groups[featureType].push(feature);
      return groups;
    }, {});
  }

  resetLayers() {
    this.vectorLayers.forEach((layer) => {
      this.map1.removeLayer(layer)
    })
    this.vectorLayers = []
    this.shadowRoot.getElementById('data-toggle').innerHTML = ''
  }

  applySLDStyles(sldObject, type, viewProjection) {
    if (!sldObject) return null;

    const sldLayer = SLDReader.getLayer(sldObject, type);
    if (!sldLayer) {
      console.warn("No named layer found for " + type);
      return null;
    }

    const sldStyle = SLDReader.getStyle(sldLayer);
    if (!sldStyle) {
      console.warn("No style found for layer " + sldLayer);
      return null;
    }

    const featureTypeStyle = sldStyle.featuretypestyles[0];
    return SLDReader.createOlStyleFunction(featureTypeStyle, {
      convertResolution: viewResolution => {
        const viewCenter = this.map1.getView().getCenter();
        return getPointResolution(viewProjection, viewResolution, viewCenter);
      }, imageLoadedCallback: () => {
        this.map1.changed();
      },
    });
  }

  updateLayerStyle(vectorLayer, {fillColor, strokeColor, strokeWidth}) {
    vectorLayer.setStyle((feature) => {
      const geometryType = feature.getGeometry().getType();

      // Style for Point geometries
      if (geometryType === 'Point') {
        return new Style({
          image: new Circle({
            radius: 5, fill: new Fill({color: fillColor}), stroke: new Stroke({color: strokeColor, width: strokeWidth}),
          }),
        });
      }

      // Style for Polygon and MultiPolygon geometries
      if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
        return new Style({
          fill: new Fill({color: fillColor}), stroke: new Stroke({color: strokeColor, width: strokeWidth}),
        });
      }

      // Style for LineString geometries
      if (geometryType === 'LineString') {
        return new Style({
          stroke: new Stroke({
            color: strokeColor, width: strokeWidth,
          }),
        });
      }

      // Default style (if no specific geometry type matches)
      return new Style({
        fill: new Fill({color: fillColor}), stroke: new Stroke({color: strokeColor, width: strokeWidth}),
      });
    });
  }

  createLayerToggleCheckbox(type, vectorLayer) {
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${type}`;
    checkbox.checked = true;
    checkbox.addEventListener('change', () => {
      vectorLayer.setVisible(checkbox.checked);
    });

    const label = document.createElement('label');
    label.htmlFor = `checkbox-${type}`;
    label.textContent = type;

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    return checkboxContainer;
  }

  addColorPickers(container, type, vectorLayer) {
    const fillColorInput = document.createElement('input');
    fillColorInput.type = 'color';
    fillColorInput.value = this.styles.fillColor;
    fillColorInput.addEventListener('input', () => {
      this.updateLayerStyle(vectorLayer, {
        fillColor: fillColorInput.value, strokeColor: strokeColorInput.value, strokeWidth: strokeWidthInput.value
      });
    });

    const strokeColorInput = document.createElement('input');
    strokeColorInput.type = 'color';
    strokeColorInput.value = this.styles.strokeColor;
    strokeColorInput.addEventListener('input', () => {
      this.updateLayerStyle(vectorLayer, {
        fillColor: fillColorInput.value, strokeColor: strokeColorInput.value, strokeWidth: strokeWidthInput.value
      });
    });

    const strokeWidthInput = document.createElement('input');
    strokeWidthInput.type = 'number';
    strokeWidthInput.value = this.styles.strokeWidth;
    strokeWidthInput.min = 1;
    strokeWidthInput.max = 10;
    strokeWidthInput.addEventListener('input', () => {
      this.updateLayerStyle(vectorLayer, {
        fillColor: fillColorInput.value, strokeColor: strokeColorInput.value, strokeWidth: strokeWidthInput.value
      });
    });

    container.appendChild(fillColorInput);
    container.appendChild(strokeColorInput);
    container.appendChild(strokeWidthInput);
  }

  addLayerWithControls(type, vectorSource, sldStyleFunction) {
    const vectorLayer = new VectorLayer({
      source: vectorSource, style: sldStyleFunction || ((feature) => this.getStyle(feature.getGeometry().getType())),
    });

    this.map1.addLayer(vectorLayer);
    this.vectorLayers.push(vectorLayer);

    // Create a checkbox and color pickers for the layer
    const layerToggleDiv = document.createElement('div');
    layerToggleDiv.classList.add('layer-toggle');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.addEventListener('change', () => {
      vectorLayer.setVisible(checkbox.checked);
    });

    const label = document.createElement('label');
    label.textContent = type;

    const colorPickerDiv = document.createElement('div');
    colorPickerDiv.classList.add('color-pickers');

    const fillColorInput = this.createColorInput('Fill', this.styles.fillColor, (value) => {
      this.styles.fillColor = value;
      vectorLayer.setStyle(this.getStyle('Polygon'));
    });

    const strokeColorInput = this.createColorInput('Stroke', this.styles.strokeColor, (value) => {
      this.styles.strokeColor = value;
      vectorLayer.setStyle(this.getStyle('Polygon'));
    });

    const strokeWidthInput = this.createNumberInput('Width', this.styles.strokeWidth, (value) => {
      this.styles.strokeWidth = value;
      vectorLayer.setStyle(this.getStyle('Polygon'));
    });

    colorPickerDiv.appendChild(fillColorInput);
    colorPickerDiv.appendChild(strokeColorInput);
    colorPickerDiv.appendChild(strokeWidthInput);

    layerToggleDiv.appendChild(checkbox);
    layerToggleDiv.appendChild(label);
    // layerToggleDiv.appendChild(colorPickerDiv); Disabled color picker

    this.shadowRoot.getElementById('data-toggle').appendChild(layerToggleDiv);
  }

  createColorInput(label, initialValue, onChange) {
    const container = document.createElement('div');
    container.style.marginBottom = '5px';

    const inputLabel = document.createElement('span');
    inputLabel.textContent = `${label} Color: `;
    // container.appendChild(inputLabel);

    const input = document.createElement('input');
    input.type = 'color';
    input.value = initialValue;
    input.addEventListener('input', (event) => onChange(event.target.value));

    container.appendChild(input);
    return container;
  }

  createNumberInput(label, initialValue, onChange) {
    const container = document.createElement('div');
    container.style.marginBottom = '5px';

    const inputLabel = document.createElement('span');
    inputLabel.textContent = `${label}: `;
    // container.appendChild(inputLabel);

    const input = document.createElement('input');
    input.type = 'number';
    input.value = initialValue;
    input.min = 1;
    input.addEventListener('input', (event) => onChange(Number(event.target.value)));

    container.appendChild(input);
    return container;
  }

  onDragOver(event) {
    event.preventDefault();
    const dropZone = this.shadowRoot.getElementById('drop-zone');
    dropZone.classList.add('dragover');
  }

  onDragLeave() {
    const dropZone = this.shadowRoot.getElementById('drop-zone');
    dropZone.classList.remove('dragover');
  }

  onDrop(event) {
    event.preventDefault();
    const dropZone = this.shadowRoot.getElementById('drop-zone');
    dropZone.classList.remove('dragover');

    const files = [...event.dataTransfer.files];
    const gmlFile = files.find(file => file.name.endsWith('.gml'));
    const xmlFile = files.find(file => file.name.endsWith('.xml'));
    const sldFile = files.find(file => file.name.endsWith('.sld'));

    if (gmlFile || sldFile || xmlFile) {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.files = new DataTransfer().files; // Simulate input with dropped files
      fileInput.dispatchEvent(new Event('change', {bubbles: true}));
      this.uploadFiles({target: {files}});
    }
  }

  render() {
    return html`
      <div id="map-container" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}" @drop="${this.onDrop}">
        <div id="map1" class="map"></div>

        <div id="data-toggle"></div>

        <div id="controls-container">
          <label class="control-icon" title="Zoom In" @click="${this.zoomIn}">
            <svg>
              <use href="${svg}#plus"></use>
            </svg>
          </label>
          <label class="control-icon" title="Zoom Out" @click="${this.zoomOut}">
            <svg>
              <use href="${svg}#minus"></use>
            </svg>
          </label>
          <label class="control-icon" id="drop-zone" title="Upload Files">
            <input type="file" multiple @change="${this.uploadFiles}"/>
            <svg>
              <use href="${svg}#upload"></use>
            </svg>
          </label>
        </div>
        <div id="compass-container">
          <svg>
            <use href="${svg}#compass"></use>
          </svg>
        </div>
      </div>
      <a href="#bekendtgorelse" role="button">Bekendtgørelse</a>
      <a href="#map" role="button">Kort</a>
    `;
  }
}

