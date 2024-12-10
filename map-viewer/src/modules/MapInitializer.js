// MapInitializer.js

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {WMTS} from 'ol/source.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import {get} from "ol/proj.js";

/**
 * Initializes the OpenLayers map instance.
 * @param {string} targetId - The ID of the HTML element where the map will be rendered.
 * @param {Object} options - Additional options for initializing the map.
 * @returns {ol/Map} - The initialized OpenLayers map instance.
 */


const epsg25832 = get('EPSG:25832');
const initializeMap = (targetId, options = {}) => {
  const { center = [10.0, 56.0], zoom = 7, projection = 'EPSG:3857', tileUrl = null } = options;

  const layers = [
    new TileLayer({
      source: tileUrl
        ? new XYZ({ url: tileUrl })
        : new XYZ({ url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' }),
    }),
  ];

  const map = new Map({
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
      }), visible: true,
    }),], view: new View({
      center: [600000, 6225000], zoom: 9, projection: epsg25832,
    }), controls: [],
  });

  return map;
};

export default initializeMap;
