<template>
  <main>
    <v-head title="投资记录" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></v-head>
    <section class="menuTab">
      <router-link :to="{name:'INVEST_INDEX'}">投资记录</router-link>
      <router-link :to="{name:'INVEST_COLLECT'}">待收列表</router-link>
      <router-link :to="{name:'INVEST_COMPLETED'}">已结清列表</router-link>
      <router-link :to="{name:'INVEST_DEBT'}">已买入债权</router-link>
    </section>
    <router-view></router-view>
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
      return {}
    },
    created() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
