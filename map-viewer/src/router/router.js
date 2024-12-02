// router.js
import {html} from 'lit';

export function routing(route) {

  if (route === '#bekendtgorelse') {
    return html`
      <bekendtgorelse-page></bekendtgorelse-page>`;
  }

  // Default route
  return html`
    <main-page></main-page>`;
}
