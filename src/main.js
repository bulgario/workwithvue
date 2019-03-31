import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'

import Home from './components/Home'
import Menu from './components/Menu'

Vue.use(VueRouter);

const routes = [
  { path: '/Menu', component: Menu },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
}).$mount('#app')
