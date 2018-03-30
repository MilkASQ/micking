<template>
  <main>
    <vhead title="安全中心" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="menuList">
      <router-link :to="{name:'CHANGE_YES_PHONE'}">
        <span>手机号</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">尾号{{lastPhone}}</i>
      </router-link>

      <router-link :to="{name:'IDCARD'}">
        <span>实名认证</span>
        <i class="iconFont">&#xe611;</i>
        <i class="af60" v-if="!id_card.status">未认证</i>
        <i class="a999" v-else>已认证</i>
      </router-link>

      <router-link :to="{name:'PAY_PASS'}">
        <span>支付密码</span>
        <i class="iconFont">&#xe611;</i>
        <i class="af60" v-if="!pay_pass.status">未设置</i>
        <i class="a999" v-else>修改</i>
      </router-link>
      <router-link :to="{name:'CARD'}">
        <span>银行卡信息</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999" v-if="!bank.status">未设置</i>
        <i class="a999" v-else>查看</i>
      </router-link>
    </section>

    <section class="menuList">
      <router-link :to="{name:'PASSWORD'}">
        <span>登录密码</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">修改</i>
      </router-link>
      <router-link to="/">
        <span>风险评测</span>
        <i class="iconFont">&#xe611;</i>
        <i class="af60" v-if="!risk.status">未评测</i>
        <i class="a999" v-else="">{{risk.data}}</i>
      </router-link>
    </section>

  </main>
</template>

<script>
  import heads from "../../heads"
  import * as types from '../../../store/type'
  import * as unit from "@/assets/js/unit"

  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        phone: 18576467357,
        lastPhone: null,
        id_card: {
          status: true,
          data: ''
        },
        pay_pass: {
          status: true,
          data: null
        },
        bank: {
          status: true,
          data: null
        },
        risk: {
          status: true,
          data: '激进型'
        }
      }
    },
    created() {
      this.lastPhone = unit.subStrString(this.phone, 4);
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
