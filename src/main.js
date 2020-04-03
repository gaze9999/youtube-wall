import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toastr from 'vue-toastr';

Vue.config.productionTip = false

const toastrConfig = {
  defaultTimeout: 2000,
  defaultProgressBar: false,
  defaultPosition: "toast-top-right",
  defaultCloseOnHover: false,
};
Vue.use(Toastr, toastrConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
