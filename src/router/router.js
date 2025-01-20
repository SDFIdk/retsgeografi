import {html} from 'lit';

/**
 * Given a route, returns the appropriate content.
 * @param {string} route - route to match
 * @returns {LitElement} - appropriate content
 */
export function routing(route) {
  if (route === '#map') {
    return html`
    <map-viewer data-theme="light"></map-viewer>`
  }
  if (route === '#bekendtgorelse') {
    return html`
    <bekendtgorelse-page data-theme="light"></bekendtgorelse-page>`
  }
  if (route === '#map-template') {
    return html`
    <map-template data-theme="light"></map-template>`
  }
}
