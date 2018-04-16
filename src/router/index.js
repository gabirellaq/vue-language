import Vue from 'vue'
import Router from 'vue-router'
import NewsLatest from '../pages/NewsLatest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsLatest',
      component: NewsLatest
    }
  ]
})
