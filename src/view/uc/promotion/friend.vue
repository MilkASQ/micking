<template>
  <main>
    <vhead title="好友详情" :url="{name:'UC_PROMOTION'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="menuTab">
      <router-link :to="{name:'UC_FRIEND_FIRST'}">一级好友</router-link>
      <router-link :to="{name:'UC_FRIEND_SECOND'}">二级好友</router-link>
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
