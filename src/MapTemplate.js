import { LitElement, html, css } from 'lit';

export class MapTemplate extends LitElement {
  static styles = css``;

  // Define reactive properties for the component
  static properties = {
    gmlFile: { type: String },
    xmlFile: { type: String },
    sldFile: { type: String },
  };

  constructor() {
    super();
    // Initialize default values
    this.gmlFile = '';
    this.xmlFile = '';
    this.sldFile = '';
  }

  render() {
    console.log('XML:', this.xmlFile);
    console.log('GML:', this.gmlFile);
    console.log('SLD:', this.sldFile);

    return html`
      <map-viewer
          .gmlFile="${this.gmlFile}"
          .xmlFile="${this.xmlFile}"
          .sldFile="${this.sldFile}">
      </map-viewer>
    `;
  }
}
