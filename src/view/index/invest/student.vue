<template>
  <main>
    <section class="invest_list">
      <div class="invest_item" v-for="item in invest">
          <router-link :to="item.url">
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
  </main>
</template>

<script>
  export default {
    data() {
      return {
        invest: [
          {id: 200, url: "/", name: '微 · 惠学贷NO.3000', is_newer: false, number: 14.00, days: 28, percen: 20},
          {id: 201, url: "/", name: '微 · 惠学贷NO.3006', is_newer: false, number: 13.50, days: 55, percen: 65.50},
          {id: 202, url: "/", name: '微 · 惠学贷NO.3007', is_newer: false, number: 14.50, days: 105, percen: 35.50},
        ]
      }
    },
    methods: {},
    components: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
