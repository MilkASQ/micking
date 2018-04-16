<template>
  <main>
    <vhead title="奖励详情" :url="{name:'UC_PROMOTION'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="menuTab">
      <router-link :to="{name:'UC_REWARD_FIRST'}">已发放</router-link>
      <router-link :to="{name:'UC_REWARD_SECOND'}">待发放</router-link>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
  import heads from "@/components/vtops"

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
