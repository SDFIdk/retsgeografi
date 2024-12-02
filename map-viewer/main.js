import {html, LitElement} from 'lit';
import '/src/style/style.css';
import {routing} from './src/router/router.js';
import{ MapViewer } from 'src/components/MapViewer.js'

export class Main extends LitElement {
  static get properties() {
    return {
      route: {state: true}
    }
  }

  render() {
    return html`
      <main-page>
        ${routing(this.route)}
      </main-page>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('main-page', Main);
customElements.define('map-viewer', MapViewer)
