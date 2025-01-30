import { LitElement, html, css } from 'lit';

export class MapExample extends LitElement {
	static styles = css`
  
  `;

	render() {
      const gmlFile = './examples/2019/713/data_demo.gml';
      const xmlFile = './examples/2019/713/metadata.xml';
      const sldFile = './examples/2019/713/styles.sld';

      return html`
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
      `;
  }
}
