import { LitElement, html, css } from 'lit';

export class MapTemplate extends LitElement {
  static styles = css`
      /* Add your styles here */
  `;

  constructor() {
    super();
  }

  render() {

    const gmlFile = './examples/2019/713/data.gml';
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
