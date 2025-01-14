import { LitElement, html, css } from 'lit';

export class Bekendtgorelse extends LitElement {
	static styles = css`
  
  `;

	render() {
      const gmlFile = '/src/examples/2019/713/data_demo.gml';
      const xmlFile = '/src/examples/2019/713/metadata.xml';
      const sldFile = '/src/examples/2019/713/styles.sld';
      console.log("Bekendtgørelse XML", xmlFile);
      console.log('Bekendtgørelse GML', gmlFile);
      console.log('Bekendtgørelse SLD', sldFile);


      return html`
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
      `;
  }
}
