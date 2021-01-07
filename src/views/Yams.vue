<template>
  <div class="yams">
    <Scoreboard/>
    <Board v-if="!isEnded"/>
    <Results v-else :winner="winner" :score="score"/>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';
import Board from '@/components/Board.vue';
import Results from '@/components/Results.vue';

export default {
  name: 'Yams',
  components: {
    Scoreboard,
    Board,
    Results
  },
  computed: {
    isEnded() {
      return this.$store.state.isEnded;
    },
    players(){
      return this.$store.state.players;
    },
    totalScores(){
      return this.$store.state.totalScores;
    },
    score(){
      return Math.max(...this.totalScores);
    },
    winner(){
      let index = this.totalScores.indexOf(this.score);
      return this.players[index].name;
    }
  }
};
</script>

<style lang="scss" scoped>
  .yams{
    background-color: #2C2F33;
    width: calc(100vw - 24px);
    height: calc(100vh - 24px);
    padding: 12px;
  }
</style>