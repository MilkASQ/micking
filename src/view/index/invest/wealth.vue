<template>
  <main>
    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
      <section class="invest_list" v-if="invest.length > 0" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="invest_item" v-for="item in invest">
          <router-link :to="{name:'INVEST_DETAIL',params:{id:item.id},query:{url:'/invest/wealth'}}">
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
        <div class="listTips" v-show="tipsStatus"><div class="loader_wrap"><span class="loader"></span></div>数据加载中...</div>
      </section>
      <div class="empty" v-else>暂无标的记录</div>
    </mt-loadmore>
  </main>
</template>

<script>
  import Vue from 'vue'
  import heads from "@/components/vtops"
  import {Loadmore} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  Vue.use(InfiniteScroll);

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        loading: false,
        tipsStatus: false,
        allLoaded: false,
        $refs: {},
        invest: [
          {id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 202, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},{id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 203, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},{id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 204, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},{id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 205, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},
        ]
      }
    },
    created() {

    },
    mounted() {
      this.setTipsStatus()

    },
    methods: {
      setTipsStatus() {
        this.tipsStatus = this.invest.length >= 6 ? true : false;
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
          this.invest.push({
            id: 203,
            url: "/",
            name: '微 · 车贷NO.3007',
            is_newer: false,
            number: 14.50,
            days: 105,
            percen: 35.50
          });
          this.setTipsStatus();
        }, 1000);
      },
      loadMore() {  // 自动加载
        this.loading = true;
        setTimeout(() => {
          for (let i = 1; i <= 5; i++) {
            this.invest.push({
              id: 203,
              url: "/",
              name: '微 · 车贷NO.3007[' + i + ']',
              is_newer: false,
              number: 14.50,
              days: 105,
              percen: 35.50
            });
          }
          this.loading = false;
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
