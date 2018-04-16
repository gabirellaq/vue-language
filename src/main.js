// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store';


import 'lib-flexible'
import './assets/css/base.scss'

Vue.config.productionTip = false

import VueI18n from 'vue-i18n'
import getCookie from '../src/utils/cookie'

Vue.use(Vuex)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG','zh'),    // 语言标识
  messages: {
      'zh': require('../src/lang/zh'),
      'en': require('../src/lang/en')
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
