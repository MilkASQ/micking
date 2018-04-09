<template>
  <main class="rechargeLog">
    <vhead title="充值记录" :url="{name:'UC_RECHARGE'}" rightUrl="" status="false" rightTxt=""></vhead>
    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
      <section class="moneyLog" v-if="list.length > 0" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">
        <ul>
          <li v-for="item in list">
            <div class="left">
              <p class="money">充值金额：<em>{{item.money}}元</em></p>
              <p class="time">{{item.time}}</p>
            </div>
            <div class="right">
              <div class="msg">{{item.msg}}</div>
              <div class="status" :class="{red: item.status === false , blue: item.status === true }">
                {{item.status === true ? '充值成功' : '充值失败'}}
              </div>
            </div>
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
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-08 17:25:12',
            status: false
          },
          {
            id: 2,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-09 17:25:12',
            status: false
          },
          {
            id: 3,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-10 17:25:12',
            status: true
          },
          {
            id: 4,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-08 17:25:12',
            status: false
          },
          {
            id: 5,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-09 17:25:12',
            status: false
          },
          {
            id: 6,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-10 17:25:12',
            status: true
          },{
            id: 7,
            money: 10000.00,
            msg: '宝付快捷支付web',
            time: '2018-04-10 17:25:12',
            status: true
          }
        ],
      }
    },
    created() {

    },
    mounted() {
      this.setTipsStatus()

    },
    methods: {
      setTipsStatus() {
        this.tipsStatus = this.list.length >= 6 ? true : false;
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
          this.list = [];
          this.list.push({
              id: 1,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-08 17:25:12',
              status: false
            },
            {
              id: 2,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-09 17:25:12',
              status: false
            },
            {
              id: 3,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-10 17:25:12',
              status: true
            },
            {
              id: 4,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-08 17:25:12',
              status: false
            },
            {
              id: 5,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-09 17:25:12',
              status: false
            },
            {
              id: 6,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-10 17:25:12',
              status: true
            },
            {
              id: 7,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-10 17:25:12',
              status: true
            });
          this.setTipsStatus();
        }, 1000);
      },
      loadMore() {  // 自动加载
        this.loading = true;
        let length = this.list.length;
        setTimeout(() => {
          for (let i = 1; i <= 5; i++) {
            this.list.push({
              id: length + i,
              money: 10000.00,
              msg: '宝付快捷支付web',
              time: '2018-04-10 17:25:12',
              status: true
            });
          }
          this.loading = false;
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rechargeLog {
    width: 20rem;
    overflow: hidden;
    ul {
      margin-top: 0.6rem;
      li {
        background: #fff;
        border-bottom: 0.0625rem solid #eee;
        border-top: 0.0625rem solid #eee;
        margin-bottom: 0.6rem;
        padding: 0.6rem;
        overflow: hidden;
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .left, .right {
          width: 9.4rem;
          height: 3.2rem;
          line-height: 1.6rem;
          float: left;
          font-size: 0.75rem;
          color: #666;
        }
        .left {
          .money {
            font-size: 0.875rem;
            color: #333;
            em {
              color: #f60;
            }
          }
          .time {
            color: #999;
          }
        }
        .right {
          text-align: right;
          .status {
            color: #249bff;
            &.red {
              color: #f00
            }
          }
        }
      }
    }
  }
</style>
