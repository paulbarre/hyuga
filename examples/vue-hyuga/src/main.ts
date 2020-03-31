import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { applyPolyfills, defineCustomElements } from "hyuga/loader";

// The following can be set into your `vue.config.js` file
Vue.config.ignoredElements = [/h-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
