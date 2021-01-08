<template>
  <div class="yams">
    <Scoreboard/>
    <Board v-if="!isEnded && isStarted"/>
    <Menu v-if="!isStarted"/>
    <Results v-if="isEnded"/>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';
import Board from '@/components/Board.vue';
import Results from '@/components/Results.vue';
import Menu from '@/components/Menu.vue';

export default {
  name: 'Yams',
  components: {
    Scoreboard,
    Board,
    Results,
    Menu
  },
  computed: {
    isEnded() {
      return this.$store.state.isEnded;
    },
    isStarted() {
      return this.$store.state.isStarted;
    },
    players(){
      return this.$store.state.players;
    },
    totalScores(){
      return this.$store.state.totalScores;
    },
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