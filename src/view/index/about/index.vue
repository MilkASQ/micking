<template>
  <main>
    <vhead title="关于我们" :url="back" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="about">
      <img :src="image1" class="head"/>
      <img :src="title1" class="title"/>
      <div class="intro" v-html="company_intro">{{company_intro}}</div>
      <img :src="title2" class="title"/>
      <img :src="image2"/>
      <img :src="title3" class="title"/>
      <div class="company_shareholder">
        <div class="name"><img :src="shareholder.name1" /></div>
        <div class="content">{{shareholder.first}}</div>
        <div class="name"><img :src="shareholder.name2" /></div>
        <div class="content">{{shareholder.second}}</div>
        <img :src="shareholder.image3" />
      </div>
      <img :src="title4" class="title"/>
      <img :src="image4"/>
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
        image1: require('@/assets/images/about/image1.png'),
        title1: require('@/assets/images/about/image2.png'),
        company_intro: `<p>微金在线始创于2012年8月，历经1年半的筹备和研发，于2014年3月正式上线运营。由深圳市微金财富资产管理有限公司（下称“微金财富”）授权深圳市首控微金资本管理控股有限公司（下称“首控微金”）负责平台的运营。</p>
                  <p>首控微金总部位于深圳市福田区CBD，注册资本5000万元人民币，股东为上市企业首控集团（HK1269）旗下全资子公司首控基金管理有限公司（下称“首控基金”）和微金财富。</p>
                  <p>平台上线运营三年来，始终秉承“诚信、规范、专业、透明、创新”的经营理念，专注于稳健的车贷、房产抵押贷和教育分期领域，致力于为中小企业和个人提供便捷、高效、专业、贴心的网络借贷信息中介服务。通过先进的互联网技术，实现借款人和出借人的智能匹配与撮合，为广大中小企业和个人提供借款和资金募集新渠道，并为资金富足的个人提供创新型投资服务。截止至2017年12月，平台累计撮合交易总金额近11亿，为投资人赚取收益近1800万元。</p>`,
        title2: require('@/assets/images/about/image3.png'),
        image2: require('@/assets/images/about/image3-1.png'),
        title3: require('@/assets/images/about/image4.png'),
        shareholder: {
          name1: require('@/assets/images/about/image4-1.png'),
          name2: require('@/assets/images/about/image4-2.png'),
          first: '微金财富成立于2013年11月，总部位于深圳CBD中心区，注册资本3000万元人民币，是一家从事基金募集、基金销售、资产管理、股权投资等业务的专业资产管理公司，投资业务涉及医疗、物流、汽车消费金融、商业地产、互联网金融等领域。针对高净值客户，微金财富推出定制化基金产品，发行优质私募基金以满足客户投资需求。',
          second: '首控基金成立于2012年9月，注册资本5亿元人民币，为港股上市企业首控集团（HK.1269）旗下全资子公司，是一家受托管理股权投资企业，从事私募股权投资、创业投资等私募基金及投资管理咨询业务的专业投资管理机构。首控基金始终坚持“价值投资”为理念，专注于教育领域股权投资，以金融为工具推动教育产业证券化，以教育为基础形成金融投资特色化，金融和教育双轮驱动，帮助有价值的成长型教育企业持续发展。目前，首控基金已发展成为国内知名的教育投资品牌，其分支机构遍布全国各地，含北京、上海、深圳、广州、重庆、昆明、无锡、郑州、南昌、烟台等。',
          image3: require('@/assets/images/about/image4-3.png'),
        },
        title4: require('@/assets/images/about/image5.png'),
        image4: require('@/assets/images/about/image5-1.png'),
      }
    },
    created() {
      this.back = this.$route.query.redirect;
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .about {
    width: 20rem;
    height: auto;
    background: #fff;
    img {
      display: block;
      &.title {
        width: 6.8rem;
        display: block;
        margin: auto;
        padding: 1rem 0;
      }
    }
    .intro {
      padding: 0 1rem 1rem 1rem;
      color: #333;
      line-height: 1.4rem;
      font-size: 0.75rem;
      text-indent: 2em;
    }
    .company_shareholder{
      padding: 0 1rem 1rem 1rem;
      .name{
        width: auto;
        margin-bottom: 0.6rem;
        img{
          height: 1.3rem;
        }
      }
      .content{
        font-size: 0.75rem;
        color: #666;
        line-height: 1.4rem;
        text-indent: 2em;
        margin-bottom: 1rem;
      }
    }
  }
</style>
