import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'h-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  @Prop() outlined?: boolean
  @Prop() notOutlined?: boolean
  @Prop() raised?: boolean
  @Prop() notRaised?: boolean
  @Prop() rounded?: boolean
  @Prop() notRounded?: boolean

  render() {
    return (
      <div
        class={{
          'rounded': this.rounded,
          'not-rounded': this.notRounded,
          'outlined': this.outlined,
          'not-outlined': this.notOutlined,
          'raised': this.raised,
          'not-raised': this.notRaised
        }}
      >
        <slot></slot>
      </div>
    )
  }
}