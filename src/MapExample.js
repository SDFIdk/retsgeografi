import { LitElement, html, css } from 'lit';

export class MapExample extends LitElement {
	static styles = css`
  
  `;

	render() {
      const gmlFile = './examples/2019/713/data_demo.gml';
      const xmlFile = './examples/2019/713/metadata.xml';
      const sldFile = './examples/2019/713/styles.sld';
      console.log("MapExample XML", xmlFile);
      console.log('MapExample GML', gmlFile);
      console.log('MapExample SLD', sldFile);
      console.log('Change has been made')

      return html`
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
          <a href="#map-example" role="button">MapExample</a>
          <a href="#map-template" role="button">MapTemplate</a>
          <a href="#map-viewer" role="button">MapViewer</a>
      `;
  }
}
