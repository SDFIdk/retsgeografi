// src/router/router.js
import { html } from 'lit';
import '../../data/2019/713/Bekendtgorelse.js'
import '@/components/MapViewer.js'
import '@/MainPage.js'

export const routing = (route) => {
  switch (route) {
    case '/':
      return html`<main-page></main-page>`;
    case '/map':
      return html`<map-viewer></map-viewer>`;
    case '/bekendtgorelse':
      return html`<bekendtgorelse-page></bekendtgorelse-page>`;
    default:
      return html`<h1>404: Page Not Found</h1>`;
  }
};
