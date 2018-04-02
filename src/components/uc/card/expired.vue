<template>
  <main>
    <div class="new_bonusList" v-if="list.length > 0">
      <ul>
        <li class="over" v-for="item in list">
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
          <router-link :to="{path:'/invest'}" tag="span" class="btn">已过期</router-link>
        </li>
      </ul>
    </div>
    <div class="empty card" v-else>暂无卡券信息</div>
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

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
