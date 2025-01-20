// src/main.js
import { html, LitElement } from 'lit';
import './src/MapViewer.js';
import '/src/index.css';
import { MapViewer } from './src/MapViewer.js';
import { MapTemplate } from './src/MapTemplate.js';
import { Bekendtgorelse } from './src/examples/2019/713/Bekendtgorelse.js';
import { routing } from './src/router/router.js';
import { ThemeToggle } from '@dataforsyningen/designsystem/assets/designsystem.js'


export class Main extends LitElement {
  static properties = {
    route: { type: String }, // Dynamic route property
  };

  constructor() {
    super();
    this.route = window.location.hash || '#map'; // Set initial route
    this._setupRouting(); // Initialize hashchange listener
  }

  /**
   * Initializes a hashchange listener to update the route dynamically.
   * The hashchange event is dispatched when the fragment identifier of the URL changes.
   * @private
   */
  _setupRouting() {
    window.addEventListener('hashchange', () => {
      this.route = window.location.hash || '#map'; // Update route dynamically
    });
  }

  render() {
    return html`
      <main>
        ${routing(this.route)} <!-- Pass the current route to the router -->
      </main>
    `;
  }

  // Optional: Render into the light DOM (if required for styling)
  createRenderRoot() {
    return this;
  }
}


// CSS
customElements.define('ds-theme-toggle', ThemeToggle)

// Register custom elements
customElements.define('main-component', Main);
customElements.define('map-viewer', MapViewer);
customElements.define('map-template', MapTemplate);
customElements.define('bekendtgorelse-page', Bekendtgorelse);

export { MapViewer, MapTemplate, Bekendtgorelse };
