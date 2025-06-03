import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// custom components
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs3-logger'
import VueYoutube from '@vue-youtube/core'
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

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.use(VueGtm, {
  id: 'GTM-MMCLTMJ',
  enabled: true,
  debug: false,
})
app.use(VueLogger, vueLoggerOptions)
app.use(VueYoutube)
app.use(VueClipboard)

app.mount('#app')
