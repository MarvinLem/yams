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
  computed:{
    dicesSaved() {
      return this.$store.state.dicesSaved;
    },
    remaining() {
      return this.$store.state.remaining;
    },
    remainingTurn(){
      return this.$store.state.remainingTurn;
    },
    players(){
      return this.$store.state.players;
    },
    scoring(){
      return this.$store.state.scoring;
    },
    currentPlayer(){
      return this.$store.state.currentPlayer;
    },
    scoreRows(){
      return this.$store.state.scoreRows;
    }
  },
  methods: {
    updateScore(){
      if(this.scoring == true){
        let newScoreRows = this.scoreRows;
        newScoreRows[this.index].scores[this.currentPlayer-1] = this.potentialScores[this.currentPlayer-1];
        for(let i=0;i<newScoreRows.length;i++){
          newScoreRows[i].potentialScores = [undefined,undefined];
        }
        this.$store.commit('updateScores', newScoreRows);
        this.$store.commit('updateScoring', false);
        this.$store.commit('updateDices', this.dicesSaved);
        this.$store.commit('updateDicesSaved', []);
        this.$store.commit('updateRemaining', 3);
        this.updateTotalScore();
        if(this.currentPlayer + 1 > this.players.length){
          this.$store.commit('updateCurrentPlayer', 1);
          this.remainingTurn > 1 ? this.$store.commit('updateRemainingTurn', this.remainingTurn - 1) : this.$store.commit('updateIsEnded', true)
        } else {
          this.$store.commit('updateCurrentPlayer', this.currentPlayer + 1);
        }
      }
    },
    updateTotalScore(){
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
      this.$store.commit('updateTotalScores', newTotalScores);
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