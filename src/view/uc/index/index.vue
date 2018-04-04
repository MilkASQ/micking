<template>
  <main>
    <section class="ucHeader">
      <div class="top">
        <span class="fl">当前登录账号：MilkA</span>
        <router-link to="/" class="msg fr"><i class="iconFont">&#xe6c9;</i><strong>2</strong></router-link>
      </div>
      <div class="money"><b>335,272.58</b>
        <p>账户总资产(元)</p></div>
      <ul class="balance">
        <li>可用余额(元)<b>345391.98</b></li>
        <li>冻结金额(元)<b>391.98</b></li>
      </ul>
      <div class="bottom">
        <dl>
          <dt>累计利息(元)</dt>
          <dd>14016.78</dd>
        </dl>
        <dl>
          <dt>待收总额(元)</dt>
          <dd>14016.78</dd>
        </dl>
      </div>
    </section>
    <section class="ucBtns">
      <router-link to="/">充值</router-link>
      <router-link to="/">提现</router-link>
    </section>
    <section class="ucMenuList">
      <ul>
        <li>
          <router-link :to="{name:'UC_SAFE'}">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>安全中心</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_INVEST_INDEX'}">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>投资记录</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <!--<li>
          <router-link to="/">
            <i class="iconFont">&#xe608;</i>
            <span>回款日历</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>-->
        <li>
          <router-link :to="{name:'UC_UNUSED'}">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>卡券包</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_SCORES'}">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>积分商城</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link :to="{name:'UC_MONEY'}">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>资金记录</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>自动投标</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>推荐管理</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <!--<i class="iconFont">&#xe608;</i>-->
            <span>关于微金</span>
            <i class="iconFont">&#xe611;</i>
          </router-link>
        </li>
      </ul>
      <span @click="logout" class="logout">退出登录</span>
    </section>
    <vnav></vnav>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import navs from "@/components/navs"
  import * as types from '../../../store/type'

  export default {
    components: {
      "vhead": heads,
      'vnav': navs
    },
    data() {
      return {
        loading: false

      }
    },
    created() {
      this.closeLoad();
    },
    methods: {
      closeLoad() {
        // 关闭loading
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      logout() {
        // 退出
        this.$store.commit(types.LOGOUT);
        this.$store.commit(types.USERINFOCLEAR);
        //或者跳转链接
        this.$router.push('/index');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ucHeader {
    width: 20rem;
    height: auto;
    background: -webkit-linear-gradient(left bottom, #f90, #f60);
    color: #fff;
    .top {
      padding: 0 0.6rem;
      font-size: 0.75rem;
      height: 2rem;
      line-height: 2rem;
      .msg {
        position: relative;
        margin-right: 0.5rem;
        color: #fff;
        i.iconFont {
          font-size: 1.2rem;
        }
        strong {
          font-size: 0.625rem;
          min-width: 1.2rem;
          text-align: center;
          color: #fff;
          background: #d00;
          padding: 0 0.25rem;
          font-weight: normal;
          position: absolute;
          top: 0.2rem;
          right: -0.9rem;
          height: 0.9rem;
          line-height: 0.9rem;
          border-radius: 0.5rem;
        }
      }
    }
    .money {
      height: 5.4rem;
      text-align: center;
      padding-top: 1.4rem;
      b {
        font-size: 1.8rem;
        font-weight: normal;
      }
      p {
        opacity: 0.8;
        font-size: 0.75rem;
      }
    }
    .balance {
      height: 2.4rem;
      line-height: 2.4rem;
      text-align: center;
      font-size: 0.75rem;
      li {
        float: left;
        width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        b {
          padding-left: 0.125rem;
          font-size: 0.8125rem;
          font-weight: normal;
          vertical-align: middle;
        }
        &:first-child:after {
          content: '';
          height: 1rem;
          width: 0.0625rem;
          background: #fff;
          opacity: 0.3;
          position: absolute;
          right: 0;
          top: 0.7rem;
          display: block;
        }
      }
    }
    .bottom {
      width: 20rem;
      background: #fff;
      color: #666;
      padding: 0.6rem;
      overflow: hidden;
      dl {
        width: 9.4rem;
        float: left;
        height: 3rem;
        text-align: center;
        line-height: 1rem;
        font-size: 0.7rem;
        position: relative;
        &:first-child:after {
          content: '';
          width: 0.0625rem;
          height: 2.4rem;
          background: #eee;
          position: absolute;
          right: 0;
          top: 0.3rem;
        }
        dt {
          line-height: 1rem;
          margin-top: 0.3rem;
        }
        dd {
          height: 1.7rem;
          line-height: 1.7rem;
          font-size: 1rem;
          color: #f60;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .ucBtns {
    width: 20rem;
    background: #fff;
    overflow: hidden;
    text-align: center;
    padding: 0 0.5rem 0.8rem 0.5rem;
    a {
      width: 8.5rem;
      height: 2.4rem;
      background: -webkit-linear-gradient(left bottom, #f90, #f60);
      display: block;
      border-radius: 1.2rem;
      margin: 0 0.5rem;
      float: left;
      color: #fff;
      line-height: 2.4rem;
      &:nth-child(2) {
        color: #333;
        border: 0.0625rem solid #ddd;
        background: none;
      }
    }
  }

  .ucMenuList {
    width: 20rem;
    ul {
      margin-top: 0.6rem;
      background: #fff;
      li {
        height: 2.4rem;
        line-height: 2.4rem;
        overflow: hidden;
        color: #666;
        padding: 0 0.6rem;
        border-bottom: 0.0625rem solid #eee;
        &:last-child {
          border-bottom: 0;
        }
        a {
          display: block;
          overflow: hidden;
          font-size: 0.875rem;
          span {
            float: left;
          }
          .iconFont {
            float: left;
            width: 1.8rem;
            height: 2.4rem;
            text-align: center;
            color: #f60;
            font-size: 1.125rem;
            &:last-child {
              float: right;
              text-align: right;
              color: #ccc;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
    .logout {
      display: block;
      width: 20rem;
      height: 2.4rem;
      margin: 0.6rem 0;
      background: #fff;
      color: #f60;
      text-align: center;
      line-height: 2.4rem;
    }
  }
</style>
