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
              <dt>待收本金(元)</dt>
              <dd>{{todo.principal}}</dd>
            </dl>
            <dl>
              <dt>待收利息(元)</dt>
              <dd>{{todo.profit}} </dd>
            </dl>
            <dl>
              <dt>状态</dt>
              <dd><span>{{todo.status}}</span></dd>
            </dl>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  import heads from "../../vtops"
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
            name: '新手标 NO.3000[转]',
            time: '2018-02-07 15:50:18',
            principal: 16000,
            profit: 256.60,
            status: '购买成功'
          },
          {
            id: 201,
            name: '新手标 NO.3001[转]',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            status: '购买成功'
          },
          {
            id: 200,
            name: '新手标 NO.3000[转]',
            time: '2018-02-07 15:50:18',
            principal: 6000,
            profit: 256.60,
            status: '购买成功'
          },
          {
            id: 201,
            name: '新手标 NO.3001[转]',
            time: '2018-02-07 15:59:18',
            principal: 15000,
            profit: 2006.60,
            status: '购买成功'
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
