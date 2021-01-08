<template>
  <div class="dices-actions">
    <div v-if="!rolling && dices.length > 0 && remaining > 0" class="button" @click="shakeDices()">Melanger</div>
    <div v-if="!rolling && remaining != 0 && dicesSaved.length == 5" class="button" @click="endSerie()">Terminer la série</div>
    <div v-if="rolling" class="button" @click="launchDices()">Lancer</div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'DicesActions',
  props: {
    rolling: Boolean
  },
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    dices () {
      return this.$store.state.yams.dices;
    },
    dicesSaved () {
      return this.$store.state.yams.dicesSaved;
    },
    remaining () {
      return this.$store.state.yams.remaining;
    },
    remainingTurn () {
      return this.$store.state.yams.remainingTurn;
    },
    scoreRows() {
      return this.$store.state.yams.scoreRows;
    },
    currentPlayer() {
      return this.$store.state.yams.currentPlayer;
    }
  },
  methods: {
    async shakeDices(){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        rolling: true
      });
    },
    async updateScoring() {
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        scoring: true
      });
    },
    async endSerie(){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        dicesSaved: this.dicesSaved.concat(this.dices),
        dices: [],
        remaining: 0
      });
      this.updatePotentialScores();
      this.updateScoring();
    },
    async launchDices(){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        rolling: false
      });
      let newDices = [];
      for(let i=0;i<this.dices.length;i++){
        newDices.push(Math.floor(Math.random() * Math.floor(6) + 1))
      }
      await yamsCollection.update({
        dices: newDices,
        remaining: this.remaining - 1
      });
      if(this.remaining == 0){
        await yamsCollection.update({
          dicesSaved: this.dicesSaved.concat(this.dices),
          dices: [],
          remaining: 0
        });
        this.updatePotentialScores(); 
        this.updateScoring();
      }
    },
    async updatePotentialScores(){
      let newScoreRows = [...this.scoreRows];
      //Update for 'Total Of'
      let score = 0;
      for(let c=1;c<=6;c++){
         for(let i=0;i<this.dicesSaved.length;i++){
          if(this.dicesSaved[i] == c) score += c
         }
         newScoreRows[c-1].potentialScores[this.currentPlayer - 1] = score;
         score = 0;
      }
      //Chance
      score = 0;
      for(let i=0;i<this.dicesSaved.length;i++){
        score += this.dicesSaved[i];
      }
      newScoreRows[7].potentialScores[this.currentPlayer - 1] = score;
      //Carre
      let sameNumber = 0;
      score = 0;
      for(let c=1;c<=6;c++){
        for(let i=0;i<this.dicesSaved.length;i++){
          if(this.dicesSaved[i] == c){
            sameNumber++
          }
        }
        if(sameNumber >= 4) {
          for(let b=0;b<this.dicesSaved.length;b++){
            score += this.dicesSaved[b];
          }
          newScoreRows[8].potentialScores[this.currentPlayer - 1] = score;
        }
        sameNumber = 0;
      }
      if(newScoreRows[8].potentialScores[this.currentPlayer - 1] == undefined) newScoreRows[8].potentialScores[this.currentPlayer - 1] = 0
      //Full
      sameNumber = 0;
      let sameFirstNumber = 0;
      let sameSecondNumber = 0;
      score = 0;
      for(let c=1;c<=6;c++){
        for(let i=0;i<this.dicesSaved.length;i++){
          if(this.dicesSaved[i] == c){
            sameNumber++
          }
        }
        if(sameNumber == 3) {
          sameFirstNumber = c;
        }
        if(sameNumber == 2) {
          sameSecondNumber = c;
        }
        sameNumber = 0;
      }
      if(sameFirstNumber != 0 && sameSecondNumber !=0){
        newScoreRows[9].potentialScores[this.currentPlayer - 1] = 3*sameFirstNumber + 2*sameSecondNumber;
      } else {
        newScoreRows[9].potentialScores[this.currentPlayer - 1] = score;
      }
      //Petite Suite
      score = 0;
      if(this.dicesSaved.includes(1) && this.dicesSaved.includes(2) && this.dicesSaved.includes(3) && this.dicesSaved.includes(4)){
        score = 15;
      } else if(this.dicesSaved.includes(2) && this.dicesSaved.includes(3) && this.dicesSaved.includes(4) && this.dicesSaved.includes(5)){
        score = 15;
      } else if(this.dicesSaved.includes(3) && this.dicesSaved.includes(4) && this.dicesSaved.includes(5) && this.dicesSaved.includes(6)){
        score = 15;
      }
      newScoreRows[10].potentialScores[this.currentPlayer - 1] = score;
      //Grande Suite
      score = 0;
      if(this.dicesSaved.includes(1) && this.dicesSaved.includes(2) && this.dicesSaved.includes(3) && this.dicesSaved.includes(4) && this.dicesSaved.includes(5)){
        score = 30;
      } else if(this.dicesSaved.includes(2) && this.dicesSaved.includes(3) && this.dicesSaved.includes(4) && this.dicesSaved.includes(5) && this.dicesSaved.includes(6)){
        score = 30;
      }
      newScoreRows[11].potentialScores[this.currentPlayer - 1] = score;
      //Yam
      sameNumber = 0;
      score = 0;
      for(let c=1;c<=6;c++){
        for(let i=0;i<this.dicesSaved.length;i++){
          if(this.dicesSaved[i] == c){
            sameNumber++
          }
        }
        if(sameNumber >= 5) {
          newScoreRows[12].potentialScores[this.currentPlayer - 1] = 50;
        }
        sameNumber = 0;
      }
      if(newScoreRows[12].potentialScores[this.currentPlayer - 1] == undefined) newScoreRows[12].potentialScores[this.currentPlayer - 1] = 0;
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        scoreRows: newScoreRows
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .dices-actions{
    display: flex;
    padding: 90px 0 0;
    margin: 0 auto;
    width: 60%;
    justify-content: center;
    .button{
      color: white;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      background-color: #2C2F33;
      padding: 20px;
      border-radius: 30px;
      text-transform: uppercase;
      font-size: 0.9em;
      letter-spacing: 1px;
      margin: 0 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
</style>