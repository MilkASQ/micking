<template>
  <main class="autoBorrowSet">
    <vhead title="设置自动投标" :url="{name:'UC_AUTOBORROW'}" :rightUrl="{name:'RULES',query: {redirect: '/uc/autoborrow/add',type:22}}" status="true" rightTxt="规则"></vhead>
    <section class="ucMenuList">
      <ul>
        <li>
          <router-link :to="{name:'UC_RECHARGE',query: {redirect: '/uc/autoborrow/add'}}">
            <span>账户余额：<em>{{money}}元</em></span>
            <i class="iconFont right"><em class="nor">充值</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_UNUSED',query: {redirect: '/uc/autoborrow/add'}}">
            <span>我的红包</span>
            <i class="iconFont right"><em class="nor">{{cardNumber}}个可用</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <label class="radioLabel"><input type="radio" :name="radio.name" value="1" v-model="radio.value"/>优先使用红包</label>
          <label class="radioLabel"><input type="radio" :name="radio.name" value="2" v-model="radio.value"/>优先使用加息券</label>
        </li>
      </ul>
    </section>
    <section class="setting">
      <dl>
        <dt>单笔投资金额：</dt>
        <dd>
          <label><input type="radio" :name="onesMoney.name" value="1" v-model="onesMoney.value">余额全投</label>
          <label><input type="radio" :name="onesMoney.name" value="2" v-model="onesMoney.value">自定义</label>
          <div class="editInfo" v-show="onesMoney.value == 2">
            <span class="insetInput minInput">
              <input type="tel" v-model="onesMoney.min" maxlength="7" v-on:input="resetNumber()" />
              <em>元</em>
            </span>
            <span>-</span>
            <span class="insetInput maxInput">
              <input type="tel" v-model="onesMoney.max" maxlength="7" v-on:input="resetNumber()" />
              <em>元</em>
            </span>
            <p>请输入50-100万之间的整数，且起始值≤结束值</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>产品期限范围：</dt>
        <dd>

        </dd>
      </dl>
      <dl>
        <dt>预期利率范围：</dt>
        <dd></dd>
      </dl>
    </section>
  </main>
</template>

<script>
  import heads from "@/components/vtops"

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        money: 0.28,
        cardNumber: 1,
        radio: {
          name: 'useCard',
          value: 1
        },
        onesMoney:{
          name: 'money',
          value: 2,
          min: null,
          max: null,
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      resetNumber() {
        this.onesMoney.min = parseInt(this.onesMoney.min);
        if(isNaN(this.onesMoney.min)) {
          this.onesMoney.min = null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .autoBorrowSet{ overflow: hidden;}
  .autoBorrowSet .setting{ width: 20rem; margin-top: 0.6rem; background: #fff;}
  .autoBorrowSet .setting dl{padding: 0.6rem 0.6rem 0 0.6rem; font-size: 0.875rem; color: #333;}
  .autoBorrowSet .setting dl dt{height: 2rem; line-height: 2rem;}
  .autoBorrowSet .setting dl dd{ border-bottom: 0.0625rem solid #eee; padding-bottom: 0.6rem; overflow: hidden;}
  .autoBorrowSet .setting dl:last-child dd{border-bottom: 0;}
  .autoBorrowSet .setting dl dd label{ width: 9.4rem; height: 2rem; line-height: 2rem; display: block; float: left;}
  .autoBorrowSet .setting dl dd label input[type=radio]{width: 0.8rem; height: 0.8rem; outline: none; border:0.125rem solid #ddd; vertical-align: middle; display: inline-block; margin-right: 0.25rem; border-radius: 0.125rem;}
  .autoBorrowSet .setting dl dd label input[type=radio]:checked{border-color: #f60; background: #f60;}
  .autoBorrowSet .setting dl dd .editInfo{padding-top: 0.2rem; clear: both;}
  .autoBorrowSet .setting dl dd .editInfo .insetInput{ position: relative; display: inline-block;}
  .autoBorrowSet .setting dl dd .editInfo .insetInput input{ width: 7rem; height: 1.8rem; border:0.0625rem solid #ddd; padding: 0 0.25rem; border-radius: 0.25rem; font-size: 0.75rem;}
  .autoBorrowSet .setting dl dd .editInfo .insetInput em{ height: 1.8rem; line-height: 1.8rem; color: #333; position: absolute; top: 0; right: 0.3125rem; font-size: 0.75rem;}
  .autoBorrowSet .setting dl dd .editInfo p{color: #999; font-size: 0.75rem; padding-top: 0.4rem;}
</style>
