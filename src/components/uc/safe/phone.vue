<template>
  <main>
    <v-head title="更改手机号码" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></v-head>
    <section class="menuList">
      <router-link :to="{name:'CHANGE_HAS_PHONE'}">
        <span>原手机可收到短信信息</span>
        <i class="iconFont">&#xe611;</i>
        <i class="a999">185****7357</i>
      </router-link>
      <router-link :to="{name:''}">
        <span>原手机接收不到短信信息</span>
        <i class="iconFont">&#xe611;</i>
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
      this.closeLoad();
    },
    methods: {
      closeLoad (){
        // 关闭loading
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
