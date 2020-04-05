class HCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Bonjour, je suis une carte'
  }
}
window.customElements.define('h-card', HCard)
