import { html, LitElement } from 'lit';

export class MainPage extends LitElement {
  render() {
    return html`
      <div>
        <button @click="${() => { this.navigate('/map') }}">Map</button>
        <button @click="${() => { this.navigate('/bekendtgorelse') }}">Bekendtgørelse</button>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('main-page', MainPage);
