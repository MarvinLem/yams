import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolling: false,
    dices: [1,2,3,4,5],
    dicesSaved: [0,0,0,0,0],
    remaining: 3,
    remainingTurn: 12
  },
  mutations: {
    updateRolling(state, rolling){
      state.rolling = rolling
    },
    updateDices(state, dices){
      state.dices = dices
    },
    updateDicesSaved(state, dices){
      state.dicesSaved = dices
    },
    updateRemaining(state, remaining){
      state.remaining = remaining
    },
    updateRemainingTurn(state, remainingTurn){
      state.remainingTurn = remainingTurn
    },
  },
  actions: {
  },
  modules: {
  },
});
