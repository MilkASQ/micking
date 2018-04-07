<template>
  <main>
    <vhead title="充值" :url="{name:'UC'}" :rightUrl="{name:'UC_RECHARGE_LOG'}" status="true" rightTxt="充值记录"></vhead>
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
          <input type="number" name="" v-model="data.money" maxlength="10" placeholder=""/>
        </li>
        <li>
          <span class="txt">短信验证码</span>
          <input type="number" name="" v-model="data.msg" maxlength="6" placeholder=""/>
        </li>
      </ul>
    </div>
    <div class="sumitLine">
      <button type="button" class="submit">立即充值</button>
    </div>
    <div class="tips" v-html="tips">{{tips}}</div>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import * as unit from "@/assets/js/unit"
  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        bankLogo: null,
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
          msg: null,
          bankCode: null,
        },
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
    }
  }
</script>

<style lang="scss" scoped>
  .public_form.mt1 {
    margin-top: 0.6rem;
    ul {
      li {
        .quota {
          color: #666;
        }
        &.max {
          height: auto;
          line-height: 1.4rem;
          padding: 0.7rem 0.6rem;
        }
      }
    }
  }
</style>
