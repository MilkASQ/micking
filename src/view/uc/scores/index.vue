<template>
  <main>
    <vhead title="积分商城" :url="{name:'UC'}" :rightUrl="{name:'UC_SCORES_LOG'}" status="true" rightTxt="积分明细"></vhead>
    <div class="myScores">
      <div class="top linearBackground">
        <div class="number">{{scores}}</div>
        <p class="txt">我的积分</p>
      </div>
      <div class="scoresProductList">
        <div class="title">可兑换商品</div>
        <ul>
          <li v-for="item in list">
            <div class="image" :class="{ type1: item.type === 1 , type2 : item.type === 2}">
              <em>{{item.money}}</em>{{ item.type === 1 ? '元' : '%' }}
            </div>
            <div class="name">{{item.name}}</div>
            <div class="need">{{item.need}}</div>
          </li>
        </ul>
      </div>
    </div>
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
        scores: 6299,
        list: [
          {
            id: 1,
            type: 1,
            money: 10,
            name: '10元投资红包',
            need: '10,000积分',
          },
          {
            id: 2,
            type: 1,
            money: 20,
            name: '20元投资红包',
            need: '20,000积分',
          },
          {
            id: 3,
            type: 1,
            money: 50,
            name: '50元投资红包',
            need: '50,000积分',
          },
          {
            id: 4,
            type: 1,
            money: 100,
            name: '100元投资红包',
            need: '100,000积分',
          },
          {
            id: 5,
            type: 2,
            money: 1,
            name: '1%加息券',
            need: '1,000积分',
          },
          {
            id: 4,
            type: 2,
            money: 100,
            name: '2%加息券',
            need: '20,000积分',
          }
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .myScores {
    overflow: hidden;
    background: #fff;
    .top {
      width: 20rem;
      padding: 2rem 0;
      text-align: center;
      .number {
        font-size: 1.8rem;
        color: #fff;
      }
      .txt {
        color: #fff;
        opacity: 0.7;
      }
    }
    .scoresProductList {
      overflow: hidden;
      .title {
        height: 2.8rem;
        line-height: 2.8375rem;
        border-bottom: 0.0625rem solid #eee;
        padding: 0 0.6rem;
      }
      ul {
        width: 20rem;
        li {
          width: 10rem;
          height: 11rem;
          float: left;
          border-right: 0.0625rem solid #eee;
          border-bottom: 0.0625rem solid #eee;
          text-align: center;
          &:nth-child(2n) {
            border-right: 0;
          }
          &:nth-child(5), &:nth-child(6) {
            border-bottom: 0;
          }
          .image {
            width: 6.5rem;
            height: 6.5rem;
            margin: 1rem auto 0;
            font-size: 0.75rem;
            color: #ea3925;
            text-align: center;
            em {
              font-size: 1.25rem;
            }
            &.type1 {
              background: url(../../../assets/images/icon_pack.png) no-repeat;
              background-size: 6.5rem;
              line-height: 5rem;
            }
            &.type2 {
              background: url(../../../assets/images/icon_puls.png) no-repeat;
              background-size: 6.5rem;
              line-height: 7.5rem;
              color: #fff;
              padding-left: 0.7rem;
            }
          }
          .name {
            font-size: 0.75rem;
            color: #333;
            line-height: 1rem;
          }
          .need {
            font-size: 1rem;
            color: #f90;
            line-height: 1.2rem;
          }
        }
      }
    }
  }
</style>
