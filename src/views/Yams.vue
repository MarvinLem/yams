<template>
  <div class="yams">
    <Scoreboard/>
    <Board/>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';
import Board from '@/components/Board.vue';

export default {
  name: 'Yams',
  components: {
    Scoreboard,
    Board
  },
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