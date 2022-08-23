import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.prototype.$http = axios
Vue.config.productionTip = false

import SweetModal from "sweet-modal-vue/src/plugin.js";
Vue.use(SweetModal);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
