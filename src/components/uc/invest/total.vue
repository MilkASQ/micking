<template>
  <main>
    <section class="investedList">
      <ul>
        <li v-for="todo in data">
          <div class="top">
            <div class="name">{{todo.name}}</div>
            <div class="time">{{todo.time}}</div>
          </div>
          <div class="center">
            <dl>
              <dt>投资本金(元)</dt>
              <dd>{{todo.principal}}</dd>
            </dl>
            <dl>
              <dt>预期收益(元)</dt>
              <dd>{{todo.profit}} </dd>
            </dl>
            <dl>
              <dt>状态</dt>
              <dd><span>{{todo.status}}</span></dd>
            </dl>
          </div>
          <div class="bottom">
            <router-link to=""  tag="span" class="fl a666" v-if="todo.contract.status == 1">{{todo.contract.name}}</router-link>
            <router-link :to="todo.contract.url" class="btn fl over" v-else>{{todo.contract.name}}</router-link>
            <router-link :to="todo.debt.url" class="btn fr" v-if="todo.debt.status == 1">{{todo.debt.name}}</router-link>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  import head from "../../head.vue"
  import nav from "../../nav.vue"
  import * as types from '../../../store/type'

  export default {
    components: {
      "v-head": head,
      "v-nav": nav
    },
    data() {
      return {
        data: [
          {
            id: 200,
            name: '新手标 NO.3000',
            time: '2018-02-07 15:50:18',
            principal: 6000,
            profit: 256.60,
            status: '投资成功',
            contract: {
              status: 1,
              name: '合同生产中',
              url: '/uc/agreement/index/1024'
            },
            debt: {
              status: 1,
              name: '申请转让',
              url: '/uc/debt/1024'
            }
          },
          {
            id: 201,
            name: '新手标 NO.3001',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            status: '投资成功',
            contract: {
              status: 1,
              name: '合同生产中',
              url: '/uc/agreement/index/1024'
            },
            debt: {
              status: 1,
              name: '申请转让',
              url: '/uc/debt/1024'
            }
          },
          {
            id: 200,
            name: '新手标 NO.3000',
            time: '2018-02-07 15:50:18',
            principal: 6000,
            profit: 256.60,
            status: '还款中',
            contract: {
              status: 1,
              name: '合同生产中',
              url: '/uc/agreement/index/1024'
            },
            debt: {
              status: 1,
              name: '申请转让',
              url: '/uc/debt/1024'
            }
          },
          {
            id: 201,
            name: '新手标 NO.3001',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            status: '还款中',
            contract: {
              status: 1,
              name: '合同生产中',
              url: '/uc/agreement/index/1024'
            },
            debt: {
              status: 1,
              name: '申请转让',
              url: '/uc/debt/1024'
            }
          },
        ]
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
