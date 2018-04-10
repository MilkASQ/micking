<template>
  <main>
    <div class="promoteDataBar">累计已发放奖励：<i>0</i>元</div>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="row_table small">
      <tbody>
      <tr class="a999 small">
        <td>奖励金额（元）</td>
        <td>奖励类型</td>
        <td>发放时间</td>
      </tr>
      <tr v-for="item in friend_list">
        <td>{{item.money}}</td>
        <td>{{item.type}}</td>
        <td>{{item.time}}</td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
  import heads from "@/components/vtops"
  import * as unit from "@/assets/js/unit"
  import {Toast} from 'mint-ui';
  import * as types from '@/store/type'


  export default {
    components: {
      "vhead": heads,
    },
    data() {
      return {
        friend_first: 3,
        friend_list:[
          {type: '171****0029', time: '2018-04-08', money: 0,},
          {type: '171****0030', time: '2018-04-08', money: 0,},
          {type: '171****0030', time: '2018-04-08', money: 0,},
        ]
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .promoteDataBar {
    width: 20rem;
    background: #fff;
    overflow: hidden;
    padding: 1rem;
    font-size: 0.75rem;
    i {
      font-size: 0.875rem;
      color: #f60;
      font-style: normal;
    }
  }

  .row_table {
    background: #fff;
    padding: 0 0.8rem;
    margin-top: 0.8rem;
    tr {
      font-size: 0.75rem;
      color: #333;
      td,th{
        &:last-child {
          text-align: right;
        }
        &:first-child {
          text-align: left;
        }
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
      td {
        border-bottom: 1px #ededed solid;
        padding: 0.5rem 0;
      }
    }
  }
</style>
