import { LitElement, html, css } from 'lit';

export class MapTemplate extends LitElement {
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
    // Insert your code here
    const gmlFile = 'path/gml.gml';
    const xmlFile = 'path/metadata.xml';
    const sldFile = 'path/styles.sld';
    console.log("XML", xmlFile);
    console.log('GML', gmlFile);
    console.log('SLD', sldFile);


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
