import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import register from '../components/pages/register'
import login from '../components/pages/login'
import index from '../components/pages/index'
import home from '../components/pages/home'
import classify from '../components/pages/classify'
import shopcar from '../components/pages/shopcar'
import mine from '../components/pages/mine'
import classifyright from '../components/pages/classifyright'
import detail from '../components/pages/detail'
import comimg from '../components/pages/comimg'
import praise from '../components/pages/praise'
import evaluate from '../components/pages/evaluate'
export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/detail/:id',
      component: detail,
      children: [
        {
          path: 'comimg',
          component: comimg
        },
        {
          path: 'praise',
          component: praise,
          children: [
            {
              path: "evaluate/:index",
              component: evaluate
            },
            {
              path: "",
              redirect: 'evaluate/0'
            }
          ]
        },
        {
          path: '',
          redirect: 'comimg'
        },
      ]
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'classify',
          component: classify,
          children: [
            {
              path: '',
              redirect: "classifyright/0"
            },
            {
              path: 'classifyright/:index',
              component: classifyright
            },
          ]
        },
        {
          path: 'shopcar',
          component: shopcar
        },
        {
          path: 'mine',
          component: mine
        },
        {
          path: '',
          redirect: 'home'
        },
      ]
    }
  ]
})
