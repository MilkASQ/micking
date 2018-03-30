<template>
  <main>
    <vhead title="投资记录" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
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
  import heads from "../../heads"
  import * as types from '../../../store/type'

  export default {
    components: {
      "vhead": heads,
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
