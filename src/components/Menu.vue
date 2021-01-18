<template>
  <div class="menu">
    <div class="start" @click="createNewGame()">
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
};
</script>

<style lang="scss" scoped>
  .menu{
    display: inline-block;
    flex-grow: 1;
    vertical-align: top;
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