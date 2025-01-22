import { LitElement, html, css } from 'lit';

export class MapTemplate extends LitElement {
  static styles = css`
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
          <map-viewer
          </map-viewer>
      `;
  }
}
