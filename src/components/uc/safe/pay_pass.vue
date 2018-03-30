<template>
  <main>
    <vhead title="支付密码" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="changePhone" v-if="status">
      <div class="top_tips">
        <span class="a666">点击“获取验证码”，将发送短信验证码到您的手机</span>
        <div class="phone">{{ changephone }}</div>
      </div>
      <div class="public_form">
        <ul>
          <li>
            <span class="txt">短信验证码</span>
            <input type="tel" name="" v-model="verify" maxlength="6" placeholder="请输入短信验证码"/>
            <button class="btn" v-if="show_btn" @click="sendMessage" :disabled="disabled">获取验证码</button>
            <button class="btn over" :disabled="disabled" v-else>{{ count_down }}s重发</button>
          </li>
          <li>
            <span class="txt">支付密码</span>
            <input type="password" name="" v-model="pay_pass" maxlength="6" placeholder="请输入6位数字支付密码"/>
          </li>
          <li>
            <span class="txt">确定支付密码</span>
            <input type="password" name="" v-model="pay_pass2" maxlength="6" placeholder="请再次输入6位数字支付密码"/>
          </li>
        </ul>
      </div>
      <div class="submitLine">
        <button type="button" class="submit" @click="submit">确定</button>
      </div>
    </section>
    <section class="changePhone" v-else>
      <div class="public_form">
        <ul>
          <li>
            <span class="txt">支付密码</span>
            <input type="password" name="" v-model="pay_pass" maxlength="6" placeholder="请输入6位数字支付密码"/>
          </li>
          <li>
            <span class="txt">确定支付密码</span>
            <input type="password" name="" v-model="pay_pass2" maxlength="6" placeholder="请再次输入6位数字支付密码"/>
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
  import * as types from '@/store/type'
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';


  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        status: true,  // false => 未设置支付密码  true => 已设置支付密码
        phone: 18576467357,  // 手机号码
        changephone: null, // 去敏手机号

        verify: null, // 短信验证码
        pay_pass: null, // 支付密码
        pay_pass2: null, // 确认支付密码

        count_down: null,
        show_btn: true,
        disabled: false
      }
    },
    created() {
      this.setPhone();
    },
    methods: {
      submit() {
        let data = {}

        if (this.status === true) {
          if (unit.msgVerify(this.verify) === false) {
            Toast('短信验证码格式错误');
            return false;
          }
          if (unit.msgVerify(this.pay_pass) === false) {
            Toast('支付密码格式错误');
            return false;
          }
          if (this.pay_pass2 != this.pay_pass) {
            Toast('两次输入支付密码不一致');
            return false;
          }
          data = {
            verify: this.verify,
            pay_pass: this.pay_pass,
            pay_pass2: this.pay_pass2,
          }
        } else {
          if (unit.msgVerify(this.pay_pass) === false) {
            Toast('支付密码格式错误');
            return false;
          }
          if (this.pay_pass2 != this.pay_pass) {
            Toast('两次输入支付密码不一致');
            return false;
          }
          data = {
            pay_pass: this.pay_pass,
            pay_pass2: this.pay_pass2,
          }
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
        let data = {phone: this.phone};

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
      setPhone() {
        this.changephone = unit.subStrPhone(this.phone);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
