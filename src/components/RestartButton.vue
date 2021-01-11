<template>
  <div @click="restartGame()" class="restart-button">
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'RestartButton',
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed:{
    players(){
      return this.$store.state.yams.players
    }
  },
  methods: {
    async restartGame(){
      let players = 1;
      this.players != undefined ? players = this.players.length : players = 1
      let defaultTotalScores = [];
      let defaultScoreRows = [
        {component: 'RowsWithScore',color: 'first-dark',name: 'Total des 1',image: 'dice-1', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 2',image: 'dice-2', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 3',image: 'dice-3', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 4',image: 'dice-4', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 5',image: 'dice-5', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 6',image: 'dice-6', scores: [], potentialScores: []},
        {component: 'RowsSixtyThree',color: 'dark'},
        {component: 'RowsWithScore',color: 'dark',name: 'Chance', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Carre', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Full', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Petite suite', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Grande suite', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Yam', scores: [], potentialScores: []},
      ];
      for(let i=0;i<players;i++){
        defaultScoreRows[i].scores.push(null);
        defaultScoreRows[i].potentialScores.push(null);
        defaultTotalScores.push(0);
      }
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        remaining: 3,
        dices: [1,1,1,1,1],
        dicesSaved: [],
        remainingTurn: 12,
        rolling: false,
        scoring: false,
        scoreRows: defaultScoreRows,
        totalScores: defaultTotalScores,
        isStarted: false,
        isEnded: false,
        currentPlayer: 1,
        currentPlayerId: this.players[0].id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .restart-button{
    display: inline-block;
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #2C2F33;
    cursor: pointer;
  }
</style>