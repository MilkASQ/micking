import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import * as types from '@/store/type'


Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'LOGIN', // 登录
    component: function (resolve) {
      require(['@/components/login'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/index',
    name: 'INDEX', // 首页
    component: function (resolve) {
      require(['@/components/home'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/invest/:id',
    name: 'INVEST', // 理财中心
    component: function (resolve) {
      require(['@/components/index/invest'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/uc',
    name: 'UC', // 会员中心
    component: function (resolve) {
      require(['@/components/uc/index'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe',
    name: 'UC_SAFE', // 安全中心
    component: function (resolve) {
      require(['@/components/uc/safe/index'], resolve)
    },
    meta: {
      requireAuth: true
    },
    children: []
  },
  {
    path: '/uc/safe/phone',
    name: 'CHANGE_PHONE', // 修改手机号->选项页面
    component: function (resolve) {
      require(['@/components/uc/safe/phone'], resolve)
    },
    meta: {requireAuth: true},
    children : [
      {
        path: '/uc/safe/has_phone',
        name: 'CHANGE_YES_PHONE', // 修改手机号->身份信息验证
        component: function (resolve) {
          require(['@/components/uc/safe/hasphone'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/safe/not_phone',
        name: 'CHANGE_NOT_PHONE', // 修改手机号->身份信息验证
        component: function (resolve) {
          require(['@/components/uc/safe/notphone'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  },
  {
    path: '/uc/safe/change_phone',
    name: 'CHANGE_USER_PHONE', // 修改手机号
    component: function (resolve) {
      require(['@/components/uc/safe/changephone'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe/idcard',
    name: 'IDCARD', // 身份认证
    component: function (resolve) {
      require(['@/components/uc/safe/idcard'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe/pay_pass',
    name: 'PAY_PASS', // 支付密码
    component: function (resolve) {
      require(['@/components/uc/safe/pay_pass'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/bank/card',
    name: 'CARD', // 银行卡
    component: function (resolve) {
      require(['@/components/uc/bank/card'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '*', redirect: (to) => {
// 动态设置重定向的目标
// 目标路由对象，就是访问的路径的路由信息
    if (to.path === '/invest') {
      return '/invest/1'
    }
    return '/index'
  }
  }
];

// 页面刷新时，重新赋值token 和userInfo 和权限

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'on'
});

export default router;
