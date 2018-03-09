<template>
  <main>
    <v-head title="登录" url="/index" rightUrl="/register" status="true" rightTxt="立即注册"></v-head>
    <section class="login">
      <ul>
        <li>
          <div class="name">手机号</div>
          <div class="right">
            <input type="tel" value="" v-model="model.phone" id="phone" autocomplete="off" placeholder="请输入手机号"/>
          </div>
        </li>
        <li>
          <div class="name">密码</div>
          <div class="right">
            <input type="password" maxlength="16" v-if="passwordType == false" v-model="model.password" autocomplete="off" placeholder="请输入8-16位密码" value=""/>
            <input type="text" maxlength="16" v-if="passwordType == true" v-model="model.password" autocomplete="off" placeholder="请输入8-16位密码" value=""/>
            <div class="button_line">
            <span class="delete_btn" v-if="model.password.length >= 6" @click="deletePass"><i
              class="iconFont">&#xe60d;</i></span>
              <span class="look_btn" @click="lookPass">
              <i class="iconFont" v-show="passwordType === false">&#xe626;</i>
              <i class="iconFont" v-show="passwordType === true">&#xe625;</i>
            </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="buttonWrap">
        <button type="button" class="submit" @click="login">立即登录</button>
      </div>
    </section>
  </main>
</template>

<script>
  import head from "./head.vue"
  import * as types from '../store/type'

  import { Toast } from 'mint-ui';

  import CryptoJS from 'crypto-js'
  import MD5 from 'crypto-js/md5'
  import AES from 'crypto-js/aes'


  export default {
    components: {
      "v-head": head
    },
    data() {
      return {
        model: {
          phone: this.$store.state.user.phone,
          password: this.$store.state.user.password
        },
        passwordType: false
      }
    },
    watch: {},
    created() {
      if (this.$store.state.token !== null && this.$store.state.token !== '') {
        this.$router.push({path: '/index'});
      }
      if (window.localStorage.getItem('userInfo') !== null && this.$store.state.token !== '') {
        this.model = JSON.parse(window.localStorage.getItem('userInfo'));
      }
    },
    methods: {
      lookPass: function () {
        this.passwordType = !this.passwordType;
      },
      deletePass: function () {
        this.model.password = '';
      },
      login: function () {
        if (this.model.phone.length !== 11 && this.model.password.length < 6) {
          Toast('请填写正确的信息');
        } else {

          let key = "147258369";
          let data = JSON.stringify(this.model);
          let md5token = MD5(JSON.stringify(this.model)).toString(CryptoJS.enc.Hex);
          let aestoken = CryptoJS.AES.encrypt(data, key).toString();
          let val = CryptoJS.AES.decrypt(aestoken,key).toString(CryptoJS.enc.Utf8);

          // 设置 token&userinfo
          this.$store.commit(types.USERINFO, this.model);
          this.$store.commit(types.LOGIN, md5token);

          let popus = Toast({message: '登录成功'});
          setTimeout(()=>{
            popus.close();
            //或者跳转链接
            let form = decodeURIComponent(this.$route.query.redirect || '/index');
            this.$router.push(form);
          },2000);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 20rem;
    margin-top: 0.6rem;
    .buttonWrap{
      padding: 1rem;
    }
    ul{
      background: #fff;
      li{
        overflow: hidden;
        padding: 0 0.6rem;
        background: #fff;
        height: 2.6rem;
        line-height: 2.6rem;
        border-bottom: 1px solid #eee;
        .name{
          width: 5rem;
          float: left;
          color: #666;
          font-size: 0.8125rem;
          position: relative;
          &:after {
            content: '';
            width: 0.0625rem;
            height: 1.6rem;
            position: absolute;
            top: 0.48rem;
            right: 0;
            background: #f6f6f6;
          }
        }
        .right{
          width: 13.8rem;
          float: left;
          position: relative;
          input {
            width: 100%;
            height: 2.4rem;
            border: 0;
            float: left;
            margin-top: 0.08rem;
            font-size: 0.8125rem;
            color: #333;
            padding-left: 0.6rem;
          }
          .button_line {
            right: 0;
            top: 0.08rem;
            position: absolute;
            line-height: 2.4rem;
            text-align: center;
            span {
              width: 1.2rem;
              height: 2.4rem;
              color: #666;
              display: inline-block;
              background: #fff;
              &.look_btn {
                margin-right: 0.2rem;
              }
            }

          }
        }
      }
    }
  }
</style>

