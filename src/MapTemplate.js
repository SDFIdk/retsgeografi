import { LitElement, html, css } from '../node_modules/lit-element/lit-element.js';

export class MapTemplate extends LitElement {
  static styles = css`
      /* Add your styles here */
  `;

  static properties = {
    gmlFile: { type: String, reflect: true },
    xmlFile: { type: String, reflect: true },
    sldFile: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.gmlFile = '';
    this.xmlFile = '';
    this.sldFile = '';
  }

  updated(changedProperties) {
    // Log updates to ensure properties are being set correctly
    if (changedProperties.has('gmlFile') || changedProperties.has('xmlFile') || changedProperties.has('sldFile')) {
      console.log('Updated Properties:', this.gmlFile, this.xmlFile, this.sldFile);
    }
  }

  render() {
    console.log('Rendering with:', this.gmlFile, this.xmlFile, this.sldFile);

    return html`
      <map-viewer
        .gmlFile="${this.gmlFile}"
        .xmlFile="${this.xmlFile}"
        .sldFile="${this.sldFile}">
      </map-viewer>
    `;
  }
}
