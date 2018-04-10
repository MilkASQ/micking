import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import * as types from '@/store/type'


Vue.use(Router);

let routes = [
  // index
  {
    path: '/index',
    name: 'INDEX', // 首页
    component: function (resolve) {
      require(['@/view/index'], resolve)
    },
    meta: {requireAuth: false}
  }, {
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
      }, {
        path: '/invest/student',
        name: 'INVEST_STUDENT', // 惠学贷
        component: function (resolve) {
          require(['@/view/index/invest/student'], resolve)
        },
        meta: {requireAuth: false}
      }, {
        path: '/invest/debt',
        name: 'INVEST_DEBT', // 债权转让
        component: function (resolve) {
          require(['@/view/index/invest/debt'], resolve)
        },
        meta: {requireAuth: false}
      }
    ]
  }, {
    // path: '/rules/:type',
    path: '/rules',
    name: 'RULES', // 规则页面
    component: function (resolve) {
      require(['@/view/index/rules/index'], resolve)
    },
    meta: {requireAuth: false}
  },


  // uc
  {
    path: '/uc',
    name: 'UC', // 会员中心
    component: function (resolve) {
      require(['@/view/uc/index'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/login',
    name: 'LOGIN', // 登录
    component: function (resolve) {
      require(['@/view/uc/sign/login'], resolve)
    },
    meta: {requireAuth: false}
  }, {
    path: '/uc/safe',
    name: 'UC_SAFE', // 安全中心
    component: function (resolve) {
      require(['@/view/uc/safe/index'], resolve)
    },
    meta: {
      requireAuth: true
    },
    children: []
  }, {
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
      }, {
        path: '/uc/safe/not_phone',
        name: 'CHANGE_NOT_PHONE', // 修改手机号->身份信息验证
        component: function (resolve) {
          require(['@/view/uc/safe/notphone'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  }, {
    path: '/uc/safe/change_phone',
    name: 'CHANGE_USER_PHONE', // 修改手机号
    component: function (resolve) {
      require(['@/view/uc/safe/changephone'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/uc/safe/idcard',
    name: 'IDCARD', // 身份认证
    component: function (resolve) {
      require(['@/view/uc/safe/idcard'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/uc/safe/pay_pass',
    name: 'PAY_PASS', // 支付密码
    component: function (resolve) {
      require(['@/view/uc/safe/pay_pass'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/uc/bank/card',
    name: 'CARD', // 银行卡
    component: function (resolve) {
      require(['@/view/uc/bank/card'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/uc/safe/password',
    name: 'PASSWORD', // 修改密码
    component: function (resolve) {
      require(['@/view/uc/safe/password'], resolve)
    },
    meta: {requireAuth: true}
  }, {
    path: '/uc/invest/total',
    name: 'UC_INVEST', // 投资记录
    component: function (resolve) {
      require(['@/view/uc/invest/index'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/invest/index',
        name: 'UC_INVEST_INDEX', // 投资记录 全部
        component: function (resolve) {
          require(['@/view/uc/invest/total'], resolve)
        },
        meta: {requireAuth: true}
      }, {
        path: '/uc/invest/collect',
        name: 'UC_INVEST_COLLECT', // 投资记录 待收
        component: function (resolve) {
          require(['@/view/uc/invest/collect'], resolve)
        },
        meta: {requireAuth: true}
      }, {
        path: '/uc/invest/completed',
        name: 'UC_INVEST_COMPLETED', // 投资记录 已结清
        component: function (resolve) {
          require(['@/view/uc/invest/completed'], resolve)
        },
        meta: {requireAuth: true}
      }, {
        path: '/uc/invest/debt',
        name: 'UC_INVEST_DEBT', // 投资记录 已买入债权
        component: function (resolve) {
          require(['@/view/uc/invest/debt'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  }, {
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
      }, {
        path: '/uc/card/unused',
        name: 'UC_UNUSED', // 未使用卡券包
        component: function (resolve) {
          require(['@/view/uc/card/unused'], resolve)
        },
        meta: {requireAuth: true}
      }, {
        path: '/uc/card/expired',
        name: 'UC_EXPIRED', // 已过期卡券包
        component: function (resolve) {
          require(['@/view/uc/card/expired'], resolve)
        },
        meta: {requireAuth: true}
      }
    ]
  }, {
    path: '/uc/scores/index',
    name: 'UC_SCORES', // 积分商城
    component: function (resolve) {
      require(['@/view/uc/scores/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/scores/log',
    name: 'UC_SCORES_LOG', // 积分明细
    component: function (resolve) {
      require(['@/view/uc/scores/log'], resolve)
    },
    meta: {requireAuth: true},
  },
  {
    path: '/uc/scores/detail/:id',
    name: 'UC_SCORES_DETAIL', // 积分明细
    component: function (resolve) {
      require(['@/view/uc/scores/detail'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/money/index',
    name: 'UC_MONEY', // 资金记录
    component: function (resolve) {
      require(['@/view/uc/money/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/recharge/index',
    name: 'UC_RECHARGE', // 充值
    component: function (resolve) {
      require(['@/view/uc/recharge/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/recharge/log',
    name: 'UC_RECHARGE_LOG', // 充值记录
    component: function (resolve) {
      require(['@/view/uc/recharge/log'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/withdraw/index',
    name: 'UC_WITHDRAW', // 提现
    component: function (resolve) {
      require(['@/view/uc/withdraw/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/withdraw/log',
    name: 'UC_WITHDRAW_LOG', // 提现记录
    component: function (resolve) {
      require(['@/view/uc/withdraw/log'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/autoborrow/index',
    name: 'UC_AUTOBORROW', // 自动投标
    component: function (resolve) {
      require(['@/view/uc/autoborrow/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/autoborrow/detail',
    name: 'UC_AUTOBORROW_DETAIL', // 自动投标 添加&编辑
    component: function (resolve) {
      require(['@/view/uc/autoborrow/detail'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/autoborrow/detail',
    name: 'UC_AUTOBORROW_DETAIL', // 自动投标 添加&编辑
    component: function (resolve) {
      require(['@/view/uc/autoborrow/detail'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/promotion/index',
    name: 'UC_PROMOTION', // 邀请好友首页
    component: function (resolve) {
      require(['@/view/uc/promotion/index'], resolve)
    },
    meta: {requireAuth: true},
  }, {
    path: '/uc/promotion/friend',
    name: 'UC_PROMOTION_FRIEND', // 邀请好友-列表
    component: function (resolve) {
      require(['@/view/uc/promotion/friend'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/promotion/friend/first',
        name: 'UC_FRIEND_FIRST', // 一级好友
        component: function (resolve) {
          require(['@/view/uc/promotion/friendfirst'], resolve)
        }
      }, {
        path: '/uc/promotion/friend/second',
        name: 'UC_FRIEND_SECOND', // 二级好友
        component: function (resolve) {
          require(['@/view/uc/promotion/friendsecond'], resolve)
        }
      }
    ]
  },{
    path: '/uc/promotion/reward',
    name: 'UC_PROMOTION_REWARD', // 邀请好友-奖励
    component: function (resolve) {
      require(['@/view/uc/promotion/reward'], resolve)
    },
    meta: {requireAuth: true},
    children: [
      {
        path: '/uc/promotion/reward_end',
        name: 'UC_REWARD_FIRST', // 已发放
        component: function (resolve) {
          require(['@/view/uc/promotion/rewardfirst'], resolve)
        }
      }, {
        path: '/uc/promotion/reward_stay',
        name: 'UC_REWARD_SECOND', // 未发放
        component: function (resolve) {
          require(['@/view/uc/promotion/rewardsecond'], resolve)
        }
      }
    ]
  }, {
    path: '*', redirect: (to) => {
      // 动态设置重定向的目标
      // 目标路由对象，就是访问的路径的路由信息
      if (to.path === '/invest') {
        return '/invest/wealth';
      }
      return '/index';
    }
  }];

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
