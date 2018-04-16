<template>
  <main>
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item v-for="item in banner" :key="item.id">
        <router-link :to="item.link"><img :src="item.url" :alt="item.title"></router-link>
      </mt-swipe-item>
    </mt-swipe>

    <section class="notice">
      <span>微金公告</span>
      <section class="scroll_list">
        <p v-for="item in notice">
          <router-link :to="item.url">{{item.title}}</router-link>
        </p>
      </section>
    </section>
    <section class="invest_list indexHtml">
      <div class="invest_item" v-for="item in invest">
        <router-link :to="{name:'INVEST_DETAIL',params:{id:item.id},query:{url:'/index'}}">
          <div class="name">
            <span>{{item.name}}</span>
            <span class="newer" v-if="item.is_newer">新手标</span>
          </div>
          <div class="number">{{item.number}}<span>%</span></div>
          <div class="center">
            <p>期限：{{item.days}}天</p>
            <mt-progress :value="item.percen" :bar-height="2"></mt-progress>
          </div>
          <div class="right">
            <span class="btn">立即投标</span>
          </div>
        </router-link>
      </div>
    </section>
    <vnav></vnav>
  </main>
</template>

<script>
  import navs from "@/components/navs";

  export default {
    name: '',
    data() {
      return {
        banner: [
          {id: 1, url: 'https://www.weijinzaixian.com/UF/Uploads/Ad/20170630180345453.jpg', link: '/', title: 'id1'},
          {id: 2, url: 'https://www.weijinzaixian.com/UF/Uploads/Ad/2017092718192447.jpg', link: '/', title: 'id2'},
          {id: 3, url: 'https://www.weijinzaixian.com/UF/Uploads/Ad/20171012112030394.jpg', link: '/', title: 'id3'}
        ],
        notice: [
          {id: 1, url: "/", title: '关于浦发银行系统升级的通知'},
          {id: 2, url: "/", title: '关于平台短信系统维护的公告'},
          {id: 3, url: "/", title: '关于第三方快捷支付上线公告'},
          {id: 4, url: "/", title: '关于浦发银行系统升级的通知'},
          {id: 5, url: "/", title: '关于平台短信系统维护的公告'},
          {id: 6, url: "/", title: '关于第三方快捷支付上线公告'},
        ],
        invest: [
          {id: 200, url: "/", name: '新手标 NO.3000', is_newer: true, number: 14.00, days: 28, percen: 20},
          {id: 201, url: "/", name: '微 · 车贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 202, url: "/", name: '微 · 车贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},
        ]
      }
    },
    created() {
      this.plus()
    },
    methods: {
      plus() {
        let i = {id: 207, url: "/", name: '微 · 车贷NO.4011', is_newer: false, number: 9.50, days: 179, percen: 90.50};
        this.invest.push(i);
      }
    },
    components: {
      'vnav': navs
    }
  }
</script>

<style lang="scss" scoped>
  .el-carousel {
    img {
      width: 20rem;
      height: 10.9375rem;
      display: block;
    }
  }
  .invest_list.indexHtml{
    margin-top: 0;
  }
  .notice {
    height: 2.2rem;
    line-height: 2.2rem;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-size: 0.75rem;
    span {
      background: #f60;
      color: #fff;
      float: left;
      width: 5rem;
      text-align: center;
    }
    .scroll_list {
      width: 15rem;
      height: 2.4rem;
      padding: 0 .5rem;
      float: left;
      overflow: hidden;
      p {
        width: 14rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          display: block;
        }
      }
    }
  }
</style>
