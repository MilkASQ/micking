<template>
  <main>
    <div class="new_bonusList" v-if="list.length > 0">
      <ul>
        <li v-for="item in list">
          <div class="top">
            <div class="topLeft">
              <p class="name">{{item.name}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <div class="money">￥<em>{{item.money}}</em></div>
          </div>
          <div class="bottom">
            <span>{{item.invest_date}}</span><span>{{item.invest_money}}</span>
          </div>
          <router-link :to="{path:'/invest'}" class="btn">立即使用</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="empty card">暂无卡券信息</div>
      <router-link to="/" class="toScoresBtn">前往积分商城兑换</router-link>
    </div>

  </main>
</template>

<script>
  import heads from "../../vtops"

  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        list: [],
      }
    },
    created() {
    },
    mounted() {
      this.list.push({
          id: 1,
          name: '新手注册红包',
          money: 78,
          time: '有效期至2018-04-25',
          invest_date: '标的期限≥45天',
          invest_money: '投资金额≥20000.00元'
        },
        {
          id: 1, name: '新手注册红包',
          money: 118,
          time: '有效期至2018-04-25',
          invest_date: '标的期限≥45天',
          invest_money: '投资金额≥30000.00元'
        },
        {
          id: 1,
          name: '新手注册红包',
          money: 218,
          time: '有效期至2018-04-25',
          invest_date: '标的期限≥45天',
          invest_money: '投资金额≥50000.00元'
        });
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
