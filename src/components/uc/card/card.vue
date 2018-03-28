<template>
  <main>
    <v-head title="卡券包" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></v-head>
    <section class="menuTab">
      <router-link :to="{name:'UC_UNUSED'}">未使用</router-link>
      <router-link :to="{name:'UC_USED'}">已使用</router-link>
      <router-link :to="{name:'UC_EXPIRED'}">已过期</router-link>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
  import head from "../../head.vue"
  import * as types from '../../../store/type'

  export default {
    components: {
      "v-head": head
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
