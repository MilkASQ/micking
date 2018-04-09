<template>
  <main class="rechargeBox">
    <vhead title="充值" :url="back" :rightUrl="{name:'UC_RECHARGE_LOG'}" status="true" rightTxt="充值记录"></vhead>
    <div class="public_form mt1">
      <ul>
        <li class="max">
          <div class="bankInfos">
            <div class="logo"><img :src="bankLogo" v-show="bankLogo"></div>
            <div class="name">{{bankName}}（末4位：{{lastFourNumber()}}）</div>
            <div class="quota">
              充值限额：单笔限额<span class="af60">￥{{quota.day}}</span>、每日限额<span class="af60">￥{{quota.week}}</span>
            </div>
          </div>
        </li>
        <li>
          <span class="txt">充值金额</span>
          <input type="number" name="" v-model.number="data.money" maxlength="10" placeholder="请输入充值金额"/>
        </li>
        <li>
          <span class="txt">短信验证码</span>
          <input type="number" name="" v-model.number="data.verify" maxlength="6" placeholder="请输入短信验证"/>
          <button class="btn" v-if="show_btn" @click="sendMessage" :disabled="disabled">获取验证码</button>
          <button class="btn over" :disabled="disabled" v-else>{{ count_down }}s重发</button>
        </li>
      </ul>
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
        back: null,
        bankLogo: imgUrl,
        bankName: '工商银行',
        bankNumber: '00000000000009126',
        quota: {
          day: 20000.00,
          week: 100000.00
        },
        tips: `<p>
              1、单笔充值金额不低于50元，且须为整数值，同时请注意您的银行卡支付上限，以免造成不便；
              2、由于各银行处理时间不一，充值后您的到账时间可能会稍有延迟，但最长不超15分钟；<br>
              3、用户注册后从未经任何一轮投资即提现，将按提现金额的1.5‰计扣提现费（最低2元）；<br>
              4、充值过程中，如您遇到问题，可拨打客服热线（<a href="tel:4000648388" class="aBlue">400-064-8388</a>）或联系微信客服（微信号：wjzx2016168）。
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
      this.back = this.$route.query.redirect || '/uc';
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
  .rechargeBox {
    .public_form {
      ul {
        overflow: hidden;
        li {
          .quota {
            color: #666;
            margin-top: 0.25rem;
          }
          .bankInfos {
            width: 100%;
            overflow: hidden;
            .logo {
              width: 1.4rem;
              height: 1.4rem;
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
