<template>
  <main>
    <section class="invest_tab">
      <router-link :to="{name:'INVEST_WEALTH'}">微.财富</router-link>
      <router-link :to="{name:'INVEST_STUDENT'}">微.惠学贷</router-link>
      <router-link :to="{name:'INVEST_DEBT'}">转让专区</router-link>
    </section>
    <router-view></router-view>
    <vnav></vnav>
  </main>
</template>

<script>
  import navs from "@/components/navs"

  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      'vnav': navs
    }
  }
</script>

<style lang="scss" scoped>

</style>
