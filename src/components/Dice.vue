<template>
  <div v-if="number > 0" class="dice" @click="changeState()">
    <img ref="diceImage" :src="require('@/assets/dice-' + number + '.png')">
  </div>
  <div v-else-if="showEmpty == true" class="empty">
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'Dice',
  data() {
    return{
      db: firebase.firestore(),
      changingNumber: 1,
      currentlyRolling: undefined,
    }
  },
  props: {
    number: Number,
    showEmpty: Boolean,
    rolling: Boolean,
    state: String
  },
  computed: {
    remaining() {
      return this.$store.state.yams.remaining
    },
    dices() {
      return this.$store.state.yams.dices
    },
    savedDices(){
      return this.$store.state.yams.dicesSaved
    }
  },
  methods:{
    currentlyRoll(){
      this.changingNumber = Math.floor(Math.random() * Math.floor(6) + 1);
      if(this.$refs.diceImage){
        this.$refs.diceImage.src = require("@/assets/dice-" + this.changingNumber + ".png");
      }
    },
    async changeState(){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      if(this.state == "replayable" && this.rolling == false && this.remaining != 3){
        let ancientDices = [...this.dices];
        let savedDices = [...this.savedDices];
        
        let removedDice = ancientDices.splice(ancientDices.indexOf(this.number),1);

        savedDices.push(removedDice[0])

        await yamsCollection.update({
          dices: ancientDices,
          dicesSaved: savedDices,
        });
      } else if(this.state == "saved" && this.rolling == false && this.remaining != 0){
        let ancientDices = [...this.dices];
        let savedDices = [...this.savedDices];
        
        let removedDice = savedDices.splice(savedDices.indexOf(this.number),1);

        ancientDices.push(this.number);

        await yamsCollection.update({
          dices: ancientDices,
          dicesSaved: savedDices,
        });
      }
    }
  },
  watch: {
    rolling(){
      if(this.rolling == true){
        this.currentlyRolling = setInterval(() => {
          this.currentlyRoll()}, 100
        )
      } else {
        clearInterval(this.currentlyRolling)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .dice{
    display: inline-block;
    width: 64px;
    margin: 0 10px;
    transition: 0.3s;
    cursor: pointer;
    img{
      width: 100%;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  .empty{
      margin: 0 10px;
      width: 64px;
      height: 64px;
      background-color: #2C2F33;
      border-radius: 10px;
    }
</style>