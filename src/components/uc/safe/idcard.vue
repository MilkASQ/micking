<template>
  <main>
    <vhead title="实名认证" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="showsList" v-if="status">
      <div class="topTips"><i class="iconFont agreen">&#xe618;</i>您已通过实名认证，如需帮助请联系客服</div>
      <ul class="listing">
        <li>
          <span class="txt">真实姓名</span>
          <div class="intro">{{name}}</div>
        </li>
        <li>
          <span class="txt">身份证号</span>
          <div class="intro">{{ idcard }}</div>
        </li>
      </ul>
    </section>
    <section class="changePhone" v-else>
      <div class="top_tips">
        <span class="a666">银行预留的手机号码必须与注册手机号一致！</span>
        <div class="phone">{{ phone }}</div>
      </div>
      <div class="public_form">
        <ul>
          <li>
            <span class="txt">真实姓名</span>
            <input type="tel" name="" v-model="name" maxlength="6" placeholder="请输入真实姓名"/>
          </li>
          <li>
            <span class="txt">身份证号</span>
            <input type="tel" name="" v-model="idcard" maxlength="6" placeholder="请输入身份证号"/>
          </li>
          <li>
            <span class="txt">银行卡号</span>
            <input type="tel" name="" v-model="card_id" maxlength="6" placeholder="请输入银行卡号"/>
          </li>
          <li>
            <span class="txt">开户银行</span>
            <select name="bank_list">
              <option v-for="tos in bank_list">{{ tos.b_name }}</option>
            </select>
            <!--<input type="tel" name="" v-model="idcard" maxlength="6" placeholder="请输入短信验证码"/>-->
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
        status: false,
        name: null,
        idcard: null,
        phone: null,
        card_id: null,
        bank_list: [
          {b_name: '中国银行', bank_code: '1'},
          {b_name: '中国工商银行', bank_code: '2'},
          {b_name: '建设银行', bank_code: '3'},
          {b_name: '农业银行', bank_code: '4'}
        ]
      }
    },
    created() {

    },
    methods: {
      submit() {
        let data = {verify: this.verify, phone: this.phone};
        if (unit.checkPhone(this.phone) === false) {
          Toast('手机号码格式不正确');
          return false;
        }
        if (unit.msgVerify(this.verify) === false) {
          Toast('短信验证码格式不正确');
          return false;
        }
        alert("测试成功");
      },
      sendMessage() {

        let v = this;
        if (unit.checkPhone(this.phone) === false) {
          Toast('手机号码格式不正确');
          return false;
        }

        // 定时器函数
        v.count_down = 60;
        v.disabled = true;
        let hh = setInterval(doString, 1000);
        let data = {verify: this.verify, phone: this.phone};

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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
