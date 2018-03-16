import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppVersionList from '@/pages/app_version/appVersionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/appVersion/list',
      name: 'app-version-list',
      component: AppVersionList
    }
  ]
})
