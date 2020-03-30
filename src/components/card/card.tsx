import { Component, h } from '@stencil/core'

@Component({
  tag: 'h-card',
  shadow: true
})
export class Card {
  render() {
    return <div><slot></slot></div>
  }
}