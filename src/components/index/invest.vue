<template>
  <main>
    <section class="invest_tab">
      <router-link to="/invest/1">微.财富</router-link>
      <router-link to="/invest/2">微.惠学贷</router-link>
      <router-link to="/invest/3">转让专区</router-link>
    </section>
    <section class="invest_list">
      <div class="invest_item" v-for="item in invest">
          <router-link :to="item.url">
            <div class="name">
              <span>{{item.name}}</span>
              <span class="newer" v-if="item.is_newer">新手标</span>
            </div>
            <div class="number">{{item.number}}<span>%</span></div>
            <div class="center">
              <p>期限：{{item.days}}天</p>
              <mt-progress :value="item.percen" :bar-height="2"></mt-progress>
            </div>
            <div class="right">
              <span class="btn">立即投标</span>
            </div>
          </router-link>
      </div>
    </section>
    <v-nav></v-nav>
  </main>
</template>

<script>
  import nav from "../nav"

  export default {
    data() {
      return {
        invest: [
          {id: 200, url: "/", name: '新手标 NO.3000', is_newer: true, number: 14.00, days: 28, percen: 20},
          {id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 202, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},
        ]
      }
    },
    methods: {},
    components: {
      'v-nav': nav
    }
  }
</script>

<style lang="scss" scoped>
  .el-carousel {
    img {
      width: 20rem;
      height: 10.9375rem;
      display: block;
    }
  }
  .notice {
    height: 2.4rem;
    line-height: 2.4rem;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-size: 0.875rem;
    span {
      background: #f60;
      color: #fff;
      float: left;
      width: 5rem;
      text-align: center;
    }
    .scroll_list {
      width: 15rem;
      height: 2.4rem;
      padding: 0 .5rem;
      float: left;
      overflow: hidden;
      p {
        width: 14rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
