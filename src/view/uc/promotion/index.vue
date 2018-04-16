<template>
  <main>
    <vhead title="邀请有礼" :url="{name:'UC'}" rightUrl="" status="false" rightTxt=""></vhead>
    <section class="promotion-header">
      <div class="money">
        <em>{{totalMoney}}</em>
        <p>累计获得邀请奖励(元）</p>
      </div>
      <router-link :to="{name:'UC_REWARD_FIRST'}" class="rewardBtn">奖励详情</router-link>
    </section>
    <router-link :to="{name:'UC_FRIEND_FIRST'}" class="promotion-friend">
      <span>邀请好友数</span>
      <i class="iconFont right">&#xe611;</i>
      <span class="txt red" v-if="friends > 0">{{friends}}位好友</span>
      <span class="txt" v-else>暂无好友应邀，试试发个邀请吧</span>
    </router-link>
    <ul class="promotion-rules">
      <li>
        <router-link :to="{name:'RULES',query: {redirect: '/uc/promotion/index',type:23}}">
          <i class="icon rules"></i>
          <p>邀请规则</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <i class="icon packer"></i>
          <p>发红包</p>
        </router-link>
      </li>
    </ul>
    <share :config="config"></share>
    <div class="recommend_ways">
      <router-link to="" tag="span" class="submit promotion-now">立即邀请</router-link>
      <router-link to="" tag="span" class="erweima"><i></i>二维码邀请</router-link>
    </div>
  </main>
</template>

<script>
  import Vue from "vue"
  import heads from "@/components/vtops"
  import * as unit from "@/assets/js/unit"

  /*分享*/
  import 'social-share.js/dist/js/social-share.min.js'
  import 'social-share.js/dist/css/share.min.css'
  import Share from 'vue-social-share'

  Vue.use(Share);

  export default {
    components: {
      "vhead": heads
    },
    data() {
      return {
        totalMoney: 2000,
        friends: 0,
        config: {
          url: 'https://www.baidu.com', // 网址，默认使用 window.location.href
//          source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
          title: '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
          description: '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
          image: '', // 图片, 默认取网页中第一个img标签
          sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban','tencent'], // 启用的站点
//          disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
//          wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
//          wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
        }
      }
    },
    created() {
      document.body.setAttribute("class", "white");
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "white");
    },
    mounted() {

    },
    methods: {}
  }
</script>
<style src=""></style>
<style lang="scss" scoped>
  .promotion-header {
    width: 20rem;
    height: 6.8rem;
    overflow: hidden;
    background: -webkit-linear-gradient(left bottom, #f90, #f60);
    position: relative;
    .money {
      padding-top: 1.8rem;
      color: #fff;
      em {
        font-size: 1.8rem;
        text-align: center;
        display: block;
        font-style: normal;
      }
      p {
        font-size: 0.75rem;
        opacity: 0.6;
        text-align: center;
        line-height: 1rem;
      }
    }
    .rewardBtn {
      width: 4.4rem;
      height: 1.6rem;
      line-height: 1.6rem;
      position: absolute;
      text-align: center;
      font-size: 0.7rem;
      color: #fff;
      right: 0;
      top: 3.4rem;
      background: rgba(255, 255, 255, 0.4);
      border-top-left-radius: 0.8rem;
      -webkit-border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
      -webkit-border-bottom-left-radius: 0.8rem;
    }
  }

  .promotion-friend {
    width: 20rem;
    padding: 0 1rem;
    height: 2.6rem;
    line-height: 2.5375rem;
    border-bottom: 0.0625rem solid #eee;
    display: block;
    overflow: hidden;
    background: #fff;
    .txt {
      float: right;
      color: #999;
      font-size: 0.75rem;
      &.red {
        font-size: 0.875rem;
        color: #f60;
      }
    }
    .iconFont {
      font-size: 0.75rem;
      color: #999;
      float: right;
      vertical-align: middle;
    }
  }

  .promotion-rules {
    background: #fff;
    width: 20rem;
    height: auto;
    overflow: hidden;
    li {
      width: 10rem;
      height: 10rem;
      float: left;
      a, span {
        display: block;
        height: 10rem;
        padding: 1.4rem 1rem 0 1rem;
        text-align: center;
        font-size: 0.875rem;
        color: #333;
        i.icon {
          width: 6rem;
          height: 6rem;
          display: block;
          margin: auto;
          &.rules {
            background: url("../../../assets/images/friend.jpg") no-repeat;
            background-size: 6rem 6rem;
          }
          &.packer {
            background: url("../../../assets/images/redpacker.jpg") no-repeat;
            background-size: 6rem 6rem;
          }
        }
      }
    }
  }

  .recommend_ways {
    width: 18rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    text-align: center;
    line-height: 2.2rem;
    .submit {
      width: 18rem;
      height: 2.2rem;
      display: block;
    }
    .erweima {
      color: #999;
      display: block;
      i {
        padding-left: 1rem;
        background: url("../../../assets/images/icon_erweima.png") no-repeat center left;
        background-size: 0.9rem;
        font-style: normal;
      }
    }
  }

  /*.recommend_newBox{width:100%;  height:100%; position:fixed; top:0; left:0; z-index:100; display: none;}
    .recommend_newBox .background{width:100%;  height:100%; background:rgba(0,0,0,0.75);}
    .recommend_newBox .insetBox{width:100%; position:absolute; bottom:-100%; left:0; background:#fff;}
    .recommend_newBox .insetBox ul{padding:1rem 0 0 0; text-align: center;}
    .recommend_newBox .insetBox li{width:25%; float:left; padding:0 0 0.75rem 0; position:relative;}
    .recommend_newBox .insetBox li .image{width:3rem; height:3rem; margin:auto; display:block;}
    .recommend_newBox .insetBox li .image img{width:3rem; display: block;}
    .recommend_newBox .insetBox li .txt{height:1.2rem; line-height:1.2rem; color:#333; margin:0.3rem 0 0 0; font-size:12px; text-align: center;}
    .recommend_newBox .insetBox li .copybtn{width:100%; height:100%; display:block; position:absolute; top:0; left:0; opacity:0.001;}
    .promoteDataBar{ width: 20rem; background: #fff; overflow: hidden; padding: 1rem; font-size: 0.75rem;}
    .promoteDataBar i{font-size: 0.875rem; color: #f60; font-style: normal;}
    .promotionPackets{width: 20rem; height: auto; overflow: hidden;}
    .promotionPackets .title{padding: 0.6rem; overflow: hidden; line-height: 1rem; font-size: 0.75rem;}
    .promotionPackets .selectContent{width: 20rem; height: auto;}
    .promotionPackets .selectContent ul{width: 20rem; height: auto; background: #fff; border-top: 1px solid #eee;}
    .promotionPackets .selectContent li{ padding: 0 1rem; height: 2.8rem; line-height: 2.8rem; font-size: 0.875rem; position: relative; border-bottom: 1px solid #eee;}
    .promotionPackets .selectContent li label{display: block; height: 2.8rem;}
    .promotionPackets .selectContent li label input[type=checkbox]{ -webkit-appearance: none; -moz-appearance: none; appearance: none;
      width: 0.8rem; height: 0.8rem; border:0.125rem solid #f60; border-radius: 1rem; overflow: hidden; display: block; float: left; margin: 1rem 0.5rem 0 0;
    }
    .promotionPackets .selectContent li label input[type=checkbox]:disabled{ border-color: #eee;}
    .promotionPackets .selectContent li label input[type=checkbox]:checked{ border:0; background: url(../images/ucpromote/icon-yes.png) no-repeat; background-size: 0.8rem;}
    .promotionPackets .selectContent li .sendPackets{  width: 5rem; height: 1.6rem; position: absolute; top: 0.6rem; right: 1rem; display: block; text-align: center;
      background: -webkit-linear-gradient(left bottom, #ff8b00 , #ff5200);
      border-radius: 1.8rem; color: #fff; float: right;
      box-shadow: 0 0.125rem 0.5rem rgba(255,86,0,0.4);
    }
    .promotionPackets .selectContent li .sendPackets.dis{ color: #fff; background: #febf8c; }
    .promotionPackets .submitLine{ padding: 1rem;}*/
</style>
