import './card.css'

class HCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>Bonjour, je suis une carte</div>
    `
  }
}
window.customElements.define('h-card', HCard)
