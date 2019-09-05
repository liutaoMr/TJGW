import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import login from './views/login/login'
import handle from './views/handle/handle'
// import heightWeight from "./views/handle/heightWeight/heightWeight";
// import TjRegistration from "./views/TjRegistration/TjRegistration";
// import bloodPressure from "./views/handle/bloodPressure/bloodPressure"
// import bSuper from "./views/handle/bSuper/bSuper"

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['./views/login/login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      // component: () => import('./views/Home.vue')
      component: resolve => require(['./views/Home.vue'], resolve),
      children: [
        {
          path: 'inforCollecHome',
          name: 'inforCollecHome',
          component: resolve => require(['./views/tiaoMaDengJi/inforCollecHome'], resolve)
        },
        {
          path: 'handle',
          name: 'handle',
          component: handle,
          title: '操作页面',
          children: [
            {
              path: 'heightWeight',
              name: 'heightWeight',
              // component: () => import('./views/handle/heightWeight/heightWeight')
              component: resolve => require(['./views/heightWeight/heightWeight'], resolve)
            },
            {
              path: 'bloodPressure',
              name: 'bloodPressure',
              // component:() => import('./views/handle/bloodPressure/bloodPressure')
              component: resolve => require(['./views/bloodPressure/bloodPressure'], resolve)
            },
            {
              path: 'bSuper',
              name: 'bSuper',
              // component:() => import('./views/handle/bSuper/bSuper')
              component: resolve => require(['./views/bChao/bSuper'], resolve)
            },
            {
              path: 'lifeStyle',
              name: 'lifeStyle',
              // component:() => import('./views/handle/bSuper/bSuper')
              component: resolve => require(['./views/lifeStyle/lifeStyle'], resolve)
            },
            {
              // 脏器功能
              path: 'zqgn',
              name: 'zqgn',
              component: resolve => require(['./views/zqgn/zqgn'], resolve)
            },
            { // 现存问题
              path: 'xcwt',
              name: 'xcwt',
              component: resolve => require(['./views/xcwt/xcwt'], resolve)
            },
            {
              path: 'ct',
              name: 'ct',
              component: resolve => require(['./views/ct/ct'], resolve)
            },
            {
              path: 'zlnl',
              name: 'zlnl',
              component: resolve => require(['./views/zlnl/zlnl'], resolve)
            },
            {
              path: 'SetHome',
              name: 'SetHome',
              component: resolve => require(['./views/set/SetHome'], resolve)
            },
            {
              path: 'mkSet',
              name: 'mkSet',
              component: resolve => require(['./views/set/mkSet/mkSet'], resolve)
            }
          ]
        },
        {
          path: 'inforSummary',
          name: 'inforSummary',
          // component:() => import('./views/TjRegistration/TjRegistration'),
          component: resolve => require(['./views/inforSummary/inforSummary'], resolve)
        },
        {
          name: 'TjRegistration',
          path: 'TjRegistration',
          // component:() => import('./views/TjRegistration/TjRegistration'),
          component: resolve => require(['./views/TjRegistration/TjRegistration'], resolve)
        },
        // 信息总检
        {
          name: 'inforZongjian',
          path: 'inforZongjian',
          component: resolve => require(['./views/inforZongjian/inforZongjian'], resolve)
        }
      ]
    }

  ]
})
