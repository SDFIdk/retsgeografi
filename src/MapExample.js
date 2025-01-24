import { LitElement, html, css } from '../node_modules/lit-element/lit-element.js';

export class MapExample extends LitElement {
	static styles = css`
  
  `;

	render() {
      const gmlFile = '/src/examples/2019/713/data_demo.gml';
      const xmlFile = '/src/examples/2019/713/metadata.xml';
      const sldFile = '/src/examples/2019/713/styles.sld';
      console.log("MapExample XML", xmlFile);
      console.log('MapExample GML', gmlFile);
      console.log('MapExample SLD', sldFile);


      return html`
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
          <a href="#map-example" role="button">MapExample</a>
          <a href="#map-template" role="button">MapTemplate</a>
          <a href="#map" role="button">Kort</a>
      `;
  }
}
