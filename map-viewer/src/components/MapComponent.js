// src/components/MapComponent.js
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { WMTS, WMTSTileGrid } from 'ol/source';

export class MapComponent {
  constructor(targetId, projection) {
    this.map = this.initMap(targetId, projection);
  }

  initMap(targetId, projection) {
    return new Map({
      target: document.getElementById(targetId),
      layers: [
        new TileLayer({
          source: new WMTS({
            url: 'https://services.datafordeler.dk/DKskaermkort/topo_skaermkort_daempet/1.0.0/wmts?username=QKJBQATHVS&password=ytxCA8UGM5n0Z*zi',
            layer: 'topo_skaermkort_daempet',
            matrixSet: 'View1',
            format: 'image/jpeg',
            style: 'default',
            tileGrid: new WMTSTileGrid({
              extent: [120000, 5900000, 1000000, 6500000],
              resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
              matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            }),
          }),
          visible: true,
        }),
      ],
      view: new View({
        center: [600000, 6225000],
        zoom: 9,
        projection: projection,
      }),
      controls: [],
    });
  }

  getMap() {
    return this.map;
  }
}
