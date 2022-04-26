import baseConfig from './svelte.config.base.js'

export default {
  ...baseConfig,
  compilerOptions: {
    customElement: true,
    tag: null
  }
}
