<template>
  <main>
    <section class="promote_data_bar">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tbody>
        <tr>
          <td width="33.3%">
            二级好友人数(人)<br><b>{{friend_list.length}}</b>
          </td>
          <td width="33.3%">
            累计贡献奖励(元)<br><b>0</b>
          </td>
        </tr>
        </tbody>
      </table>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="row_table small">
        <tbody>
        <tr class="a999 small">
          <td width="32.5%">用户</td>
          <td width="32.5%">注册时间</td>
          <td width="35%" align="right">贡献奖励（元）</td>
        </tr>
        <tr v-for="item in friend_list">
          <td>{{item.name}}</td>
          <td>{{item.time}}</td>
          <td>{{item.money}}</td>
        </tr>
        </tbody>
      </table>
    </section>
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
          {name: '171****0029', time: '2018-04-08', money: 0},
          {name: '171****0030', time: '2018-04-08', money: 0},
          {name: '171****0030', time: '2018-04-08', money: 0},
          {name: '171****0029', time: '2018-04-08', money: 0},
          {name: '171****0030', time: '2018-04-08', money: 0},
          {name: '171****0030', time: '2018-04-08', money: 0},
        ]
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .promote_data_bar {
    height: 3.6rem;
    background: #fff;
    font-size: 0.75rem;
    table {
      color: #666;
      td {
        padding: 0.4rem 0;
        line-height: 1.4rem;
        text-align: center;
        b {
          font-size: 0.875rem;
          color: #f60;
        }
      }
    }
  }

  .row_table {
    background: #fff;
    padding: 0 0.8rem;
    margin-top: 0.8rem;
    tr {
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
