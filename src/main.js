import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// custom components
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs-logger'
import VueYoutube from 'vue-youtube'
import VueClipboard from 'vue-clipboard2'
import VueGtm from 'vue-gtm'

const isProduction = process.env.NODE_ENV === 'production'

const vueLoggerOptions = {
  isEnabled: true,
  logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueGtm, {
  id: 'GTM-MMCLTMJ',
  enabled: true,
  debug: false,
});

Vue.use(VueLogger, vueLoggerOptions)
Vue.use(VueYoutube)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
