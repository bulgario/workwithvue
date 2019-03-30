import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Home from  './components/Home.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
  
}).$mount('#app')
