import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolling: false,
    players: [{name: 'Marvin'},{name: 'Autre'}],
    currentPlayer: 1,
    dices: [1,2,3,4,5],
    dicesSaved: [],
    remaining: 3,
    remainingTurn: 12,
    scoreRows: [
      {color: 'first-dark',name: 'Total des 1',image: 'dice-1', scores: [], potentialScores: []},
      {color: 'dark',name: 'Total des 2',image: 'dice-2', scores: [], potentialScores: []},
      {color: 'dark',name: 'Total des 3',image: 'dice-3', scores: [], potentialScores: []},
      {color: 'dark',name: 'Total des 4',image: 'dice-4', scores: [], potentialScores: []},
      {color: 'dark',name: 'Total des 5',image: 'dice-5', scores: [], potentialScores: []},
      {color: 'dark',name: 'Total des 6',image: 'dice-6', scores: [], potentialScores: []},
      {color: 'dark',name: 'Chance', scores: [], potentialScores: []},
      {color: 'dark',name: 'Carre', scores: [], potentialScores: []},
      {color: 'dark',name: 'Full', scores: [], potentialScores: []},
      {color: 'dark',name: 'Petite suite', scores: [], potentialScores: []},
      {color: 'dark',name: 'Grande suite', scores: [], potentialScores: []},
      {color: 'dark',name: 'Yam', scores: [], potentialScores: []},
    ]
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
    updatePotentialScores(state, potentialScores){
      state.potentialScores = potentialScores
    },
  },
  actions: {
  },
  modules: {
  },
});
