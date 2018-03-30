<template>
  <main>
    <!--<vhead title="验证信息" :url="{name:'CHANGE_PHONE'}" rightUrl="" status="false" rightTxt=""></vhead>-->
    <section class="changePhone">
      <div class="public_form">
        <ul>
          <li>
            <span class="txt">身份证号</span>
            <input type="tel" name="idcard" v-model="id_card" maxlength="18" placeholder="请输入身份证号"/>
          </li>
          <li>
            <span class="txt">银行卡号</span>
            <input type="tel" name="card_id" v-model="card_id" maxlength="19" placeholder="请输入银行卡号"/>
          </li>
        </ul>
      </div>
      <div class="submitLine">
        <button type="button" class="submit" @click="submit">确定</button>
      </div>
    </section>
  </main>
</template>

<script>
  import heads from "@/components/heads"
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';
  import * as types from '@/store/type'


  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        id_card: 450321199006277012,
        card_id: 1234567891234567,
      }
    },
    created() {},
    methods: {
      submit() {
        let data = {id_card: this.id_card, card_id: this.card_id};
        if (unit.checkIdCade(this.id_card) === false) {
          Toast('身份证号码格式不正确');
          return false;
        }
        if (unit.bankCode(this.card_id) === false) {
          Toast('银行卡号格式不正确');
          return false;
        }
        alert("测试成功");
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
