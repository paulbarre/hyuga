class HCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.textContent = `
      div { color: red; }
    `

    const div = document.createElement('div')
    div.innerHTML = 'Bonjour, je suis une carte'

    shadow.appendChild(style)
    shadow.appendChild(div)
  }
}
window.customElements.define('h-card', HCard)
