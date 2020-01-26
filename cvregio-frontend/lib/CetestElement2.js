function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import Cetest from './Cetest';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';
export default class CollapsiblePanel2 extends HTMLElement {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "mountPoint", null);

    _defineProperty(this, "title", '');
  } // createCollapsed(name: string) {
  //     return React.createElement(
  //         Cetest,
  //         { name },
  //         React.createElement('slot')
  //     );
  // }
  // connectedCallback() {
  //     this.mountPoint = document.createElement('span');
  //     // const shadowRoot = this.attachShadow({ mode: 'open' });
  //     // shadowRoot.appendChild(this.mountPoint);
  //     const title = this.getAttribute('title') || this.title;
  //     ReactDOM.render(this.createCollapsed(title), this.mountPoint);
  //     // retargetEvents(shadowRoot);
  // }
  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  //     if (this.mountPoint && name === 'title') {
  //         ReactDOM.render(this.createCollapsed(newValue), this.mountPoint);
  //     }
  // }


} // declare global {
//     // eslint-disable-next-line @typescript-eslint/no-namespace
//     namespace JSX {
//         interface IntrinsicElements {
//             'collapsible-panel': MyElementAttributes;
//         }
//         interface MyElementAttributes {
//             name: string;
//         }
//     }
// }
// window.customElements.define('collapsible-panel', CollapsiblePanel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DZXRlc3RFbGVtZW50Mi50cyJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZVBhbmVsMiIsIkhUTUxFbGVtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZUFBZSxNQUFNQSxpQkFBTixTQUFnQ0MsV0FBaEMsQ0FBNEM7QUFBQTtBQUFBOztBQUFBLHdDQUtsQixJQUxrQjs7QUFBQSxtQ0FPL0MsRUFQK0M7QUFBQSxJQVN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUEvQnVELEMsQ0FrQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyBpbXBvcnQgQ2V0ZXN0IGZyb20gJy4vQ2V0ZXN0Jztcbi8vIGltcG9ydCAqIGFzIHJldGFyZ2V0RXZlbnRzIGZyb20gJ3JlYWN0LXNoYWRvdy1kb20tcmV0YXJnZXQtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2libGVQYW5lbDIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgLy8gc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgLy8gICAgIHJldHVybiBbJ3RpdGxlJ107XG4gICAgLy8gfVxuXG4gICAgbW91bnRQb2ludDogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICB0aXRsZSA9ICcnO1xuXG4gICAgLy8gY3JlYXRlQ29sbGFwc2VkKG5hbWU6IHN0cmluZykge1xuICAgIC8vICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAvLyAgICAgICAgIENldGVzdCxcbiAgICAvLyAgICAgICAgIHsgbmFtZSB9LFxuICAgIC8vICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2xvdCcpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gICAgIHRoaXMubW91bnRQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyAgICAgLy8gY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIC8vICAgICAvLyBzaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMubW91bnRQb2ludCk7XG5cbiAgICAvLyAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aGlzLnRpdGxlO1xuICAgIC8vICAgICBSZWFjdERPTS5yZW5kZXIodGhpcy5jcmVhdGVDb2xsYXBzZWQodGl0bGUpLCB0aGlzLm1vdW50UG9pbnQpO1xuICAgIC8vICAgICAvLyByZXRhcmdldEV2ZW50cyhzaGFkb3dSb290KTtcbiAgICAvLyB9XG5cbiAgICAvLyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLm1vdW50UG9pbnQgJiYgbmFtZSA9PT0gJ3RpdGxlJykge1xuICAgIC8vICAgICAgICAgUmVhY3RET00ucmVuZGVyKHRoaXMuY3JlYXRlQ29sbGFwc2VkKG5ld1ZhbHVlKSwgdGhpcy5tb3VudFBvaW50KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuLy8gZGVjbGFyZSBnbG9iYWwge1xuLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG4vLyAgICAgbmFtZXNwYWNlIEpTWCB7XG4vLyAgICAgICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4vLyAgICAgICAgICAgICAnY29sbGFwc2libGUtcGFuZWwnOiBNeUVsZW1lbnRBdHRyaWJ1dGVzO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgaW50ZXJmYWNlIE15RWxlbWVudEF0dHJpYnV0ZXMge1xuLy8gICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2xsYXBzaWJsZS1wYW5lbCcsIENvbGxhcHNpYmxlUGFuZWwpO1xuIl19