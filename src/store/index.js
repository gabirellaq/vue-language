import Vue from 'vue'
import Vuex from 'vuex'

import newslatest from './modules/newslatest'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newslatest
  }
})