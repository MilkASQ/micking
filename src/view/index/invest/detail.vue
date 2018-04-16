<template>
  <main class="investDetail">
    <section class="investHeader">
      <div class="top">
        <router-link :to="backUrl" class="back"><i class="iconFont">&#xe600;</i></router-link>
        <div class="name">{{data.name}}</div>
      </div>
      <div class="center">
        <em class="number">{{data.rate}}<i>%</i></em>
        <p>过往年化收益率</p>
      </div>
      <div class="percentBox">
        <div class="line"><i class="inset" :style="{width: data.percent+'%'}"></i></div>
        <div class="number">{{data.percent}}%</div>
      </div>
      <div class="bottom">
        <p><em>借款期限</em><em class="data">{{data.time.limit}}{{data.time.type == 1 ? '天' : '月'}}</em></p>
        <p><em>借款金额</em><em class="data">{{data.money}}元</em></p>
        <p><em>剩余可投</em><em class="data">{{data.voteMoney}}元</em></p>
      </div>
    </section>
    <section class="moreDate">
      <div class="row">
        <div class="left">账户可用余额：<em>{{data.useMoney}}元</em></div>
        <div class="right">
          <router-link class="btn"
                       :to="{name:'UC_RECHARGE',query:{redirect: '/invest/detail/' + data.id + '?url=' + backUrl}}">充值
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="left">
          投资金额<input type="tel" v-model.number="data.invest_money"/>
        </div>
        <div class="right"><span @click="getAll">余额全投</span></div>
      </div>
      <div class="row">
        <div class="left">逾期收益：{{data.invest_interest}}元</div>
      </div>
      <div class="row" @click="changeCardStatus">
        <div class="left">卡券</div>
        <div class="right">
          <span class="af60" v-show="data.usedCard.selected === true" v-if="data.cardList.length > 0">{{data.usedCard.name}}</span>
          <span class="a999" v-else>暂无可用卡券</span>
          <i class="iconFont">&#xe611;</i>
        </div>
      </div>
      <div class="invest_submit">
        <button type="button" class="submit" @click="submit">立即投资</button>
      </div>
    </section>
    <v-card :cardList="data.cardList" :config="data.usedCard"></v-card>
    <!--<section class="publicBottomPopup">
      <div class="background" v-show="data.usedCard.status === true"></div>
      <div class="inset" :class="{'int':data.usedCard.status === true,'out':data.usedCard.status === false}">
        <div class="title">
          <button type="button" class="closeBtn" @click="notUseCard">不使用</button>
          <div class="name">卡券包</div>
          <button type="button" class="confirmBtn" @click="changeCardStatus">完成</button>
        </div>
        <div class="content">
          <div class="new_bonusList">
            <ul>
              <li v-for="item in data.cardList">
                <div class="top">
                  <div class="topLeft">
                    <p class="name">{{item.name}}</p>
                    <p class="time">有效期至{{item.time}}</p>
                  </div>
                  <div class="money">￥<em>{{item.money}}</em></div>
                </div>
                <div class="bottom">
                  <span>{{item.invest_date}}</span><span>{{item.invest_money}}</span>
                </div>
                <input type="radio" name="card" :value="item.id" v-model="data.usedCard.id" class="checkRadio"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>-->
  </main>
</template>

<script>
  import * as unit from "@/assets/js/unit"
  import {formatDate, formatTimeStamp} from "@/assets/js/unit"
  import {Toast} from 'mint-ui';

  import card from "@/components/card"

  export default {
    components: {
      "v-card": card
    },
    filters: {
      formatDate(time) {
        let date = new Date(parseInt(time) * 1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      },
      formatTimeStamp(time) {
        return new Date(time).getTime() / 1000;
      }
    },
    data() {
      return {
        backUrl: '',
        data: {
          id: null,
          name: '微 · 车贷 NO.3759',
          rate: 12.5, // 利率
          time: {
            type: 1, // 1=天 2=月
            limit: 30, // 借款期限
            release: 1520821525, // 添加时间
            expire: 1523499542, // 到期时间
          },
          money: 4000.00, // 标的总额
          voteMoney: 2800.00, // 已投金额
          percent: null, // 已投百分比
          useMoney: 244.36, // 可用余额
          invest_money: null, // 投资金额
          invest_interest: 0.00, // 预期收益
          usedCard: {  status: false, selected: false, id: null, name: null}, // 使用卡券
          cardList: [
            {id: 1, name: '新手注册红包1', money: 218, time: '2018-04-25', invest_date: '标的期限≥45天', invest_money: '投资金额≥50000.00元'},
            {id: 2, name: '新手注册红包2', money: 218, time: '2018-04-25', invest_date: '标的期限≥45天', invest_money: '投资金额≥50000.00元'},
            {id: 3, name: '新手注册红包3', money: 218, time: '2018-04-25', invest_date: '标的期限≥45天', invest_money: '投资金额≥50000.00元'},
          ]
        },
      }
    },
    watch: {
      'data.usedCard.id'(current, old) {
        if (current) {
          this.getUsedName;
        }
        /*let _this = this;
        _this.data.usedCard.selected = true;
        this.data.cardList.filter(function (item) {
          if (item.id === curVal) {
            _this.data.usedCard.name = item.name;
          }
        });
        console.log([JSON.stringify(_this.data.usedCard)]);*/
      }
    },
    created() {
      this.backUrl = this.$route.query.url || '/invest/wealth';
      this.data.id = this.$route.params.id;
    },
    computed: {
      getUsedName() {
        let _this = this;
        this.data.usedCard.selected = true;
        this.data.cardList.filter(function (item) {
          if (item.id === _this.data.usedCard.id) {
            _this.data.usedCard.name = item.name;
          }
        });
      }
    },
    mounted() {
      this.data.percent = parseFloat((this.data.money - this.data.voteMoney) / this.data.money * 100).toFixed(2);
    },
    methods: {
      getAll() {
        let has = this.data.money - this.data.voteMoney;
        this.data.invest_money = this.data.useMoney > has ? has : this.data.useMoney;
      },
      changeCardStatus() {
        if (this.data.cardList.length > 0) {
          this.data.usedCard.status = !this.data.usedCard.status;
        }
      },
      submit(){
        console.log(JSON.stringify(this.data.usedCard));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .investHeader {
    width: 20rem;
    height: auto;
    background: -webkit-linear-gradient(left bottom, #f90, #f60);
    background: -o-linear-gradient(left bottom, #f90, #f60);
    background: linear-gradient(left bottom, #f90, #f60);
    .top {
      height: 2.4rem;
      line-height: 2.4rem;
      font-size: 1rem;
      a.back {
        width: 2.4rem;
        height: 2.4rem;
        display: block;
        color: #fff;
        text-align: center;
        float: left;
      }
      .name {
        width: 15.2rem;
        float: left;
        color: #fff;
        padding: 0 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
    .center {
      padding: 1.5rem 0;
      text-align: center;
      color: #fff;
      em.number {
        font-size: 2rem;
        i {
          font-size: 0.875rem;
          padding-left: 0.125rem;
        }
      }
      p {
        opacity: 0.6;
        font-size: 0.75rem;
      }
    }
    .percentBox {
      padding: 0 .6rem 1rem .6rem;
      overflow: hidden;
      .line {
        width: 16rem;
        background: rgba(255, 255, 255, 0.4);
        height: 0.1rem;
        border-radius: 0.2rem;
        overflow: hidden;
        float: left;
        margin-top: 0.325rem;
        .inset {
          display: block;
          height: 0.1rem;
          background: rgba(255, 255, 255, 0.85);
        }
      }
      .number {
        height: 0.75rem;
        line-height: 0.75rem;
        text-align: center;
        width: 2.8rem;
        font-size: 0.75rem;
        color: #fff;
        float: left;
        opacity: 0.85;
      }
    }
    .bottom {
      width: 20rem;
      overflow: hidden;
      padding: 0.25rem 0 0.6rem 0;
      line-height: 1.1rem;
      color: #fff;
      text-align: center;
      font-size: 0.75rem;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      p {
        flex: 1;
        float: left;
        opacity: 0.95;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        em {
          display: block;
          &.data {
            font-size: 0.875rem;
          }
        }
        &:after {
          content: '';
          width: 0.0625rem;
          height: 2rem;
          display: block;
          position: absolute;
          right: 0;
          top: 0.2rem;
          background: rgba(255, 255, 255, 0.3);
        }
        &:last-child:after {
          display: none;
        }
      }
    }
  }

  .moreDate {
    overflow: hidden;
    .row {
      width: 20rem;
      height: 2.4rem;
      overflow: hidden;
      padding: 0 1rem;
      line-height: 2.4rem;
      font-size: 0.75rem;
      &:nth-of-type(2n) {
        background: #fff;
      }
      .left {
        float: left;
        color: #666;
        input {
          width: 8rem;
          height: 2.4rem;
          line-height: 2.4rem;
          border: 0;
          margin-left: 0.6rem;
          font-size: 0.75rem;
          color: #333;
          display: inline-block;
        }
        em {
          color: #333;
        }
      }
      .right {
        float: right;
        .btn {
          border: 0.0625rem solid #f60;
          color: #f60;
          padding: 0.2rem 0.6rem;
          border-radius: 0.8rem;
        }
      }
    }
    .invest_submit {
      width: 20rem;
      position: fixed;
      bottom: 0;
      left: 0;
      .submit {
        border-radius: 0 !important;
      }
    }
  }
</style>
