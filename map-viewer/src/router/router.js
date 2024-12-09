import {html} from 'lit';

export function routing(route) {
  if (route === '#map') {
    return html`
    <map-viewer></map-viewer>`
  }
  if (route === '#bekendtgorelse') {
    return html`
    <bekendtgorelse-page></bekendtgorelse-page>`
  }
}
