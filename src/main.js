import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toastr from 'vue-toastr';
import vuetify from './plugins/vuetify'
import VueYoutube from 'vue-youtube'

const toastrConfig = {
  defaultTimeout: 2000,
  defaultProgressBar: false,
  defaultPosition: "toast-bottom-right",
  defaultCloseOnHover: false,
};
Vue.use(Toastr, toastrConfig)
Vue.use(VueYoutube)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
