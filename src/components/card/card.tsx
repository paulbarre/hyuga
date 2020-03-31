import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'h-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  @Prop() outlined?: boolean

  @Prop() raised?: boolean

  @Prop() rounded?: boolean

  render() {
    return (
      <div
        class={{
          'content': true,
          'rounded': this.rounded,
          'outlined': this.outlined,
          'raised': this.raised
        }}
      >
        <slot></slot>
      </div>
    )
  }
}