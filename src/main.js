import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store.js'
import router from './router/index.js'

Vue.config.productionTip = false

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
