<template>
  <main>
    <vhead title="积分明细" :url="{name:'UC_SCORES'}" :rightUrl="{name:'RULES',params:{type:21}}" status="true" rightTxt="说明"></vhead>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="scoresList" v-if="list.length > 0">
        <ul>
          <li v-for="item in list">
            <div class="name">{{item.name}}</div>
            <div class="time">{{item.time}}</div>
            <div class="scores" :class="{red:item.type === 1,green:item.type === 2}">{{item.scores}}</div>
          </li>
        </ul>
        <div class="listTips" v-show="tipsStatus">下拉加载更多</div>
      </div>
      <div class="empty" v-else>暂无积分明细记录</div>
    </mt-loadmore>
  </main>
</template>

<script>
  import Vue from 'vue'
  import heads from "@/components/vtops"
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        tipsStatus: true,
        allLoaded: false,
        $refs:{},
        list: [
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          },
          {
            id: 2,
            name: '投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          },
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          },
          {
            id: 2,
            name: '投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          },
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          },
          {
            id: 2,
            name: '投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          },
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          },
          {
            id: 2,
            name: '投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          },
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          },
          {
            id: 2,
            name: '投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          },
          {
            id: 1,
            name: '投资积分奖励',
            time: '2018-02-02 09:10:05',
            scores: '+5',
            type: 1
          }
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      loadTop() {
        // 加载更多数据
        let _this = this;
        setTimeout(()=>{
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
          _this.list.push({
            id: 2,
            name: '新投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          });
          this.allLoaded = false;// 若数据已全部获取完毕
        },1000);
      },
      loadBottom() {
        let _this = this;
        _this.tipsStatus = false;
        setTimeout(()=>{
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
          _this.list.push({
            id: 2,
            name: '新投资积分奖励',
            time: '2018-02-01 09:10:05',
            scores: '-10',
            type: 2
          });
          this.allLoaded = false;// 若数据已全部获取完毕
          _this.tipsStatus = true;
        },1000);

      }
    }
  }
</script>

<style lang="scss" scoped>
  .scoresList {
    overflow: hidden;
    li {
      background: #fff;
      border-bottom: 0.0625rem solid #eee;
      padding: 0.6rem;
      position: relative;
      .name, .time {
        height: 1.2rem;
        line-height: 1.2rem;
        overflow: hidden;
      }
      .name {
        color: #333;
        font-size: 0.875rem;
      }
      .time {
        color: #999;
        font-size: 0.75rem
      }
      .scores {
        width: auto;
        position: absolute;
        right: 0.6rem;
        top: 0.6rem;
        color: #f00;
        line-height: 2.4rem;
        font-size: 1rem;
        &.red {
          color: #f00;
        }
        &.green {
          color: #0c0;
        }
      }
    }
  }
</style>
