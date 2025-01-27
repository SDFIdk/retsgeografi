import {html} from 'lit';

/**
 * Given a route, returns the appropriate content.
 * @param {string} route - route to match
 * @returns {LitElement} - appropriate content
 */
export function routing(route) {
  if (route === '#map-viewer') {
    return html`
    <map-viewer></map-viewer>`
  }
  if (route === '#map-example') {
    return html`
    <map-example></map-example>`
  }
  if (route === '#map-template') {
    return html`
    <map-template></map-template>`
  }
}
