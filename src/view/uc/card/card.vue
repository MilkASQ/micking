<template>
  <main>
    <vhead title="卡券包" :url="back" rightUrl="" status="false" rightTxt="111"></vhead>
    <section class="menuTab">
      <router-link :to="{name:'UC_UNUSED'}">未使用</router-link>
      <router-link :to="{name:'UC_USED'}">已使用</router-link>
      <router-link :to="{name:'UC_EXPIRED'}">已过期</router-link>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import * as types from '@/store/type'
  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        back: null,
      }
    },
    created() {
      this.back = this.$route.query.redirect || '/uc';
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
