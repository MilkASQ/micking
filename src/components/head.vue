<template>
  <header>
    <div class="header">
      <router-link class="back_btn" :to="url"><i class="iconFont">&#xe600;</i></router-link>
      <div class="center">{{ title }}</div>
      <router-link class="right_btn" v-show="status!==true" :to="rightUrl">{{ rightTxt }}</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['title', 'url', 'rightUrl', 'status',"rightTxt"],
    name: 'nav',
    data() {
      return {}
    }
  }
</script>
