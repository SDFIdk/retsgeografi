// src/main.js
import { html, LitElement } from 'lit';
import './src/components/MapViewer.js';
import '/src/index.css';
import { MapViewer } from './src/components/MapViewer.js';
import { Bekendtgorelse } from './public/2019/713/Bekendtgorelse.js';
import { routing } from './src/router/router.js';

export class Main extends LitElement {
  static properties = {
    route: { type: String }, // Dynamic route property
  };

  constructor() {
    super();
    this.route = window.location.hash || '#map'; // Set initial route
    this._setupRouting(); // Initialize hashchange listener
  }

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

// Register custom elements
customElements.define('main-component', Main);
customElements.define('map-viewer', MapViewer);
customElements.define('bekendtgorelse-page', Bekendtgorelse);
