import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolling: false,
    dices: [1,2,3,4,5]
  },
  mutations: {
    updateRolling(state, rolling){
      state.rolling = rolling
    },
    updateDices(state, dices){
      state.dices = dices
    },

  },
  actions: {
  },
  modules: {
  },
});
