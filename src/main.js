import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.filter('time', (input) => {
  const separator = ':'
  let seconds = Math.floor(input % 60)
  let minutes = Math.floor(input / 60)
  let hours = Math.floor(input / 3600)
  let output = ''
  if (hours) output += hours + separator
  if (hours && minutes < 10) output += '0'
  output += minutes + separator
  if (seconds < 10) output += '0'
  output += seconds
  return output
})

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
