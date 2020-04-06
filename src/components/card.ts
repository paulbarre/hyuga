import * as css from './card.css'

class HCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.textContent = css.toString()

    const div = document.createElement('div')
    div.innerHTML = 'Bonjour, je suis une carte'

    shadow.appendChild(style)
    shadow.appendChild(div)
  }
}
window.customElements.define('h-card', HCard)
