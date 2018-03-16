<template>
  <main>
    <v-head title="登录密码" :url="{name:'UC_SAFE'}" rightUrl="" status="false" rightTxt=""></v-head>
    <section class="changePhone">
      <div class="public_form">
        <ul>
          <li>
            <span class="txt">原密码</span>
            <input type="tel" name="" v-model="old_password" maxlength="16" placeholder="请输入原密码"/>
          </li>
          <li>
            <span class="txt">新密码</span>
            <input type="password" name="" v-model="password" maxlength="16" placeholder="请输入8-16位字母及数字密码"/>
          </li>
          <li>
            <span class="txt">确定新密码</span>
            <input type="password" name="" v-model="password2" maxlength="16" placeholder="请再次输入8-16位字母及数字密码"/>
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
  import * as types from '@/store/type'
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';


  export default {
    components: {
      "v-head": head,
      "v-nav": nav
    },
    data() {
      return {

        old_password: null, // 支付密码
        password: null, // 支付密码
        password2: null, // 确认支付密码
      }
    },
    created() {
    },
    methods: {
      submit() {
        let data = {
          old_password: this.old_password,
          password: this.password,
          password2: this.password2,
        };

        if (this.old_password != '' || this.old_password != null) {
          Toast('原密码格式错误');
          console.log(this.old_password);
          return false;
        }
        if (unit.checkPassword(this.password) === false) {
          Toast('新密码格式错误，请输入8-16位字母、数字密码！');
          return false;
        }
        if (this.password != this.password2) {
          Toast('两次输入密码不一致');
          return false;
        }
        alert("测试成功");
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
