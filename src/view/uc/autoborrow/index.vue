<template>
  <main>
    <vhead title="自动投标" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="autoborrowSwitch">
      <div class="txt">开启状态</div>
      <label class="iSwitch" @change="change"><input type="checkbox" v-model="value"><i></i></label>
    </section>
    <section class="ucMenuList">
      <ul>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>可用余额</span>
            <i class="iconFont right"><em class="org">{{hasUse}}元</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>卡券包</span>
            <i class="iconFont right"><em class="org">{{useCard}}</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>单笔投资金额</span>
            <i class="iconFont right"><em class="org">{{rate}}</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>预期利率范围</span>
            <i class="iconFont right"><em class="org">{{onesMoney}}</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>产品期限范围</span>
            <i class="iconFont right"><em class="org">{{product}}</em>&#xe611;</i>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'UC_AUTOBORROW_EDIT'}">
            <span>还款方式</span>
            <i class="iconFont right"><em class="org">{{ways}}</em>&#xe611;</i>
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  import Vue from "vue"
  import heads from "@/components/vtops"
  import * as unit from "@/assets/js/unit"

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        value: false,
        hasSet: true,
        status: false,
        hasUse: 0.28,
        useCard: '优先使用红包',
        onesMoney: '余额全投',
        rate: '不限',
        product: '不限',
        ways: '一次性还本付息按月分期、等额本金按月付息、到期还本',
      }
    },
    created() {
      if (this.hasSet === false) {
        this.$router.push({name: 'UC_AUTOBORROW_ADD'});
      }
    },
    mounted() {

    },
    methods: {
      change() {
        console.log(this.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .autoborrowSwitch{
    width: 20rem;
    background: #fff;
    border-top: 0.0625rem solid #eee;
    border-bottom: 0.0625rem solid #eee;
    margin-top: 0.6rem;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 0.6rem;
    .txt{
      float: left;
    }
    .iSwitch{
      float: right;
      margin-top: 0.3125rem;
    }
  }
  /*.autoborrowInfo {
    width: 18.8rem;
    height: auto;
    background: #fff;
    margin: 0.6rem auto;
    border-radius: 0.3125rem;
    box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.1);
    ul {
      padding: 0.6rem;
      font-size: 0.875rem;
      li {
        line-height: 1.4rem;
        padding: 0.1rem 0;
        color: #999;
        em {
          color: #666;
          &.red {
            color: #f00;
          }
        }
      }
      &.out {
        li {
          em {
            color: #999;
          }
        }
      }
    }
    .dobtm {
      height: 2.4rem;
      line-height: 2.4rem;
      display: block;
      overflow: hidden;
      border-top: 0.0625rem solid #eee;
      a, span {
        color: #666;
        width: 9.4rem;
        float: left;
        text-align: center;
        &:first-child {
          border-right: 0.0625rem solid #eee;
        }
        &.blue {
          color: #0095cc;
        }
        &.green {
          color: #0c0;
        }
      }
    }
  }*/
</style>
