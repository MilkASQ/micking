<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menu: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.08s ease-in-out; // ease-in ease-out linear
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
