<template>
  <main>
    <vhead title="银行卡信息" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="bank" v-if="status">
      <div class="bankcard">
        <div class="bankcard_logo">
          <img src="http://wjzxbank.com/static/m/images/old_banklogo/ICBC.png" class="fl">
          <span class="fl">{{bank_name}}</span>
          <span class="fr">持卡人：{{ real_name}}</span>
          <div class="cl"></div>
        </div>
        <div class="bankcard_num">
          <span>····</span><span>····</span><span>····</span><span>{{last_bank_card}}</span>
        </div>
      </div>
      <div class="bank_card_btm">
        <router-link :to="{name:''}" class="half">申请变更</router-link>
        <router-link :to="{name:''}" class="half">使用此卡充值投资</router-link>
      </div>
    </section>
  </main>
</template>

<script>
  import heads from "@/components/heads"
  import * as types from '@/store/type'
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';


  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        status: true,  // false => 未绑定银行卡  true => 已绑定银行卡
        real_name: '张三',
        bank_name: '工商银行',
        bank_card: '6222020000000001234',
        last_bank_card: null
      }
    },
    created() {
      this.last_bank_card = unit.subStrString(this.bank_card, 4);

      if (this.status === false) {
        this.$router.push({name: 'IDCARD'});
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
