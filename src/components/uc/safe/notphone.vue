<template>
  <main>
    <v-head title="验证信息" :url="{name:'CHANGE_PHONE'}" rightUrl="" status="false" rightTxt=""></v-head>
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
  import head from "@/components/head.vue"
  import nav from "@/components/nav.vue"
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';
  import * as types from '@/store/type'


  export default {
    components: {
      "v-head": head,
      "v-nav": nav
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
  .changePhone {
    width: 20rem;
    height: auto;
    overflow: hidden;
    .top_tips {
      padding: 0.6rem;
      font-size: 0.8rem;
      text-align: center;
      .phone {
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }
  }

  .public_form {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    ul {
      overflow: hidden;
      li {
        height: 2.8rem;
        line-height: 2.8rem;
        border-bottom: 1px solid #eee;
        padding: 0 0.6rem;
        font-size: 0.75rem;
        position: relative;
        &:last-child {
          border-bottom: 0;
        }
        .txt {
          width: 5rem;
          display: block;
          float: left;
        }
        input, button {
          width: 13.8rem;
          border: 0;
          height: 1.6rem;
          border-left: 1px solid #eee;
          padding-left: 0.6rem;
          &.btn {
            position: absolute;
            top: 0.2rem;
            right: 0.6rem;
            width: auto;
            height: 2rem;
            line-height: 2rem;
            background: #f60;
            border-radius: 1.6rem;
            padding: 0 0.8rem;
            color: #fff;
            z-index: 10;
            margin-top: 0.2rem;
            &.over {
              background: #bbb;
            }
          }
        }
      }
    }
  }
</style>
