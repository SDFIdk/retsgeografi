// MapViewer.js

import {css, html, LitElement} from 'lit';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer} from 'ol/layer';
import {WMTS} from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {Circle, Fill, Stroke, Style} from 'ol/style';
import GML32 from 'ol/format/GML32';
import {register} from 'ol/proj/proj4';
import {get, getPointResolution} from 'ol/proj';
import proj4 from 'proj4';
import Overlay from 'ol/Overlay';
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

      :host {
          display: block;
          width: var(--map-viewer-width, 100%);
          height: var(--map-viewer-height, 100%);
          border: var(--map-viewer-border, none);
          box-shadow: var(--map-viewer-box-shadow, none);
      }

      .map-container {
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
          padding: 1rem;
          width: 3rem;
          height: 3rem;
      }

      #controls-container {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      #layer-switcher {
          position: absolute;
          bottom: 1rem;
          right: 6rem;
          display: flex;
          flex-direction: row-reverse;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .control-icon {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
      }

      #map-legend {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: none;
      }
      input {
          accent-color: green;
      }

      button:hover, label:hover {
          transform: scale(1.1);
      }

      label svg {
          width: 1.25rem;
          height: 1.25rem;
          fill: #333;
      }

      input[type="file"] {
          display: none;
      }
      
      .radio-options {
          display: none;
      }
  `;

  // Define custom properties
  static properties = {
    gmlFile: { type: String, reflect: true },
    xmlFile: { type: String, reflect: true },
    sldFile: { type: String, reflect: true },
  };

  // Initialize custom properties
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

  /**
   * Called when the component is added to the DOM. Retrieve the GML, SLD and metadata
   * files and pass them to the respective loading functions.
   */
  connectedCallback() {
    super.connectedCallback();

    if (this.gmlFile) {
      // Fetch the GML file
      fetch(this.gmlFile)
        .then(response => response.text())
        .then(gmlString => {
          if (this.sldFile) {
            // Fetch the SLD file if it exists
            return fetch(this.sldFile)
              .then(response => response.text())
              .then(sldString => {
                // Load the GML with the SLD file
                this.loadGML(gmlString, sldString);
              });
          }
          // Load the GML without an SLD file
          this.loadGML(gmlString, null);
        })
        .catch(error => console.error('Error loading GML or SLD:', error));
    }

    if (this.xmlFile) {
      // Fetch the metadata XML file
      fetch(this.xmlFile)
        .then(response => response.text())
        .then(xmlData => {
          // Load the metadata from the XML file
          this.loadMetadata(xmlData);
        })
        .catch(error => console.error('Error loading XML:', error));
    }
  }

  firstUpdated() {
    // Initialize the two maps
    this.initMaps();
    // Initialize the hover popup
    this.initHoverPopup();
  }

// Initialize the map
  initMaps() {
    // Define the two base layers
    this.baseLayer1 = new TileLayer({
      visible: true,
      type: 'base',
      size: [256, 256],
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
      view: new View({
          maxZoom: 14,
          minZoom: 0
      })
    });
    this.baseLayer2 = new TileLayer({
      visible: false, // Initially hidden
      source: new WMTS({
        url: 'https://services.datafordeler.dk/GeoDanmarkOrto/orto_foraar_wmts/1.0.0/wmts?username=RNIOENOTLD&password=LaKage!7562Hesten',
        layer: 'orto_foraar_wmts',
        matrixSet: 'KortforsyningTilingDK',
        style: 'default',
        format: 'image/jpeg',
        tileGrid: new WMTSTileGrid({
          extent: [120000, 5900000, 1000000, 6500000],
          resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
          matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
        }),
      }),
    });
    // Create the map
    this.map = new Map({
      target: this.shadowRoot.getElementById('map'),
      layers: [this.baseLayer1, this.baseLayer2],
      view: new View({
        center: [600000, 6225000],
        zoom: 9,
        projection: epsg25832,
      }),
      controls: [],
    });

    // Add event listener to switch layers
    this.updateComplete.then(() => {
      const layerSwitcher = this.shadowRoot.getElementById('layer-switcher');
      const radioOptions = this.shadowRoot.querySelector('.radio-options');

      if (layerSwitcher && radioOptions) {
        // Toggle radio button visibility when clicking the SVG
        layerSwitcher.addEventListener('click', (event) => {
          if (event.target.closest('svg')) {
            radioOptions.style.display = radioOptions.style.display === 'none' || !radioOptions.style.display ? 'block' : 'none';
          }
        });

        // Listen for changes in radio selection
        layerSwitcher.addEventListener('change', (event) => {
          if (event.target.name === 'base-layer') {
            const selectedLayer = event.target.value;
            this.baseLayer1.setVisible(selectedLayer === "1");
            this.baseLayer2.setVisible(selectedLayer === "2");
          }
        });
      } else {
        console.error("Layer switcher element or radio options not found");
      }
    });

  }

  initHoverPopup() {
    const container = document.createElement('div');
    container.id = 'popup';
    container.style.cssText = `
      background: white;
      border: 1px solid black;
      padding: 0.5rem;
      border-radius: 1rem;
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
    this.map.addOverlay(this.overlay);

    // Set up hover event to display feature information
    this.map.on('pointermove', (event) => {
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (feat) => feat);
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

  // Zoom in on map
  zoomIn() {
    const view = this.map.getView();
    view.setZoom(view.getZoom() + 1);
  }
  // Zoom out on map
  zoomOut() {
    const view = this.map.getView();
    view.setZoom(view.getZoom() - 1);
  }

  /**
   * Uploads the given files to the map.
   * @param {Event} event The event containing the files.
   */
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
            /**
             * Loads the GML file onto the map using the given SLD style.
             * @param {string} gml The GML file contents.
             * @param {string} sld The SLD file contents.
             */
            this.loadGML(gmlReader.result, sldFileReader.result);
          };
          sldFileReader.readAsText(sldFile);
        } else {
          /**
           * Loads the GML file onto the map without any SLD style.
           * @param {string} gml The GML file contents.
           */
          this.loadGML(gmlReader.result, null);
        }
      };
      gmlReader.readAsText(gmlFile);
    }

    if (geojsonFile) {
      const geojsonReader = new FileReader();
      geojsonReader.onload = () => {
        /**
         * Loads the metadata from the given GeoJSON file.
         * @param {string} geojson The GeoJSON file contents.
         */
        this.loadMetadata(JSON.parse(geojsonReader.result));
      };
      geojsonReader.readAsText(geojsonFile);
    }
    if (xmlFile) {
      const xmlReader = new FileReader();
      xmlReader.onload = () => {
        /**
         * Loads the metadata from the given XML file.
         * @param {string} xml The XML file contents.
         */
        this.loadMetadata(xmlReader.result);
      };
      xmlReader.readAsText(xmlFile);
    }
  }

  /**
   * Loads metadata from a given string or object.
   *
   * If the metadata is a string, it is assumed to be in XML format and is parsed using a DOMParser.
   * If the metadata is an object, it is assumed to have a 'properties' property that contains the metadata.
   *
   * The metadata is then displayed on the map or in a designated UI element.
   *
   * @param {string|object} metadata - The metadata to load.
   */
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
      properties = metadata.properties;
    } else {
      console.warn('Unsupported metadata format.');
      return;
    }

    // Locate the map container
    const mapContainer = this.shadowRoot.querySelector('#map-container');
    if (!mapContainer) {
      console.error('Map container not found');
      return;
    }

    // Create or update the metadata box
    let metadataBox = mapContainer.querySelector('#metadata-box');
    if (!metadataBox) {
      metadataBox = document.createElement('div');
      metadataBox.id = 'metadata-box';
      metadataBox.style.cssText = `
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(255, 255, 255, 0.95);
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      max-height: 52rem;
      overflow-y: auto;
      max-width: 25rem;
      z-index: 10;
    `;
      mapContainer.appendChild(metadataBox);
    }

// Generate styled HTML for properties
    let contentHtml = ``;
    for (const [key, value] of Object.entries(properties)) {
      // Remove "mdb:" prefix (case-insensitive) and format the display key
      const displayKey = key
        .replace(/^mdb:/i, '') // Remove "mdb:" prefix
        .replace(/([A-Z])/g, ' $1') // Add spaces before uppercase letters
        .trim(); // Trim any leading/trailing spaces
      const formattedKey = displayKey.charAt(0).toUpperCase() + displayKey.slice(1); // Capitalize first letter
      contentHtml += `<div style="margin-bottom: 8px;"><strong>${formattedKey}:</strong> ${value}</div>`;
    }



    // Toggleable metadata content
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

  /**
   * Loads GML data from a given string and applies it to the map.
   *
   * The GML data is parsed using a DOMParser and then grouped by feature type.
   * The feature groups are then applied to the map using the applyFeatureGroupsToMap method.
   *
   * @param {string} gmlString - The GML data to load.
   * @param {string} [sldString] - The SLD data to use for styling.
   */
  loadGML(gmlString, sldString = null) {
    // Parse the GML data and get the features
    this.shadowRoot.getElementById('map-legend').style.display = 'block'
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
      this.map.getView().fit(allFeaturesExtent, {
        size: this.map.getSize(),
        padding: [50, 50, 50, 50],
        maxZoom: 18,
      });
    }
  }

  /**
   * Parses GML data from a given string, returning features and the XML document.
   *
   * This function attempts to parse the provided GML string using the GML32 format.
   * It returns an object containing the parsed features and the XML document.
   *
   * @param {string} gmlString - The GML data to parse.
   * @returns {Object} An object with 'features' array and 'xmlDoc' XML document.
   */
  parseGML(gmlString) {
    try {
      const format = new GML32();
      const parser = new DOMParser();
      let xmlDoc = parser.parseFromString(gmlString, 'application/xml');

      // Normalize custom prefixes by replacing `rgeo:` with `gml:`
      const serialized = new XMLSerializer().serializeToString(xmlDoc);
      const normalizedGML = serialized.replace(/<rgeo:/g, '<gml:').replace(/<\/rgeo:/g, '</gml:');

      // Parse the modified GML
      const features = format.readFeatures(normalizedGML, {
        featureProjection: epsg25832, dataProjection: epsg25832,
      });

      return { features, xmlDoc };
    } catch (error) {
      console.error("Failed to parse GML file:", error);
      return { features: [], xmlDoc: null };
    }
  }

  /**
   * Applies SLD styles to the map.
   *
   * This function takes an SLD object, a feature type and the view projection as input and
   * applies the SLD styles to the map. If the SLD object is null, null is returned. If the
   * feature type is not found in the SLD object, a warning is logged and null is returned. If
   * the feature type is found but the style is not found, a warning is logged and null is
   * returned.
   *
   * @param {Object} sldObject - The SLD object to apply styles from.
   * @param {string} type - The feature type to apply the styles to.
   * @param {ol/proj/Projection} viewProjection - The view projection of the map.
   * @returns {ol/style/StyleFunction} The style function to apply to the map.
   */
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
        const viewCenter = this.map.getView().getCenter();
        return getPointResolution(viewProjection, viewResolution, viewCenter);
      }, imageLoadedCallback: () => {
        this.map.changed();
      },
    });
  }

  /**
   * Gets the style for the given geometry type
   * @param {string} geometryType The type of geometry (Polygon, MultiPolygon, LineString, Point)
   * @param {Style} [sldStyle] The SLD style to use (optional)
   * @returns {Style} The style for the given geometry type
   */
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

  /**
   * Applies feature groups to the map, optionally using SLD styles for styling.
   *
   * This function iterates over the feature groups and adds them to the map with appropriate styles.
   * If SLD data is provided, it will attempt to apply the SLD styles to the features.
   *
   * @param {Object} featureGroups - An object containing groups of features categorized by type.
   * @param {string} [sldString] - The SLD data to use for styling the features.
   */
  applyFeatureGroupsToMap(featureGroups, sldString) {
    const viewProjection = this.map.getView().getProjection();
    const sldObject = sldString ? SLDReader.Reader(sldString) : null;

    Object.keys(featureGroups).forEach(type => {
      const vectorSource = new VectorSource({features: featureGroups[type]});
      const sldStyleFunction = this.applySLDStyles(sldObject, type, viewProjection);
      this.addLayerWithControls(type, vectorSource, sldStyleFunction || this.getStyle(type));
    });

    this.map.render();
    this.requestUpdate();
  }

  /**
   * Groups features by their feature type.
   *
   * This function takes the parsed features and an XML document as input and
   * groups the features by their feature type. The feature type is determined by
   * the local name of the first child element of the feature member element.
   *
   * @param {Array<ol/Feature>} features - The parsed features to group.
   * @param {XMLDocument} xmlDoc - The XML document containing the feature members.
   * @returns {Object} An object with feature type as keys and arrays of features as values.
   */
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

  /**
   * Removes all vector layers from the map and resets the data toggle.
   *
   * This function is called when a new GML file is selected and we want to remove all the
   * previously added vector layers from the map and reset the data toggle.
   */
  resetLayers() {
    this.vectorLayers.forEach((layer) => {
      this.map.removeLayer(layer)
    })
    this.vectorLayers = []
    const toggleElement = this.shadowRoot.getElementById('map-legend')
    toggleElement.innerHTML = 'Vælg Lag:'
  }


  /**
 * Adds a vector layer to the map with controls for visibility and styling.
 *
 * This function creates a vector layer using the provided vector source and style function.
 * It also adds a checkbox to toggle the visibility of the layer, and color pickers
 * for adjusting the layer's fill color, stroke color, and stroke width.
 *
 * @param {string} type - The type or name of the layer.
 * @param {ol/source/Vector} vectorSource - The vector source for the layer.
 * @param {function} [sldStyleFunction] - Optional style function for the layer.
 */
  addLayerWithControls(type, vectorSource, sldStyleFunction) {
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: sldStyleFunction || ((feature) => this.getStyle(feature.getGeometry().getType()))
    });
    console.log()

    this.map.addLayer(vectorLayer);
    this.vectorLayers.push(vectorLayer);

    // Create a checkbox and color pickers for the layer
    const layerToggleDiv = document.createElement('div');
    layerToggleDiv.classList.add('legend-element');

    // Add a simple symbol div
    const mapSymbol = document.createElement('div');
    
    mapSymbol.style.width = '16px';
    mapSymbol.style.height = '16px';
    mapSymbol.style.border = '1px solid #000';
    mapSymbol.style.backgroundColor = '#7cb5ec'; // Default color, can be adjusted
    mapSymbol.style.display = 'inline-block';
    mapSymbol.style.marginRight = '5px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.addEventListener('change', () => {
      vectorLayer.setVisible(checkbox.checked);
    });

    const label = document.createElement('label');
    label.textContent = type;

    layerToggleDiv.appendChild(checkbox);
    layerToggleDiv.appendChild(mapSymbol);
    layerToggleDiv.appendChild(label);

    this.shadowRoot.getElementById('map-legend').appendChild(layerToggleDiv);
  }

  // Drag and Drop Functions
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
      <div part="map-container" class="map-container" id="map-container" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}" @drop="${this.onDrop}">
        <div id="map" class="map"></div>

        <div id="map-legend"></div>
        
        <div id="metadata"></div>
        

        <div id="controls-container">
          <label class="control-icon" title="Zoom In" @click="${this.zoomIn}">
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linejoin="round" stroke-linecap="round" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M0.5 14.5H28.5M14.5 0.5L14.5 28.5"/>
              </g>
            </svg>
          </label>
          <label class="control-icon" title="Zoom Out" @click="${this.zoomOut}">
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linejoin="round" stroke-linecap="round" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M0.5 14.5H28.5"/>
              </g>
            </svg>
          </label>
          <label class="control-icon" id="drop-zone" title="Upload Files">
            <input type="file" multiple @change="${this.uploadFiles}"/>
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linecap="round" fill="none" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M1.5 26.5H27.5"/>
                <path d="M2 13.0858L13.7929 1.29292C14.1834 0.902398 14.8166 0.902399 15.2071 1.29292L27 13.0858M14.5 1.08582L14.5 20.4999"/>
              </g>
            </svg>
          </label>
        </div>
        <div id="layer-switcher">
          <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="var(--ds-icon-color, black)" stroke-linejoin="round" stroke-linecap="round" stroke-width="var(--ds-icon-stroke, 1)">
              <path d="M1.5 14L14.5 20.5L27.5 14M1.5 20L14.5 26.5L27.5 20M14.5 2.5L1.5 8L14.5 14.5L27.5 8L14.5 2.5Z"></path>
            </g>
          </svg>

          <div class="radio-options">
            <label>
              <input type="radio" name="base-layer" value="1" checked> Skærmkort
            </label>
            <label>
              <input type="radio" name="base-layer" value="2"> Ortofoto
            </label>
          </div>
        </div>
        <div id="map"></div>
        <div id="compass-container">
          <svg class="ds-icon" width="40" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15" fill="var(--c8, black)" stroke="var(--white, white)" stroke-width="var(--ds-icon-stroke, 1)"/>
            <g stroke="var(--white, white)" stroke-linecap="round" stroke-linejoin="round">
              <path id="west" d="M3.9 16.79L7.12 15.5L3.9 14.21"/>
              <path id="east" d="M23.88 16.79L27.1 14.21M25.81 16.79H25.16C24.45 16.79 23.88 16.21 23.88 15.5C23.88 14.79 24.45 14.21 25.16 14.21H25.81C26.52 14.21 27.1 14.79 27.1 15.5C27.1 16.21 26.52 16.79 25.81 16.79Z"/>
              <path id="south" d="M14.21 26.46C14.21 26.81 14.5 27.1 14.86 27.1H16.06C16.46 27.1 16.79 26.78 16.79 26.38C16.79 26.05 16.56 25.76 16.24 25.68L14.76 25.3C14.44 25.22 14.21 24.93 14.21 24.6C14.21 24.2 14.54 23.88 14.93 23.88H16.14C16.5 23.88 16.79 24.17 16.79 24.52"/>
              <path id="north" d="M14.21 7.12L14.22 3.9L16.79 7.12V3.9"/>
            </g>
            <path id="north-pointer" d="M12.13 15.49C12.12 15.02 12.29 14.72 12.45 14.41L14.96 9.4C15.15 8.99 15.8 9.01 15.99 9.37L18.63 14.65C18.73 14.87 18.85 15.16 18.84 15.49L17.21 15.49C17.21 15.49 17.12 13.78 15.49 13.77C13.86 13.76 13.75 15.49 13.75 15.49L12.13 15.49Z" fill="var(--r5, red)"/>
            <path id="south-pointer" d="M12.12 15.5C12.12 15.96 12.28 16.26 12.44 16.58L14.95 21.58C15.14 21.99 15.79 21.97 15.98 21.61L18.62 16.33C18.73 16.12 18.84 15.82 18.83 15.49L17.2 15.49C17.2 15.49 17.12 17.2 15.48 17.21C13.85 17.22 13.75 15.5 13.75 15.5L12.12 15.5Z" fill="var(--white, white)"/>
            <path d="M5.19 5.19L7.77 7.77M25.81 5.19L23.23 7.77M25.81 25.81L23.23 23.23M5.19 25.81L7.77 23.23" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--ds-icon-stroke, 1)"/>
          </svg>
        </div>
      </div>
    `;
  }
}
