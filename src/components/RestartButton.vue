<template>
  <div @click="createNewGame()" class="restart-button">
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