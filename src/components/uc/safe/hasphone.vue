<template>
  <main>
    <!--<vhead title="验证信息" :url="{name:'CHANGE_PHONE'}" rightUrl="" status="false" rightTxt=""></vhead>-->
    <section class="changePhone">
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
        verify: null,
        phone: '18500007357',
        changephone: '',
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
      },
      setPhone() {
        this.changephone = unit.subStrPhone(this.phone);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
