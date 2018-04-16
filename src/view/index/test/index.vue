<template>
  <main>
    <vhead :title="title" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <div @click="parentsMon"></div>
    <vchild ref="c1" v-on:parentsDal="parentsMon2"></vchild>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import child from "@/view/index/test/child"

  export default {
    components: {
      "vhead": heads,
      "vchild": child
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
      parentsMon(){
        console.log(this.$refs.c1);
        this.$refs.c1.childRen();
      },
      parentsMon2(data){
        alert('parent');
        console.log(data);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
