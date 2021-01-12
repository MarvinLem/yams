<template>
  <div class="results">
    <div class="ranking" v-for="(rank, index) in ranking" :key="index + '' + rank.name">
      <p class="position">{{index == 0 ? index+1 + 'er' : index+1 + 'eme'}}</p>
      <p class="name">{{rank.name}}</p>
      <p class="score">{{rank.score}} points</p>
    </div>
    <div class="start" @click="restartGame()">
      <img class="image" :src="require('@/assets/dice.png')"/>
      <h2 class="title">Refaire une partie</h2>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'Results',
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    players(){
      return this.$store.state.yams.players
    },
    totalScores(){
      return this.$store.state.yams.totalScores;
    },
    ranking(){
      /*
      let checkDraw = 0;
      for(let i=0;i<this.totalScores.length;i++){
        if(this.totalScores[i] == this.score){
          checkDraw++
        };
      }
      if(checkDraw > 1){
        return;
      } else {
        let index = this.totalScores.indexOf(this.score);
        return this.players[index].name;
      }
      */
      let rankingArray = [];
      let scores = [...this.totalScores];
      for(let i=0;i<this.players.length;i++){
        let currentMax = Math.max(...scores);
        let index = scores.indexOf(currentMax);
        let name = this.players[index].name
        rankingArray.push({name: name,score: currentMax});
        scores.splice(index, 1, -1);
      }
      return rankingArray;
    }
  },
  methods: {
    async restartGame(){
      let players = this.players.length;
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
  .results{
    display: inline-block;
    vertical-align: top;
    width: calc(75% - 12px);
    height: calc(100vh - 24px);
    border-radius: 20px;
    background-color: #36393F;
    position: relative;
    .text{
      color: white;
      font-size: 1.5em;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      text-align: center;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    .start{
      width: 200px;
      height: 200px;
      margin: 0 20px;
      border-radius: 20px;
      background-color: #2C2F33;
      position: absolute;
      top: 55%;
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
    .ranking{
      width: 200px;
      height: 200px;
      display: inline-block;
      margin: 20px;
      border-radius: 20px;
      background-color: #2C2F33;
      color: white;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      text-align: center;
      .position{
        font-size: 2em;
        margin: 50px 0 30px;
      }
      .name{
        font-size: 1.5em;
        margin: 0 0 10px 0;
      }
      .score{
        font-size: 1.2em;
        margin: 0;
      }
    }
  }
</style>