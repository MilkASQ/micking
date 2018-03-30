<template>
  <main>
    <section class="investedList">
      <ul>
        <li v-for="todo in data">
          <div class="top">
            <div class="name">{{todo.name}}</div>
            <div class="time">{{todo.numbers}}</div>
          </div>
          <div class="center">
            <dl>
              <dt>待收本金(元)</dt>
              <dd>{{todo.principal}}</dd>
            </dl>
            <dl>
              <dt>待收利息(元)</dt>
              <dd>{{todo.profit}} </dd>
            </dl>
            <dl>
              <dt>加息奖励(元)</dt>
              <dd>{{todo.increase}}</dd>
            </dl>
          </div>
          <div class="bottom">
            <router-link to="" tag="span" class="fl a666">{{todo.time}}</router-link>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  import head from "../../heads"
  import * as types from '../../../store/type'

  export default {
    components: {
      "vhead": heads,
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
            increase: 6.60,
            numbers: '第一期',
          },
          {
            id: 201,
            name: '新手标 NO.3001',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            increase: 166.60,
            numbers: '第一期'
          },
          {
            id: 200,
            name: '新手标 NO.3000',
            time: '2018-02-07 15:50:18',
            principal: 6000,
            profit: 256.60,
            increase: 16.60,
            numbers: '第二期',
          },
          {
            id: 201,
            name: '新手标 NO.3001',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            increase: 166.60,
            numbers: '第三期'
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
