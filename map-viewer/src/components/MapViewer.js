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
    this.showSecondMap = false;
    this.vectorLayers = [];  // Store added vector layers
    this.styles = {
      fillColor: null, // Default fill color
      strokeColor: null, // Default stroke color
      strokeWidth: 1, // Default stroke width
    };
  }

  firstUpdated() {
    this.initMaps();
  }

  initMaps() {
    this.map1 = new Map({
      target: this.shadowRoot.getElementById('map1'),
      layers: [
        new TileLayer({
          opacity: 1.0,
          title: 'Skærmkortet',
          type: 'base',
          visible: true,
          source: new WMTS({
            url: 'https://api.dataforsyningen.dk/topo_skaermkort_daempet_DAF?token=9ca510be3c4eca89b1333cadbaa60c36',
            layer: 'topo_skaermkort_daempet',
            matrixSet: 'View1',
            format: 'image/jpeg',
            style: 'default',
            size: [256, 256],
            axisOrientation: 'enu',
            tileGrid: new WMTSTileGrid({
              extent: [120000, 5900000, 1000000, 6500000],
              resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
              matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
            })
          })
        }),
      ],
      view: new View({
        center: [600000, 6225000],
        zoom: 8,
        projection: epsg25832  // Ensure correct projection is set
      }),
      controls: [], // Remove default controls
    });
  }



  getStyle(geometryType, sldStyle = null) {
    // If SLD style is available, use it and skip the default style
    if (sldStyle) {
      return sldStyle;
    }

    // If no SLD style, use default styles
    const { fillColor, strokeColor, strokeWidth } = this.styles;

    if (geometryType === 'Polygon') {
      return new Style({
        fill: new Fill({
          color: fillColor || null,  // Only use default if no fillColor is set
        }),
        stroke: new Stroke({
          color: strokeColor || null,  // Only use default if no strokeColor is set
          width: strokeWidth || 1,
        }),
      });
    } else if (geometryType === 'LineString') {
      return new Style({
        stroke: new Stroke({
          color: strokeColor || null,
          width: strokeWidth || 1,
        }),
      });
    } else if (geometryType === 'Point') {
      return new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: fillColor || null }),
          stroke: new Stroke({ color: strokeColor || null, width: 1 }),
        }),
      });
    } else {
      return new Style({
        stroke: new Stroke({
          color: strokeColor || null,
          width: strokeWidth || 1,
        }),
      });
    }
  }



  toggleSecondMap() {
    this.showSecondMap = !this.showSecondMap;
    this.shadowRoot.getElementById('map2').style.display = this.showSecondMap ? 'block' : 'none';
  }

  zoomIn() {
    const view = this.map1.getView();
    view.setZoom(view.getZoom() + 1);
  }

  zoomOut() {
    const view = this.map1.getView();
    view.setZoom(view.getZoom() - 1);
  }

  uploadFiles(event) {
    const files = event.target.files;
    const gmlFile = [...files].find(file => file.name.endsWith('.gml'));
    const sldFile = [...files].find(file => file.name.endsWith('.sld'));

    if (gmlFile) {
      const gmlReader = new FileReader();
      gmlReader.onload = () => {
        if (sldFile) {
          const sldReader = new FileReader();
          sldReader.onload = () => {
            const sldString = sldReader.result;
            console.log('This goes through the styles:', sldReader.result);
            const styles = this.parseSLD(sldString);



            this.loadGML(gmlReader.result, styles);  // Pass styles to loadGML
          };
          sldReader.readAsText(sldFile);
        } else {
          this.loadGML(gmlReader.result, null);  // No SLD file
        }
      };
      gmlReader.readAsText(gmlFile);
    }
  }

  updateStyle() {
    // Update styles based on user input
    const fillColor = this.shadowRoot.getElementById('fill-color').value;
    const strokeColor = this.shadowRoot.getElementById('stroke-color').value;
    const strokeWidth = parseFloat(this.shadowRoot.getElementById('stroke-width').value);

    this.styles = {
      fillColor,
      strokeColor,
      strokeWidth,
    };

    // Update each vector layer's style
    this.vectorLayers.forEach(layer => {
      layer.setStyle((feature) => {
        const geometryType = feature.getGeometry().getType();
        return this.getStyle(geometryType);
      });
    });
  }



  parseSLD(sldString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(sldString, 'application/xml');

    const styles = {};

    console.log('Parsed SLD Styles:', styles);

    // PolygonSymbolizer Parsing
    const polygonSymbols = xmlDoc.getElementsByTagName('PolygonSymbolizer');
    for (let i = 0; i < polygonSymbols.length; i++) {
      const fillElement = polygonSymbols[i].getElementsByTagName('Fill')[0]?.getElementsByTagName('CssParameter')[0];
      const strokeElement = polygonSymbols[i].getElementsByTagName('Stroke')[0]?.getElementsByTagName('CssParameter');

      const fillColor = fillElement ? fillElement.textContent : 'rgba(255, 0, 0, 0.5)';
      let strokeColor = '#73ff00';  // Default stroke color
      let strokeWidth = 2;          // Default stroke width

      if (strokeElement) {
        // Iterate over the stroke elements to find relevant parameters
        for (let j = 0; j < strokeElement.length; j++) {
          const paramName = strokeElement[j].getAttribute('name');
          const paramValue = strokeElement[j].textContent;

          if (paramName === 'stroke') {
            strokeColor = paramValue;
          }
          if (paramName === 'stroke-width') {
            strokeWidth = parseFloat(paramValue);
          }
        }
      }

      styles['Polygon'] = new Style({
        fill: new Fill({ color: fillColor }),
        stroke: new Stroke({ color: strokeColor, width: strokeWidth })
      });
    }

    // LineSymbolizer Parsing
    const lineSymbols = xmlDoc.getElementsByTagName('LineSymbolizer');
    for (let i = 0; i < lineSymbols.length; i++) {
      const strokeElement = lineSymbols[i].getElementsByTagName('Stroke')[0]?.getElementsByTagName('CssParameter');

      let strokeColor = '#73ff00';  // Default stroke color
      let strokeWidth = 2;          // Default stroke width

      if (strokeElement) {
        // Iterate over the stroke elements to find relevant parameters
        for (let j = 0; j < strokeElement.length; j++) {
          const paramName = strokeElement[j].getAttribute('name');
          const paramValue = strokeElement[j].textContent;

          if (paramName === 'stroke') {
            strokeColor = paramValue;
          }
          if (paramName === 'stroke-width') {
            strokeWidth = parseFloat(paramValue);
          }
        }
      }

      styles['LineString'] = new Style({
        stroke: new Stroke({ color: strokeColor, width: strokeWidth })
      });
    }

    // PointSymbolizer Parsing
    const pointSymbols = xmlDoc.getElementsByTagName('PointSymbolizer');
    for (let i = 0; i < pointSymbols.length; i++) {
      const fillColor = pointSymbols[i].getElementsByTagName('Graphic')[0]?.getElementsByTagName('Mark')[0]?.getElementsByTagName('Fill')[0]?.getElementsByTagName('CssParameter')[0]?.textContent;

      styles['Point'] = new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: fillColor || '#73ff00' }),
          stroke: new Stroke({ color: '#73ff00', width: 1 })
        })
      });
    }

    return styles;
  }




  loadGML(gmlString, sldStyles) {
    const format = new GML32();
    let features;

    try {
      features = format.readFeatures(gmlString, {
        featureProjection: epsg25832,
        dataProjection: epsg25832,
      });
    } catch (error) {
      console.error('Error parsing GML:', error);
      return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(gmlString, "application/xml");
    const featureGroups = {};

    features.forEach((feature, index) => {
      const featureMember = xmlDoc.getElementsByTagName("gml:featureMember")[index];
      let featureType = 'Unnamed Type';  // Fallback if no type is found
      if (featureMember && featureMember.children.length > 0) {
        featureType = featureMember.children[0].localName;
      }
      if (!featureGroups[featureType]) {
        featureGroups[featureType] = [];
      }
      featureGroups[featureType].push(feature);
    });

    Object.keys(featureGroups).forEach(featureType => {
      const vectorSource = new VectorSource({
        features: featureGroups[featureType],
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        title: featureType,
        visible: true,
        // Pass SLD styles if available
        style: (feature) => this.getStyle(feature.getGeometry().getType(), sldStyles ? sldStyles[featureType] : null),
      });

      this.map1.addLayer(vectorLayer);
      this.vectorLayers.push(vectorLayer);

      // Add the layer toggles in UI
      const layerToggles = this.shadowRoot.getElementById('layer-toggles');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = true;
      checkbox.addEventListener('change', () => this.toggleLayer(vectorLayer));

      const label = document.createElement('label');
      label.textContent = featureType;
      label.prepend(checkbox);
      layerToggles.appendChild(label);
    });
  }

  toggleLayer(layer) {
    layer.setVisible(!layer.getVisible());
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

          <input type="file" id="file-input" multiple accept=".gml,.sld" @change="${this.uploadFiles}" />
          <label class="control-label" for="file-input" title="Upload GML & SLD">
            <svg>
              <use href="${svg}#arrow-up"></use>
            </svg>
          </label>

          <!-- Color pickers and stroke width input -->
          <div>
            <label for="fill-color">Fill Color:</label>
            <input type="color" id="fill-color" value="${this.styles.fillColor}" @input="${this.updateStyle}">
          </div>
          <div>
            <label for="stroke-color">Stroke Color:</label>
            <input type="color" id="stroke-color" value="${this.styles.strokeColor}" @input="${this.updateStyle}">
          </div>
          <div>
            <label for="stroke-width">Stroke Width:</label>
            <input type="number" id="stroke-width" value="${this.styles.strokeWidth}" min="1" max="10" @input="${this.updateStyle}">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('map-viewer', MapViewer);
