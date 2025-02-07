import { LitElement, html, css } from 'lit';

export class MapTemplate extends LitElement {
  static styles = css`
      /* Add your styles here */
  `;

  render() {

    const gmlFile = ''; // Change this to your GML file
    const xmlFile = ''; // Change this to your metadata file
    const sldFile = ''; // Change this to your SLD file

    return html`
      <map-viewer
        .gmlFile="${gmlFile}"
        .xmlFile="${xmlFile}"
        .sldFile="${sldFile}">
      </map-viewer>
    `;
  }
}
