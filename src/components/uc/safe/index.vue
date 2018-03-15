<template>
  <main>
    <v-head title="安全中心" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></v-head>
    <section class="menuList">
      <router-link :to="{name:'CHANGE_YES_PHONE'}">
        <span>手机号</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">185****7357</i>
      </router-link>
      <router-link :to="{name:'IDCARD'}">
        <span>实名认证</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">已认证</i>
      </router-link>
      <router-link :to="{name:'PAY_PASS'}">
        <span>支付密码</span>
        <i class="iconFont">&#xe611;</i>
        <i class="af60">修改</i>
      </router-link>
      <router-link :to="{name:'CARD'}">
        <span>银行卡信息</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a333">查看</i>
      </router-link>
    </section>

    <section class="menuList">
      <router-link to="/">
        <span>登录密码</span>
        <i class="iconFont">&#xe611;</i>
        <i class="af60">修改</i>
      </router-link>
      <router-link to="/">
        <span>风险评测</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">激进型</i>
      </router-link>
    </section>

  </main>
</template>

<script>
  import head from "../../head.vue"
  import nav from "../../nav.vue"
  import * as types from '../../../store/type'

  export default {
    components: {
      "v-head": head,
      "v-nav": nav
    },
    data() {
      return {
        loading: false
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
