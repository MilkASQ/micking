<template>
  <main>
    <vhead title="更改手机号码" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="menuTab">
      <router-link :to="{name:'CHANGE_YES_PHONE'}">原手机在用</router-link>
      <router-link :to="{name:'CHANGE_NOT_PHONE'}">原手机不在用</router-link>
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
