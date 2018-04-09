<template>
  <main class="withdrawBox">
    <vhead title="充值" :url="{name:'UC'}" :rightUrl="{name:'UC_WITHDRAW_LOG'}" status="true" rightTxt="提现记录"></vhead>
    <div class="bankInset">
      <div class="bankInfo">
        <p>提现银行卡</p>
        <div class="logo"><img :src="bankLogo" v-show="bankLogo"></div>
        <div class="name">{{bankName}}（末4位：{{lastFourNumber()}}）</div>
      </div>
      <div class="money">
        <div class="txt">提现金额</div>
        <div class="moneyInput">
          <span>￥</span>
          <input type="number" name="" v-model.number="data.money" maxlength="10" placeholder="请输入充值金额"/>
        </div>
        <div class="hasMoney">
          当前可提现金额：<em>10014.28</em> 元，<span>全部提现</span>
        </div>
      </div>
    </div>

    <div class="submitLine">
      <button type="button" class="submit">立即充值</button>
    </div>
    <div class="tips">
      <b>温馨提示：</b>
      <div class="inset" v-html="tips">{{tips}}</div>
    </div>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import * as unit from "@/assets/js/unit"
  import imgUrl from "@/assets/images/banklogo/ICBK.png"

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        bankLogo: imgUrl,
        bankName: '工商银行',
        bankNumber: '00000000000009126',
        quota: {
          day: 20000.00,
          week: 100000.00
        },
        tips: `<p>
                  1.100元起提；<br>
                  2.信用卡不得设为提现银行卡；<br>
                  3.请确保您的提现银行卡四要素（银行卡号、开户人姓名、身份证、预留手机号）与您的平台账户四要素（绑定银行卡号、实名认证姓名、身份证、验证手机号）一致；<br>
                  4.工作日提现T+1到账，非工作日顺延；<br>
                  5.单笔提现＜5万按2元/笔计扣，单笔提现≥5万按5元/笔计扣；用户注册后从未经任何一轮投资即提现，按提现金额的1.5‰计扣提现费（最低2元）。
                </p>`,
        data: {
          money: null,
          verify: null,
          bankCode: null,
          phone: '18500007357',
        },
        count_down: null,
        show_btn: true,
        disabled: false,
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      lastFourNumber() {
        return unit.subStrString(this.bankNumber, 4);
      },
      sendMessage() {

        let v = this;
        if (unit.checkPhone(this.data.phone) === false) {
          Toast('手机号码格式不正确');
          return false;
        }

        // 定时器函数
        v.count_down = 60;
        v.disabled = true;
        let hh = setInterval(doString, 1000);
        let data = {verify: this.data.verify, phone: this.data.phone};

        function doString() {
          if (v.count_down === 0) {
            clearInterval(hh);
            v.disabled = false;
            v.show_btn = true;
          } else {
            v.count_down = v.count_down - 1;
            v.show_btn = false;
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .withdrawBox {
    .bankInset {
      background: #fff;
      overflow: hidden;
      line-height: 1.8rem;
      .bankInfo {
        font-size: 0.75rem;
        overflow: hidden;
        background: #f9f9f9;
        padding: 1rem;
        .logo {
          width: 1.8rem;
          height: 1.8rem;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
          img {
            width: inherit;
            height: inherit;
            display: block;
          }
        }
        .name {
          vertical-align: middle;
          display: inline-block;
          color: #0095cc;
          font-size: 0.875rem;
        }
      }
      .money {
        padding: 0.6rem 1rem;
        font-size: 0.75rem;
        .moneyInput {
          height: 3.2rem;
          line-height: 3.2rem;
          position: relative;
          padding-left: 2rem;
          border-bottom: 0.0625rem solid #eee;
          overflow: hidden;
          span {
            width: 2rem;
            height: 3rem;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 1.25rem;
            color: #666;
          }
          input {
            width: 100%;
            height: 3.2rem;
            border: 0;
          }
        }
        .hasMoney{
          padding-top: 0.25rem;
          color: #666;
          em{
            color: #f60;
          }
        }
      }
    }
    .submitLine {
      padding: 0.6rem;
    }
    .tips {
      padding: 1.4rem 0.6rem 0.6rem 0.6rem;
      line-height: 1.4rem;
      color: #666;
      font-size: 0.75rem;
      b {
        color: #f60;
      }
    }
  }
</style>
