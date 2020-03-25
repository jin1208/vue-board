// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './vuex/store'
import NavBar from '@/layout/NavBar'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component(NavBar.name, NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
