<template>
  <main>
    <vhead title="积分明细" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
      <section class="moneyLog" v-if="list.length > 0" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">
        <ul>
          <li v-for="item in list">
            <div class="top">
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="center">
              <dl>
                <dt>影响金额(元)</dt>
                <dd class="yellow">{{item.impact_money}}</dd>
              </dl>
              <dl>
                <dt>可用余额(元)</dt>
                <dd class="normal">{{item.usable_money}}</dd>
              </dl>
              <dl>
                <dt>冻结金额(元)</dt>
                <dd class="blue">{{item.freeze_money}}</dd>
              </dl>
            </div>
            <div class="intro">说明：{{item.intro}}</div>
          </li>
        </ul>
        <div class="listTips" v-show="tipsStatus">
          <div class="loader_wrap"><span class="loader"></span></div>
          数据加载中...
        </div>
      </section>
      <div class="empty" v-else>暂无记录</div>
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
        list: [
          {
            id: 1,
            name: '账户调整操作',
            time: '2018-03-20 14:32:09',
            impact_money: 100000.00,
            usable_money: 110014.28,
            freeze_money: 50.00,
            intro: '充值'
          },
          {
            id: 1,
            name: '投标冻结',
            time: '2018-02-07 15:50:18',
            impact_money: -50.00,
            usable_money: 14.28,
            freeze_money: 50.00,
            intro: '对3317号标进行投标'
          },
          {
            id: 1,
            name: '账户调整操作',
            time: '2018-03-20 14:32:09',
            impact_money: 100000.00,
            usable_money: 110014.28,
            freeze_money: 50.00,
            intro: '充值'
          },
          {
            id: 1,
            name: '投标冻结',
            time: '2018-02-07 15:50:18',
            impact_money: -50.00,
            usable_money: 14.28,
            freeze_money: 50.00,
            intro: '对3317号标进行投标'
          },
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
        this.tipsStatus = this.list.length >= 4 ? true : false;
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
          this.setTipsStatus();
        }, 1000);
      },
      loadMore() {  // 自动加载
        this.loading = true;
        setTimeout(() => {
          for (let i = 1; i <= 5; i++) {
          this.list.push({
            id: i,
            name: '投标冻结',
            time: '2018-02-07 15:50:18',
            impact_money: -50.00,
            usable_money: 14.28,
            freeze_money: 50.00,
            intro: '对3317号标进行投标'
          });
          }
          this.loading = false;
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .moneyLog {
    width: 20rem;
    height: auto;
    overflow: hidden;
    ul {
      overflow: hidden;
      margin-bottom: 0.6rem;
      li {
        margin-top: 0.6rem;
        background: #fff;
        padding: 0 0.6rem;
        .top {
          height: 2rem;
          line-height: 2rem;
          overflow: hidden;
          border-bottom: 0.0625rem solid #eee;
          .name {
            width: 8rem;
            float: left;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.875rem;
            color: #333;
          }
          .time {
            color: #999;
            font-size: 0.75rem;
            float: right;
          }
        }
        .center {
          padding: 0.6rem 0 0.3rem 0;
          height: auto;
          display: flex;
          display: -webkit-flex;
          display: -ms-flex;
          dl {
            flex: 1;
            float: left;
            font-size: 0.75rem;
            dt {
              font-weight: normal;
              color: #666;
              height: 1.2rem;
              line-height: 1.2rem;
            }
            dd {
              color: #333;
              font-size: 1rem;
              height: 2.2rem;
              line-height: 2.2rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &.yellow {
                color: #f60;
              }
              &.normal {
                color: #666;
              }
              &.blue {
                color: #0095CC;
              }
            }
          }
        }
        .intro {
          width: auto;
          overflow: hidden;
          line-height: 1rem;
          padding: 0 0 0.8rem 0;
          color: #666;
          font-size: 0.75rem;
        }
      }
    }
  }
</style>
