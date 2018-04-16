<template>
  <main class="autoBorrowSet">
    <vhead title="设置自动投标" :url="{name:'UC_AUTOBORROW'}" :rightUrl="{name:'RULES',query: {redirect: '/uc/autoborrow/add',type:22}}" status="true" rightTxt="规则"></vhead>
    <section class="ucMenuList">
      <ul>
        <li>
          <router-link :to="{name:'UC_RECHARGE',query: {redirect: '/uc/autoborrow/detail'}}">
            <span>账户余额：<em>{{money}}元</em></span>
            <i class="iconFont right"><em class="nor">充值</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_UNUSED',query: {redirect: '/uc/autoborrow/detail'}}">
            <span>我的红包</span>
            <i class="iconFont right"><em class="nor">{{cardNumber}}个可用</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <label class="radioLabel"><input type="radio" :name="radio.name" value="1"
                                           v-model="radio.value"/>优先使用红包</label>
          <label class="radioLabel"><input type="radio" :name="radio.name" value="2"
                                           v-model="radio.value"/>优先使用加息券</label>
        </li>
      </ul>
    </section>
    <section class="setting">
      <dl>
        <dt>单笔投资金额</dt>
        <dd>
          <label><input type="radio" :name="onesMoney.name" value="1" v-model="onesMoney.value">余额全投</label>
          <label><input type="radio" :name="onesMoney.name" value="2" v-model="onesMoney.value">自定义</label>
          <div class="editInfo" v-show="onesMoney.value == 2">
            <span class="insetInput minInput">
              <input type="tel" v-model.number="onesMoney.min" maxlength="7" @change="rexMoney"/>
              <em>元</em>
            </span>
            <span>-</span>
            <span class="insetInput maxInput">
              <input type="tel" v-model.number="onesMoney.max" maxlength="7" @change="rexMoney"/>
              <em>元</em>
            </span>
            <p>请输入50-100万之间的正整数，且起始值≤结束值</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>产品期限范围</dt>
        <dd>
          <label><input type="radio" :name="onesDate.name" value="1" v-model="onesDate.value">期限不限</label>
          <label><input type="radio" :name="onesDate.name" value="2" v-model="onesDate.value">自定义</label>
          <div class="editInfo" v-show="onesDate.value == 2">
            <span class="insetInput minInput">
              <input type="tel" v-model.number="onesDate.min" maxlength="4" @change="rexDate()"/>
              <em>元</em>
            </span>
            <span>-</span>
            <span class="insetInput maxInput">
              <input type="tel" v-model.number="onesDate.max" maxlength="4" @change="rexDate()"/>
              <em>元</em>
            </span>
            <p>请输入1-1080之间的正整数，且起始值≤结束值</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>预期利率范围</dt>
        <dd>
          <label><input type="radio" :name="onesRate.name" value="1" v-model="onesRate.value">利率不限</label>
          <label><input type="radio" :name="onesRate.name" value="2" v-model="onesRate.value">自定义</label>
          <div class="editInfo" v-show="onesRate.value == 2">
            <span class="insetInput minInput">
              <input type="tel" v-model.number="onesRate.min" maxlength="2" @change="rexRate()"/>
              <em>%</em>
            </span>
            <span>-</span>
            <span class="insetInput maxInput">
              <input type="tel" v-model.number="onesRate.max" maxlength="2" @change="rexRate()"/>
              <em>%</em>
            </span>
            <p>平台产品利率范围在1%-15%之间的正整数，且起始值≤结束值</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>还款方式</dt>
        <dd>
          <div class="multiSelect">
            <span><input type='checkbox' v-model='checked' v-on:click='checkedAll'><em :class="{on: checked === true}">全部</em></span>
            <span v-for='item in checkboxData'>
              <input type='checkbox' name='checkboxinput' v-model="checkboxModel" :value="item.id">
              <em :class="{on: getActive(item.id) == item.id}">{{item.value}}</em>
            </span>
          </div>
        </dd>
      </dl>
    </section>
    <div class="submitLine">
      <button type="button" class="submit">立即设置</button>
    </div>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import {Toast} from 'mint-ui';

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        money: 0.28,
        cardNumber: 1,
        radio: {name: 'useCard', value: 1},
        onesMoney: {name: 'money', value: 2, min: 200, max: 50000},
        onesDate: {name: 'date', value: 1, min: null, max: null},
        onesRate: {name: 'rate', value: 1, min: null, max: null},
        checkboxData: [
          {id: '1', value: '一次性还本付息'},
          {id: '2', value: '按月分期、等额本金'},
          {id: '3', value: '按月付息、到期还本'},
        ],
        checkboxModel: ['1', '3'],
        checked: false
      }
    },
    watch: {
      //深度 watcher
      'checkboxModel': {
        handler: function (val, oldVal) {
          if (this.checkboxModel.length === this.checkboxData.length) {
            this.checked = true;
          } else {
            this.checked = false;
          }
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      rexMoney() {
        if (this.onesMoney.min <= 0) this.onesMoney.min = null;
        if (this.onesMoney.max <= 0) this.onesMoney.max = null;
        if (this.onesMoney.min < 50 || this.onesMoney.min > 1000000 || (this.onesMoney.max !== null && this.onesMoney.max < 50) || this.onesMoney.max > 1000000 || (this.onesMoney.min > this.onesMoney.max && this.onesMoney.max)) {
          Toast("请输入50-100万之间的正整数，且起始值≤结束值");
          console.log([this.onesMoney.min < 50, this.onesMoney.min > 1000000, this.onesMoney.max !== null && this.onesMoney.max < 50, this.onesMoney.max > 1000000, this.onesMoney.min > this.onesMoney.max && this.onesMoney.max > 0]);
        }
      },
      rexDate() {
        if (this.onesDate.min <= 0) this.onesDate.min = null;
        if (this.onesDate.max <= 0) this.onesDate.max = null;
        if (this.onesDate.min < 1 || this.onesDate.min > 1080 || (this.onesDate.max !== null && this.onesDate.max < 1) || this.onesDate.max > 1080 || (this.onesDate.min > this.onesDate.max && this.onesDate.max)) {
          Toast("请输入1-1080之间的正整数，且起始值≤结束值");
        }
      },
      rexRate() {
        if (this.onesRate.min <= 0) this.onesRate.min = null;
        if (this.onesRate.max <= 0) this.onesRate.max = null;
        if (this.onesRate.min < 1 || this.onesRate.min > 15 || (this.onesRate.max !== null && this.onesRate.max < 1) || this.onesRate.max > 15 || (this.onesRate.min > this.onesRate.max && this.onesRate.max)) {
          Toast("平台产品利率范围在1%-15%之间的正整数，且起始值≤结束值");
        }
      },
      checkedAll: function () {
        let _this = this;
        if (this.checked) {
          //实现反选
          _this.checkboxModel = [];
        } else {
          //实现全选
          _this.checkboxModel = [];
          _this.checkboxData.forEach(function (item) {
            _this.checkboxModel.push(item.id);
          });
        }
      },
      getActive(id) {
        return this.checkboxModel.filter(function (item) {
          if (parseInt(id) === parseInt(item)) return item;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
