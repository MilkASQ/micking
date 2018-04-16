<template>
  <main>
    <vhead :title="title" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <div @click="callparents">{{msg}}</div>
  </main>
</template>

<script>
  import heads from "@/components/vtops"

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        title: '测试',
        msg: 'msg'
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      childRen(){
        alert('child todo ...');
      },
      callparents(){
        let data = {a:1,b:2,c:3};
        this.$emit("parentsDal",data)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
