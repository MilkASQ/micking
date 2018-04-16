<template>
  <section class="publicBottomPopup">
    <div class="background" v-show="cardStatus.status === true"></div>
    <div class="inset" :class="{'int':cardStatus.status === true,'out':cardStatus.status === false}">
      <div class="title">
        <button type="button" class="closeBtn" @click="notUseCard">不使用</button>
        <div class="name">卡券包</div>
        <button type="button" class="confirmBtn" @click="changeCardStatus">完成</button>
      </div>
      <div class="content">
        <div class="new_bonusList">
          <ul>
            <li v-for="item in newList">
              <div class="top">
                <div class="topLeft">
                  <p class="name">{{item.name}}</p>
                  <p class="time">有效期至{{item.time}}</p>
                </div>
                <div class="money">￥<em>{{item.money}}</em></div>
              </div>
              <div class="bottom">
                <span>{{item.invest_date}}</span><span>{{item.invest_money}}</span>
              </div>
              <input type="radio" name="card" :value="item.id" class="checkRadio" v-model="cardStatus.id"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['cardList', 'config'],
    data() {
      return {
        newList: [],
        cardStatus: {  // 使用卡券
          status: false,
          selected: false,
          id: null,
          name: null
        },
      }
    },
    created() {},
    watch: {},
    computed: {
      changeData() {
        this.newList = this.cardList;
        this.cardStatus = this.config;
      }
    },
    mounted() {
      this.changeData
    },
    methods: {
      changeCardStatus() {
        this.cardStatus.status = !this.cardStatus.status;
      },
      notUseCard() {
        this.changeCardStatus();
        this.cardStatus.status = false;
        this.cardStatus.selected = false;
        this.cardStatus.id = null;
        this.cardStatus.name = null;
      }
    },
  }
</script>
