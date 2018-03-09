import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/type'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      phone: '',
      password: ''
    },
    token: '',
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = ''
    },
    [types.USERINFO]: (state, data) => {
      state.user.phone = data.phone;
      state.user.password = data.password;
      localStorage.setItem("userInfo", JSON.stringify(data));
    },
    [types.USERINFOCLEAR]: (state) => {
      state.user.phone = '';
      state.user.password = '';
      localStorage.removeItem('userInfo');
    }
  }
})
