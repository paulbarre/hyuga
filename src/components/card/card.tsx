import { Component, h } from '@stencil/core'

@Component({
  tag: 'h-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  render() {
    return <div><slot></slot></div>
  }
}