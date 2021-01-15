import Vue from 'vue';
import Vuex from 'vuex';
import VueSession from 'vue-session';

Vue.use(Vuex);
Vue.use(VueSession);

export default new Vuex.Store({
  state: {
    yams: {},
    pseudo: ''
  },
  mutations: {
    updatePseudo(state, pseudo){
      state.pseudo = pseudo
    },
    updateYams(state, yams){
      state.yams = yams
    },
    updateRolling(state, rolling){
      state.yams.rolling = rolling
    },
    updateScoring(state, scoring){
      state.yams.scoring = scoring
    },
    updateIsStarted(state, isStarted){
      state.yams.isStarted = isStarted
    },
    updateIsEnded(state, isEnded){
      state.yams.isEnded = isEnded
    },
    updateDices(state, dices){
      state.yams.dices = dices
    },
    updateDicesSaved(state, dices){
      state.yams.dicesSaved = dices
    },
    updateRemaining(state, remaining){
      state.yams.remaining = remaining
    },
    updateRemainingTurn(state, remainingTurn){
      state.yams.remainingTurn = remainingTurn
    },
    updateScores(state, scores){
      state.yams.scores = scores
    },
    updatePotentialScores(state, potentialScores){
      state.yams.potentialScores = potentialScores
    },
    updateScoreRows(state, scoreRows){
      state.yams.scoreRows = scoreRows
    },
    updateCurrentPlayer(state, currentPlayer){
      state.yams.currentPlayer = currentPlayer
    },
    updateTotalScores(state, totalScores){
      state.yams.totalScores = totalScores
    },
  },
  actions: {
  },
  modules: {
  },
});
