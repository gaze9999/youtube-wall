import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toastr from 'vue-toastr';
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs-logger'
import VueYoutube from 'vue-youtube'
import VueClipboard from 'vue-clipboard2'

const isProduction = process.env.NODE_ENV === 'production'

const toastrConfig = {
  defaultTimeout: 2000,
  defaultProgressBar: false,
  defaultPosition: "toast-bottom-right",
  defaultCloseOnHover: false,
}

const vueLoggerOptions = {
  isEnabled: true,
  logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueLogger, vueLoggerOptions)
Vue.use(Toastr, toastrConfig)
Vue.use(VueYoutube)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
