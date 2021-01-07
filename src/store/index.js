import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolling: false,
    scoring: false,
    isStarted: false,
    isEnded: false,
    players: [{name: 'Marvin'}],
    currentPlayer: 1,
    dices: [3,3,3,2,2],
    dicesSaved: [],
    remaining: 3,
    remainingTurn: 12,
    scoreRows: [
      {color: 'first-dark',name: 'Total des 1',image: 'dice-1', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Total des 2',image: 'dice-2', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Total des 3',image: 'dice-3', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Total des 4',image: 'dice-4', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Total des 5',image: 'dice-5', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Total des 6',image: 'dice-6', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Chance', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Carre', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Full', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Petite suite', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Grande suite', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
      {color: 'dark',name: 'Yam', scores: [undefined,undefined], potentialScores: [undefined,undefined]},
    ],
    totalScores: [0,0]
  },
  mutations: {
    updateRolling(state, rolling){
      state.rolling = rolling
    },
    updateScoring(state, scoring){
      state.scoring = scoring
    },
    updateIsStarted(state, isStarted){
      state.isStarted = isStarted
    },
    updateIsEnded(state, isEnded){
      state.isEnded = isEnded
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
    updateScores(state, scores){
      state.scores = scores
    },
    updatePotentialScores(state, potentialScores){
      state.potentialScores = potentialScores
    },
    updateScoreRows(state, scoreRows){
      state.scoreRows = scoreRows
    },
    updateCurrentPlayer(state, currentPlayer){
      state.currentPlayer = currentPlayer
    },
    updateTotalScores(state, totalScores){
      state.totalScores = totalScores
    },
  },
  actions: {
  },
  modules: {
  },
});
