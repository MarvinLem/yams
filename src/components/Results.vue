<template>
  <div class="results">
    <div class="ranking" v-for="(rank, index) in ranking" :key="index + '' + rank.name">
      <p v-if="rank != undefined" class="position">{{rank.position == 1 ? rank.position + 'er' : rank.position + 'eme'}}</p>
      <p v-if="rank != undefined" class="name">{{rank.name}}</p>
      <p v-if="rank != undefined" class="score">{{rank.score}} points</p>
    </div>
    <div class="start" @click="createNewGame()">
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
      let rankingArray = [];
      let scores = [...this.totalScores];

      let names = [];
      for(let d=0;d<this.players.length;d++){
        let name = this.players[d].name
        names.push(name)
      }

      let position = 1;

      let indexArray = [];

      for(let i=0;i<this.players.length;i++){
        if(scores.length > 0){
          let currentMax = Math.max(...scores);

          for(let c=0;c<scores.length;c++) {
            if(scores[c] == currentMax) {
              indexArray.push(c);
            }
          }

          for(let b=0;b<indexArray.length;b++){
            if(names[indexArray[b]] != undefined){
              let name = names[indexArray[b]];
              rankingArray.push({name: name,score: currentMax,position: position}); 
            }
          }

          for(let b=0;b<indexArray.length;b++){
            scores.splice(indexArray[b], 1, null); 
          }
          
          position++
          indexArray = [];
        }
      }
      return rankingArray;
    }
  },
};
</script>

<style lang="scss" scoped>
  .results{
    display: inline-block;
    flex-grow: 1;
    vertical-align: top;
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