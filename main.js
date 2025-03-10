// src/main.js
import { html, LitElement } from './node_modules/lit-element/lit-element.js';
import './src/MapViewer.js';
import './index.css';
import { MapViewer } from './src/MapViewer.js';
import { MapTemplate } from './src/MapTemplate.js';
import { MapExample } from './src/MapExample.js';
import { routing } from './src/router/router.js';


export class Main extends LitElement {
  static properties = {
    route: { type: String }, // Dynamic route property
  };

  constructor() {
    super();
    this.route = window.location.hash || '#map-viewer'; // Set initial route
    this._setupRouting(); // Initialize hashchange listener
  }

  /**
   * Initializes a hashchange listener to update the route dynamically.
   * The hashchange event is dispatched when the fragment identifier of the URL changes.
   * @private
   */
  _setupRouting() {
    window.addEventListener('hashchange', () => {
      this.route = window.location.hash || '#map-viewer'; // Update route dynamically
    });
  }

  render() {
    return html`
      <main>
        ${routing(this.route)} <!-- Pass the current route to the router -->
        <div>
        <div><a href="#map-template" role="button">MapTemplate</a> - Viser et tomt kort, der referer til skabelonen MapTemplate.js, hvor man let kan udfylde med egen data</div>
        <div><a href="#map-example" role="button">MapExample</a> - Viser et kort med udfyldt datasæt. Samme opsætning som ved MapTemplate</div>
        <div><a href="#map-viewer" role="button">Kort</a> - Viser et tomt kort, der betegner selve MapViewer.js</div>
        </div>
      </main>
    `;
  }

  // Optional: Render into the light DOM (if required for styling)
  createRenderRoot() {
    return this;
  }
}




// Register custom elements
customElements.define('main-component', Main);
customElements.define('map-viewer', MapViewer);
customElements.define('map-template', MapTemplate);
customElements.define('map-example', MapExample);

export { MapViewer, MapTemplate, MapExample };
