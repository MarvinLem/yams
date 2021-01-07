<template>
  <div class="menu">
    <div class="start" @click="startGame()">
      <img class="image" :src="require('@/assets/dice.png')"/>
      <h2 class="title">Demarrer la partie</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    players(){
      return this.$store.state.players
    }
  },
  methods: {
    startGame(){
      let players = this.players.length;
      let defaultTotalScores = [];
      let defaultScoreRows = [
        {color: 'first-dark',name: 'Total des 1',image: 'dice-1', scores: [], potentialScores: []},
        {color: 'dark',name: 'Total des 2',image: 'dice-2', scores: [], potentialScores: []},
        {color: 'dark',name: 'Total des 3',image: 'dice-3', scores: [], potentialScores: []},
        {color: 'dark',name: 'Total des 4',image: 'dice-4', scores: [], potentialScores: []},
        {color: 'dark',name: 'Total des 5',image: 'dice-5', scores: [], potentialScores: []},
        {color: 'dark',name: 'Total des 6',image: 'dice-6', scores: [], potentialScores: []},
        {color: 'dark',name: 'Chance', scores: [], potentialScores: []},
        {color: 'dark',name: 'Carre', scores: [], potentialScores: []},
        {color: 'dark',name: 'Full', scores: [], potentialScores: []},
        {color: 'dark',name: 'Petite suite', scores: [], potentialScores: []},
        {color: 'dark',name: 'Grande suite', scores: [], potentialScores: []},
        {color: 'dark',name: 'Yam', scores: [], potentialScores: []},
      ];
      for(let i=0;i<players;i++){
        defaultScoreRows[i].scores.push(undefined);
        defaultScoreRows[i].potentialScores.push(undefined);
        defaultTotalScores.push(0);
      }
      this.$store.commit('updateRemaining', 3);
      this.$store.commit('updateRemainingTurn', 12);
      this.$store.commit('updateScoreRows', defaultScoreRows)
      this.$store.commit('updateTotalScores', defaultTotalScores)
      this.$store.commit('updateIsStarted', true);
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