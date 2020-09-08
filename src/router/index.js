import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/* 重复点击路由报红 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/index',
    component: () => import(/* webpackChunkName: "about" */ '../views/main/layout.vue'),
    children: [
      {
        path: 'index',
        name: 'MainIndex',
        component: () => import('../views/main/index.vue')
      },
      {
        path: 'account',
        name: 'Account',
        redirect: '/main/account/account-yue',
        component: () => import('../views/account/index.vue'),
        children: [
          {
            path: 'account-yue',
            name: 'AccountYue',
            component: () => import('../views/account/account-yu-e.vue')
          },
          {
            path: 'account-mingxi',
            name: 'AccountMingXi',
            component: () => import('../views/account/account-ming-xi.vue')
          },
          {
            path: 'account-huidan',
            name: 'AccountHuiDan',
            component: () => import('../views/account/account-hui-dan.vue')
          }
        ]
      },
      {
        path: 'pay',
        name: 'Pay',
        redirect: '/main/pay/pay-transfer',
        component: () => import('../views/pay/index.vue'),
        children: [
          {
            path: 'pay-transfer',
            name: 'PayTransfer',
            component: () => import('../views/pay/pay-transfer')
          },
          {
            path: 'pay-purpose',
            name: 'PayPurpose',
            component: () => import('../views/pay/pay-purpose')
          },
          {
            path: 'pay-payee',
            name: 'PayPayee',
            component: () => import('../views/pay/pay-payee')
          },
          {
            path: 'pay-payee-group',
            name: 'PayPayeeGroup',
            component: () => import('../views/pay/pay-payee-group')
          }
        ]
      },
      {
        path: 'check',
        name: 'Check',
        redirect: '/main/check/check-transfer',
        component: () => import('../views/check/index.vue'),
        children: [
          {
            path: 'check-transfer',
            name: 'CheckTransfer',
            component: () => import('../views/check/check-transfer')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
