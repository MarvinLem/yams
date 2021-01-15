<template>
  <div class="menu">
    <div class="start" @click="startGame()">
      <img class="image" :src="require('@/assets/dice.png')"/>
      <h2 class="title">Demarrer la partie</h2>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'Menu',
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    players(){
      return this.$store.state.yams.players
    }
  },
  methods: {
    async startGame(){
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

      for (let c=0;c<defaultScoreRows.length;c++){
        for(let i=0;i<players;i++){
          if(defaultScoreRows[c].scores != undefined && defaultScoreRows[c].potentialScores != undefined){
            defaultScoreRows[c].scores.push(null);
            defaultScoreRows[c].potentialScores.push(null);
          }
        }
      }
      for(let i=0;i<players;i++){
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
        isStarted: true,
        isEnded: false,
        currentPlayer: 1,
        currentPlayerId: this.players[0].id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .menu{
    display: inline-block;
    vertical-align: top;
    width: calc(75% - 12px);
    height: calc(100vh - 24px);
    border-radius: 20px;
    background-color: #36393F;
    position: relative;
    .start{
      width: 200px;
      height: 200px;
      margin: 0 20px;
      border-radius: 20px;
      background-color: #2C2F33;
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      cursor: pointer;
      transition: 0.3s;
      .title{
        margin: 0;
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-align: center;
        transition: 0.3s;
      }
      .image{
        display: block;
        width: 80%;
        margin: 0 auto;
        padding: 10px 0 0;
      }
      &:hover{
        width: 220px;
        height: 220px;
        .title{
          font-size: 1.6em;
        }
      }
    }
  }
</style>