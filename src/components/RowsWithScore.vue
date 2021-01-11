<template>
  <div :class="'rows-with-score ' + color">
    <div class="category">
      <img class="image" v-if="image" :src="require('@/assets/' + image + '.png')"/>
      <p class="name">{{name}}</p>
    </div>
    <div v-for="(player, index) in players.length" class="score" :key="index + '' + potentialScores[index]">
      <p v-if="scores[index] != undefined" class="number number--light">{{scores[index]}}</p>
      <p v-else @click="updateScore()" class="number">{{potentialScores[index]}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'RowsWithScore',
  props: {
    color: String,
    image: String, 
    name: String,
    scores: Array,
    potentialScores: Array,
    index: Number
  },
  data(){
    return{
      db: firebase.firestore()
    }
  },
  computed:{
    uid() {
      return this.$session.get('id');
    },
    dicesSaved() {
      return this.$store.state.yams.dicesSaved;
    },
    remaining() {
      return this.$store.state.yams.remaining;
    },
    remainingTurn(){
      return this.$store.state.yams.remainingTurn;
    },
    players(){
      return this.$store.state.yams.players;
    },
    scoring(){
      return this.$store.state.yams.scoring;
    },
    currentPlayer(){
      return this.$store.state.yams.currentPlayer;
    },
    currentPlayerId() {
      return this.$store.state.yams.currentPlayerId;
    },
    scoreRows(){
      return this.$store.state.yams.scoreRows;
    }
  },
  methods: {
    async updateScore(){
      if(this.currentPlayerId == this.uid){

        const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
        if(this.scoring == true){
          let newScoreRows = this.scoreRows;
          newScoreRows[this.index].scores[this.currentPlayer-1] = this.potentialScores[this.currentPlayer-1];
          for(let i=0;i<newScoreRows.length;i++){
            newScoreRows[i].potentialScores = [null,null];
          }
          await yamsCollection.update({
            remaining: 3,
            dices: this.dicesSaved,
            dicesSaved: [],
            scoring: false,
            scoreRows: newScoreRows
          });
          this.updateTotalScore();
          if(this.currentPlayer + 1 > this.players.length){
            await yamsCollection.update({
              currentPlayer: 1,
              currentPlayerId: this.players[0].id
            });
            this.remainingTurn > 1 ? 
            await yamsCollection.update({
              remainingTurn: this.remainingTurn - 1
            }) : 
            await yamsCollection.update({
              isEnded: true
            })
          } else {
            await yamsCollection.update({
              currentPlayer: this.currentPlayer + 1,
              currentPlayerId: this.players[this.currentPlayer].id
            });
          }
        }
      }
    },
    async updateTotalScore(){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      let newTotalScores = [];
      let sixtyThreeBonus = 0;
      let newTotalScore = 0;
      for(let c=0;c<this.players.length;c++){
        for(let i=0;i<this.scoreRows.length;i++){
          if(this.scoreRows[i].scores == undefined){

          } else if(this.scoreRows[i].scores[c] != undefined){
            newTotalScore += this.scoreRows[i].scores[c];
          }
        }
        for(let i=0;i<6;i++){
          if(this.scoreRows[i].scores[c] != undefined){
            sixtyThreeBonus += this.scoreRows[i].scores[c];
          }
        }
        if(sixtyThreeBonus >= 63){
          newTotalScore += 35;
        }
        newTotalScores.push(newTotalScore);
        newTotalScore = 0;
        sixtyThreeBonus = 0;
      }
      await yamsCollection.update({
        totalScores: newTotalScores
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .rows-with-score{
    display: flex;
    width: calc(100% - 40px);
    margin-left: 20px;
    padding: 10px 0;
    border-bottom: 1px solid white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    .category{
      flex-basis: 120px;
      margin-right: auto;
      .image{
        margin-right: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: bottom;
      }
      .name{
        display: inline-block;
        width: 90px;
        margin: 0;
        font-size: 0.9em;
      }
    }
    .score{
      flex-basis: 50px;
      margin-left: 20px;
      .number{
        cursor: pointer;
        margin: 0;
        font-weight: bold;
        font-size: 1em;
        text-align: center;
        opacity: 0.6;
      }
      .number--light{
        opacity: 1;
      }
      &:last-of-type{
        margin-right: 20px;
      }
    }
    &.first-dark{
      border-top: 1px solid white;
    }
  }
</style>