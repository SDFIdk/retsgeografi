import { LitElement, html, css } from 'lit';

export class Bekendtgorelse extends LitElement {
	static styles = css`
    .map-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
    }        
  `;

	render() {
      const gmlFile = '/2019/713/data_demo.gml';
      const xmlFile = '/2019/713/metadata.xml';
      const sldFile = '/2019/713/styles.sld';
      console.log("Bekendtgørelse XML", xmlFile);
      console.log('Bekendtgørelse GML', gmlFile);
      console.log('Bekendtgørelse SLD', sldFile);


      return html`
        <div class="map-container">
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
        </div>
      `;
  }
}
