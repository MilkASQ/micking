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
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/index',
    name: 'INDEX', // 首页
    component: function (resolve) {
      require(['@/components/home'], resolve)
    },
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/invest/:id',
    name: 'INVEST', // 理财中心
    component: function (resolve) {
      require(['@/components/index/invest'], resolve)
    },
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/uc',
    name: 'UC', // 会员中心
    component: function (resolve) {
      require(['@/components/uc/index/index'], resolve)
    },
    meta: {
      requireAuth: true
    }
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
    name: 'CHANGE_PHONE', // 更改手机号
    component: function (resolve) {
      require(['@/components/uc/safe/phone'], resolve)
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/uc/safe/has_phone',
    name: 'CHANGE_HAS_PHONE', // 更改手机号
    component: function (resolve) {
      require(['@/components/uc/safe/has_phone'], resolve)
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '*',
    redirect: (to) => {
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
