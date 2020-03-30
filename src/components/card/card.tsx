import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'h-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  @Prop() outlined?: boolean

  render() {
    return (
      <div
        class={{
          'outlined': this.outlined
        }}
      >
        <slot></slot>
      </div>
    )
  }
}