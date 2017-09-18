import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VuelazyLoad from 'vue-lazyload'
import 'element-ui/lib/theme-default/index.css'
// import VueLazyload from 'vue-lazyload' import store from './store'
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VuelazyLoad, {
  loading: require('./common/image/default.png')
})

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
