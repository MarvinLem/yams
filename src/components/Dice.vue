<template>
  <div class="dice">
    <img ref="diceImage" v-if="number > 0" :src="require('@/assets/dice-' + number + '.png')">
    <div v-else-if="showEmpty == true" class="empty"></div>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  data() {
    return{
      changingNumber: 1,
      currentlyRolling: undefined,
    }
  },
  props: {
    number: Number,
    showEmpty: Boolean,
    rolling: Boolean
  },
  methods:{
    currentlyRoll(){
      this.changingNumber = Math.floor(Math.random() * Math.floor(6) + 1);
      this.$refs.diceImage.src = require("@/assets/dice-" + this.changingNumber + ".png");
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
    img{
      width: 100%;
    }
    .empty{
      width: 100%;
      height: 64px;
      background-color: #2C2F33;
      border-radius: 10px;
    }
  }
</style>