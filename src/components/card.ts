class HCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    const div = document.createElement('div')
    div.innerHTML = 'Bonjour, je suis une carte'
    shadow.appendChild(div)
  }
}
window.customElements.define('h-card', HCard)
