<template>
  <main>
    <vhead title="商品兑换" :url="{name:'UC_SCORES'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="scoresDetail">
      <div class="i_title">
        <div class="image" :class="{ type1: data.type === 1 , type2 : data.type === 2}">
          <em>{{data.money}}</em>{{data.type === 1 ? '元' : '%'}}
        </div>
        <div class="need">所需积分：<em>{{data.need}}</em></div>
      </div>
      <div class="intro">
        <div class="title">商品简介</div>
        <div class="content">{{data.tips}}</div>
      </div>
      <div class="intro">
        <div class="title">商品说明</div>
        <div class="content" v-html="data.intro">{{data.intro}}</div>
      </div>
      <button type="button" class="submit" v-if="myData.scores >= change">立即兑换</button>
      <button type="button" class="submit not" v-else>积分不足</button>
    </section>
  </main>
</template>

<script>
  import heads from "@/components/vtops"

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        change: 20000,
        myData: {
          scores: 16500,
        },
        data: {
          id: null,
          type: 2,
          money: 2,
          name: '20元投资红包',
          need: '20,000积分',
          tips: '投资红包可在投资时使用，使用成功后，即可返回红包金额至账户余额中。',
          intro: '1、兑换成功后，投资红包将实时发送至您的账户，请在“个人账户”—“卡券包”中查询；<br>2、投资红包使用有效期为2个月，投资所有标的可用，最低投资金额≥5000元；<br>3、单笔投资仅限使用1个投资红包，红包与加息券不可以同时使用；<br>4、投资红包一经兑出，不退不补。'
        }
      }
    },
    created() {

    },
    mounted() {
      this.data.id = this.$route.params.id;
      // alert(this.id);
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .scoresDetail {
    width: 20rem;
    height: auto;
    overflow: hidden;
    padding-bottom: 3rem;
    .i_title {
      background: #fff;
      width: 20rem;
      height: auto;
      padding-top: 1.5rem;
      .image {
        width: 8rem;
        height: 8rem;
        margin: auto;
        text-align: center;
        font-size: 1rem;
        em {
          font-size: 1.5rem;
        }
        &.type1 {
          background: url("../../../assets/images/icon_pack.png") no-repeat;
          background-size: 8rem;
          color: #ea3925;
          line-height: 6rem;
        }
        &.type2 {
          background: url("../../../assets/images/icon_puls.png") no-repeat;
          background-size: 8rem;
          color: #fff;
          line-height: 9.5rem;
          padding-left: 1.5rem;
        }
      }
      .need {
        height: 2.6rem;
        margin-top: 1rem;
        border-top: 0.0625rem solid #eee;
        border-bottom: 0.0625rem solid #eee;
        padding: 0 0.6rem;
        font-size: 0.875rem;
        line-height: 2.6rem;
        em {
          color: #f60;
        }
      }
    }
    .intro {
      width: 20rem;
      background: #fff;
      border-top: 0.0625rem solid #eee;
      border-bottom: 0.0625rem solid #eee;
      margin-top: 0.6rem;
      padding: 0 0.6rem;
      .title {
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 0.875rem;
        border-bottom: 0.0625rem solid #eee;
      }
      .content {
        font-size: 0.75rem;
        color: #666;
        line-height: 160%;
        padding: 0.6rem 0;
      }
    }
    .submit {
      width: 20rem;
      position: fixed;
      bottom: 0;
      left: 0;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
      &.not {
        background: #ffb27f;
      }
    }
  }
</style>
