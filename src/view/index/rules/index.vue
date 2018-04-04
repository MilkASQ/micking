<template>
  <main>
    <vhead :title="title" :url="back" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="rules" v-html="content">
      {{content}}
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
        type: null, // 21 => 积分说明
        back: null,
        url: [
          {id: 21, url: '/uc/scores/log'},
          {id: 22, url: '/uc/autoborrow/index'},
        ],
        title: '积分说明',
        content: `<p>微金在线积分兑换功能面向全体投资用户，用户投资微金在线可获得相应的积分数，累计到一定数量后可兑换相应商品。 </p>
                  <h4 style="padding-top: 0.6rem; padding-bottom: 0.2rem;">如何获得积分：</h4>
                  <p>用户投资成功后，根据所投金额获得相应比例的积分数,投资额：积分数=10:1；</p>
                  <p>注：投资金额的个位数不计入积分（如投资889元对应积分数为88），积分不可转让。</p>
                  <h4 style="padding-top: 0.6rem; padding-bottom: 0.2rem;">如何使用积分：</h4>
                  <p>1、 用户积分累计到一定数量后，可在积分商城兑换商品；</p>
                  <p>2、 积分商城可兑商品包括但不限于：投资红包、加息劵等（不断丰富中）；</p>
                  <p>3、 不同商品的兑换行为将消耗不同的积分数（详见商品详情），同一商品可兑换多次。</p>
                  <h4 style="padding-top: 0.6rem; padding-bottom: 0.2rem;">特别说明：</h4>
                  <p>1、微金在线积分永久有效；</p>
                  <p>2、所有兑换商品数量有限，兑完为止；</p>
                  <p>3、投资成功获得积分，若所投标的中途流标将会撤消用户该笔投资所得积分，同时用户已使用了该积分，则积分为负增长，需与用户再投资时所得积分相抵扣。</p>
                  <p>4、用户兑换所得投资红包及加息券将发放至您的平台账户，您可于“个人账户”—“卡券包”中查询；</p>
                  <p>5、商品一经兑出，不退不补，若有遗失，平台概不负责；</p>
                  <p>6、本活动最终解释权归微金在线所有。</p>`,

      }
    },
    created() {
      this.type = this.$route.params.type;
      this.back = this.getUrl()[0].url;
    },
    mounted() {
      // this.back = this.getUrl()[0].url;
    },
    methods: {
      getUrl() {
        let _this = this;
        return _this.url.filter(function (item) {
          if (item.id == _this.type) {
            return item;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rules {
    width: 20rem;
    background: #fff;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 160%;
  }
</style>
