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
      require(['@/view/uc/sign/login'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/index',
    name: 'INDEX', // 首页
    component: function (resolve) {
      require(['@/view/home'], resolve)
    },
    meta: {requireAuth: false}
  },

  {
    path: '/invest/index',
    name: 'INVEST', // 理财中心
    component: function (resolve) {
      require(['@/view/index/invest/index'], resolve)
    },
    meta: {requireAuth: false},
    children: [
      {
        path: '/invest/wealth',
        name: 'INVEST_WEALTH', // 微财富
        component: function (resolve) {
          require(['@/view/index/invest/wealth'], resolve)
        },
        meta: {requireAuth: false}
      },
      {
        path: '/invest/student',
        name: 'INVEST_STUDENT', // 惠学贷
        component: function (resolve) {
          require(['@/view/index/invest/student'], resolve)
        },
        meta: {requireAuth: false}
      },
      {
        path: '/invest/debt',
        name: 'INVEST_DEBT', // 债权转让
        component: function (resolve) {
          require(['@/view/index/invest/debt'], resolve)
        },
        meta: {requireAuth: false}
      }
    ]
  },

  {
    path: '/uc',
    name: 'UC', // 会员中心
    component: function (resolve) {
      require(['@/view/uc/index'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe',
    name: 'UC_SAFE', // 安全中心
    component: function (resolve) {
      require(['@/view/uc/safe/index'], resolve)
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
      require(['@/view/uc/safe/phone'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/safe/has_phone',
        name: 'CHANGE_YES_PHONE', // 修改手机号->身份信息验证
        component: function (resolve) {
          require(['@/view/uc/safe/hasphone'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/safe/not_phone',
        name: 'CHANGE_NOT_PHONE', // 修改手机号->身份信息验证
        component: function (resolve) {
          require(['@/view/uc/safe/notphone'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  },
  {
    path: '/uc/safe/change_phone',
    name: 'CHANGE_USER_PHONE', // 修改手机号
    component: function (resolve) {
      require(['@/view/uc/safe/changephone'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe/idcard',
    name: 'IDCARD', // 身份认证
    component: function (resolve) {
      require(['@/view/uc/safe/idcard'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe/pay_pass',
    name: 'PAY_PASS', // 支付密码
    component: function (resolve) {
      require(['@/view/uc/safe/pay_pass'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/bank/card',
    name: 'CARD', // 银行卡
    component: function (resolve) {
      require(['@/view/uc/bank/card'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/safe/password',
    name: 'PASSWORD', // 修改密码
    component: function (resolve) {
      require(['@/view/uc/safe/password'], resolve)
    },
    meta: {requireAuth: true}
  },
  {
    path: '/uc/invest/total',
    name: 'UC_INVEST', // 投资记录
    component: function (resolve) {
      require(['@/view/uc/invest/index'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/invest/index',
        name: 'INVEST_INDEX', // 投资记录 全部
        component: function (resolve) {
          require(['@/view/uc/invest/total'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/invest/collect',
        name: 'INVEST_COLLECT', // 投资记录 待收
        component: function (resolve) {
          require(['@/view/uc/invest/collect'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/invest/completed',
        name: 'INVEST_COMPLETED', // 投资记录 已结清
        component: function (resolve) {
          require(['@/view/uc/invest/completed'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/invest/debt',
        name: 'INVEST_DEBT', // 投资记录 已买入债权
        component: function (resolve) {
          require(['@/view/uc/invest/debt'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  },
  {
    path: '/uc/card/index',
    name: 'UC_CARD', // 修改手机号->选项页面
    component: function (resolve) {
      require(['@/view/uc/card/card'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/card/used',
        name: 'UC_USED', // 已使用卡券包
        component: function (resolve) {
          require(['@/view/uc/card/used'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/card/unused',
        name: 'UC_UNUSED', // 未使用卡券包
        component: function (resolve) {
          require(['@/view/uc/card/unused'], resolve)
        },
        meta: {requireAuth: true}
      },
      {
        path: '/uc/card/expired',
        name: 'UC_EXPIRED', // 已过期卡券包
        component: function (resolve) {
          require(['@/view/uc/card/expired'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  },
  {
    path: '/uc/scores/index',
    name: 'UC_SCORES', // 积分商城
    component: function (resolve) {
      require(['@/view/uc/scores/index'], resolve)
    },
    meta: {requireAuth: true},
  },
  {
    path: '/uc/scores/log',
    name: 'UC_SCORES_LOG', // 积分明细
    component: function (resolve) {
      require(['@/view/uc/scores/log'], resolve)
    },
    meta: {requireAuth: true},
  },
  {
    path: '*', redirect: (to) => {
    // 动态设置重定向的目标
    // 目标路由对象，就是访问的路径的路由信息
    if (to.path === '/invest') {
      return '/invest/wealth';
    }
    return '/index';
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
