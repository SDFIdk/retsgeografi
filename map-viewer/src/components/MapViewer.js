// MapViewer.js

import { LitElement, html, css } from 'lit';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import { OSM, WMTS } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import svg from '@dataforsyningen/designsystem/assets/icons.svg'
import { Style, Stroke, Fill, Circle} from 'ol/style.js';
import GML32 from 'ol/format/GML32.js';
import { register } from 'ol/proj/proj4';
import { get } from 'ol/proj';
import proj4 from 'proj4';
import Overlay from 'ol/Overlay.js';

// Define and register the projection for EPSG:25832
proj4.defs('EPSG:25832', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +axis=enu');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25832', proj4.defs('EPSG:25832'));
register(proj4);

// Get the EPSG:25832 projection
const epsg25832 = get('EPSG:25832');

class MapViewer extends LitElement {
  static styles = css`
      
      htm, div {
          font-family: Helvetica;
      }
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

      #controls {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      #layer-toggles {
          position: absolute;
          width: auto !important;
          height: auto !important;
          bottom: 20px;
          left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .control-label {
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

      button, label {

      }

      button:hover, label:hover {
          background-color: #f0f0f0;
          transform: scale(1.1);
      }

      button svg, label svg {
          width: 20px;
          height: 20px;
          fill: #333;
      }

      input[type="file"] {
          display: none;
      }

      #layer-toggles {
          display: flex;
          flex-direction: column;
          gap: 5px;
      }
  `;

  constructor() {
    super();
    this.vectorLayers = [];
    this.styles = {
      fillColor: '#73ff00',
      strokeColor: '#000000',
      strokeWidth: 1,
    };
  }

  firstUpdated() {
    this.initMaps();
    this.initHoverPopup();
  }

  initMaps() {
    this.map1 = new Map({
      target: this.shadowRoot.getElementById('map1'),
      layers: [
        new TileLayer({
          source: new WMTS({
            url: 'https://api.dataforsyningen.dk/topo_skaermkort_daempet_DAF?token=9ca510be3c4eca89b1333cadbaa60c36',
            layer: 'topo_skaermkort_daempet',
            matrixSet: 'View1',
            format: 'image/jpeg',
            tileGrid: new WMTSTileGrid({
              extent: [120000, 5900000, 1000000, 6500000],
              resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
              matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
            }),
          }),
          visible: true,
        }),
      ],
      view: new View({
        center: [600000, 6225000],
        zoom: 8,
        projection: epsg25832,
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
    `;

    // Append the container to the shadow root
    this.shadowRoot.appendChild(container);

    // Create an overlay using the container
    this.overlay = new Overlay({
      element: container,
      offset: [10, 10],
      positioning: 'center-left',
    });

    // Add overlay to the map
    this.map1.addOverlay(this.overlay);

    // Set up hover event to display feature information
    this.map1.on('pointermove', (event) => {
      const feature = this.map1.forEachFeatureAtPixel(event.pixel, (feat) => feat);
      if (feature) {
        // console.log('Feature properties:', feature.getProperties());

        const rgeoNavn = feature.get('navn');
        const rgeoType = feature.get('type');

        // Display properties in the popup
        container.innerHTML = `<strong>${rgeoNavn || 'Unknown'}</strong><br/>Type: ${rgeoType || 'Unknown'}`;
        container.style.display = 'block';
        this.overlay.setPosition(event.coordinate);
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

    const { fillColor, strokeColor, strokeWidth } = this.styles;

    switch (geometryType) {
      case 'Polygon':
      case 'MultiPolygon':  // Add MultiPolygon here
        return new Style({
          fill: new Fill({ color: fillColor }),
          stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
        });
      case 'LineString':
        return new Style({
          stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
        });
      case 'Point':
        return new Style({
          image: new Circle({
            radius: 5,
            fill: new Fill({ color: fillColor }),
            stroke: new Stroke({ color: strokeColor, width: 1 }),
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

    if (gmlFile) {
      const gmlReader = new FileReader();
      gmlReader.onload = () => {
        if (sldFile) {
          const sldReader = new FileReader();
          sldReader.onload = () => {
            const styles = this.parseSLD(sldReader.result);
            this.loadGML(gmlReader.result, styles);
          };
          sldReader.readAsText(sldFile);
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
  }

  loadMetadata(metadata) {
    const properties = metadata.properties;
    if (!properties) return;

    // Create or select metadata box
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

    // Generate styled HTML for properties
    let contentHtml = ``;
    for (const [key, value] of Object.entries(properties)) {
      const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
      contentHtml += `<div style="margin-bottom: 8px;"><strong>${displayKey}:</strong> ${value}</div>`;
    }

    // Toggle content visibility
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

  parseSLD(sldString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(sldString, 'application/xml');
    const styles = {};

    xmlDoc.querySelectorAll('Rule').forEach(rule => {
      const ruleName = rule.querySelector('Name')?.textContent;
      const symbolizer = rule.querySelector('PolygonSymbolizer, LineSymbolizer, PointSymbolizer');

      if (symbolizer) {
        const geometryType = symbolizer.nodeName.replace('Symbolizer', '');
        const style = this.getStyle(symbolizer, geometryType); // Helper method to extract SLD style
        if (ruleName && style) {
          styles[ruleName] = style;
        }
      }
    });

    xmlDoc.querySelectorAll('PolygonSymbolizer').forEach(symbol => {
      const fillColor = symbol.querySelector('Fill > CssParameter[name="fill"]')?.textContent || '#73ff00';
      const strokeColor = symbol.querySelector('Stroke > CssParameter[name="stroke"]')?.textContent || '#000000';
      const strokeWidth = parseFloat(symbol.querySelector('Stroke > CssParameter[name="stroke-width"]')?.textContent) || 1;

      styles['Polygon'] = new Style({
        fill: new Fill({ color: fillColor }),
        stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
      });
    });

    xmlDoc.querySelectorAll('LineSymbolizer').forEach(symbol => {
      const strokeColor = symbol.querySelector('Stroke > CssParameter[name="stroke"]')?.textContent || '#000000';
      const strokeWidth = parseFloat(symbol.querySelector('Stroke > CssParameter[name="stroke-width"]')?.textContent) || 1;

      styles['LineString'] = new Style({
        stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
      });
    });

    xmlDoc.querySelectorAll('PointSymbolizer').forEach(symbol => {
      const fillColor = symbol.querySelector('Graphic > Mark > Fill > CssParameter[name="fill"]')?.textContent || '#73ff00';

      styles['Point'] = new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: fillColor }),
          stroke: new Stroke({ color: '#000000', width: 1 }),
        }),
      });
    });

    return styles;
  }

  loadGML(gmlString, sldStyles) {
    const format = new GML32();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(gmlString, 'application/xml');

    const features = format.readFeatures(gmlString, {
      featureProjection: epsg25832,
      dataProjection: epsg25832,
    });

    const featureGroups = features.reduce((groups, feature, index) => {
      const featureMember = xmlDoc.getElementsByTagName("gml:featureMember")[index];
      const firstChildElement = featureMember.firstElementChild;
      const featureType = firstChildElement ? firstChildElement.localName : 'Unknown Type';

      if (!groups[featureType]) groups[featureType] = [];
      groups[featureType].push(feature);
      return groups;
    }, {});

    this.vectorLayers.forEach(layer => this.map1.removeLayer(layer));
    this.vectorLayers = [];
    this.shadowRoot.getElementById('layer-toggles').innerHTML = '';

    Object.keys(featureGroups).forEach(type => {
      const vectorSource = new VectorSource({ features: featureGroups[type] });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: (feature) => {
          const rgeoNavn = feature.get('rgeo:navn'); // Get the rgeo:navn attribute
          const geometryType = feature.getGeometry().getType();
          let style;

          // Check if SLD style exists for this specific feature name
          if (sldStyles && rgeoNavn && sldStyles[rgeoNavn]) {
            console.log('rgeoNavn:', rgeoNavn);
            style = sldStyles[rgeoNavn]; // Use SLD style if it exists for the rgeo:navn
          } else if (sldStyles && sldStyles[geometryType]) {
            // If no SLD style for rgeo:navn, check based on geometry type
            style = sldStyles[geometryType];
          } else {
            // Fallback to the existing getStyle method for default styling
            style = this.getStyle(geometryType);
          }

          if (style) {
            return style; // Return the found style
          } else {
            // If no style is found, log a warning and return a default style
            console.warn(`No style found for geometry type: ${geometryType}`);
          }
        }
      });
      features.forEach((feature) => {
        console.log('Geometry Type:', feature.getGeometry().getType());
      });
      vectorLayer.set('name', type);

      this.map1.addLayer(vectorLayer);
      this.vectorLayers.push(vectorLayer);

      // Create container for each layer control with color pickers
      const container = document.createElement('div');
      container.className = 'layer-item';

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

      // Color pickers for individual layer styling
      const fillColorInput = document.createElement('input');
      fillColorInput.type = 'color';
      fillColorInput.value = this.styles.fillColor;
      fillColorInput.addEventListener('input', () => {
        this.updateLayerStyle(vectorLayer, type, fillColorInput.value, strokeColorInput.value, strokeWidthInput.value);
      });

      const strokeColorInput = document.createElement('input');
      strokeColorInput.type = 'color';
      strokeColorInput.value = this.styles.strokeColor;
      strokeColorInput.addEventListener('input', () => {
        this.updateLayerStyle(vectorLayer, type, fillColorInput.value, strokeColorInput.value, strokeWidthInput.value);
      });

      const strokeWidthInput = document.createElement('input');
      strokeWidthInput.type = 'number';
      strokeWidthInput.value = this.styles.strokeWidth;
      strokeWidthInput.min = 1;
      strokeWidthInput.max = 10;
      strokeWidthInput.addEventListener('input', () => {
        this.updateLayerStyle(vectorLayer, type, fillColorInput.value, strokeColorInput.value, strokeWidthInput.value);
      });

      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(fillColorInput);
      container.appendChild(strokeColorInput);
      container.appendChild(strokeWidthInput);

      this.shadowRoot.getElementById('layer-toggles').appendChild(container);
    });

    this.requestUpdate();
  }

  updateLayerStyle(layer, type, fillColor, strokeColor, strokeWidth) {
    layer.setStyle((feature) => {
      const geometryType = feature.getGeometry().getType();

      switch (geometryType) {
        case 'Polygon':
          return new Style({
            fill: new Fill({ color: fillColor }),
            stroke: new Stroke({ color: strokeColor, width: parseInt(strokeWidth, 10) }),
          });
        case 'MultiPolygon':
          return new Style({
            fill: new Fill({ color: fillColor }),
            stroke: new Stroke({ color: strokeColor, width: parseInt(strokeWidth, 10) }),
          });
        case 'LineString':
          return new Style({
            stroke: new Stroke({
              color: strokeColor,
              width: parseInt(strokeWidth, 10),
            }),
          });
        case 'Point':
          return new Style({
            image: new Circle({
              radius: 5,
              fill: new Fill({ color: fillColor }),
              stroke: new Stroke({ color: strokeColor, width: parseInt(strokeWidth, 10) }),
            }),
          });
        default:
          return new Style({}); // Fallback style for unsupported geometry types
      }
    });
  }




  render() {
    return html`
      <div id="map-container">
        <div id="map1" class="map"></div>
        <div id="layer-toggles"></div>

        <div id="controls">
          <button class="control-label" @click="${this.zoomIn}" title="Zoom In">
            <svg>
              <use href="${svg}#plus"></use>
            </svg>
          </button>
          <button class="control-label" @click="${this.zoomOut}" title="Zoom Out">
            <svg>
              <use href="${svg}#minus"></use>
            </svg>
          </button>

          <input type="file" id="file-input" multiple accept=".gml,.sld, .geojson" @change="${this.uploadFiles}" />
          <label class="control-label" for="file-input" title="Upload GML & SLD">
            <svg>
              <use href="${svg}#arrow-up"></use>
            </svg>
          </label>


      </div>
    `;
  }
}

customElements.define('map-viewer', MapViewer);
