import Vue from 'vue'
import App from './App.vue'
import 'hyuga'
import 'hyuga/dist/main.css'

Vue.config.ignoredElements = [/h-card/]
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
