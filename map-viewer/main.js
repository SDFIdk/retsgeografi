import {html, LitElement} from 'lit';
import '/src/style/style.css';
import {routing} from '@/router/router.js';

export class Main extends LitElement {
  static get properties() {
    return {
      route: {state: true}
    }
  }

  constructor() {
    super();
    this.route = window.location.pathname;
    window.addEventListener('popstate', this._onRouteChange.bind(this));
  }

  _onRouteChange = () => {
    this.route = window.location.pathname;
  };

  navigate = (path) => {
    history.pushState(null, '', path);
    this._onRouteChange();
  };

  render() {
    return html`
    <main>
      ${routing(this.route)}
    </main>
  `;
  }
}

customElements.define('main-app', Main); // Register the element
