<template>
  <div class="players-list">
    <Player :currentPlayer="currentPlayer == index+1 ? true : false" :key="player + index" v-for="(player, index) in players" :name="player.name"/>
  </div>
</template>

<script>
import Player from '@/components/Player.vue';

export default {
  name: 'PlayersList',
  components: {
    Player
  },
  props: {
    players: Array,
    currentPlayer: Number
  },
};
</script>

<style lang="scss" scoped>
  .players-list{
    display: flex;
    padding: 10px 0;
    margin-right: 40px;
    min-height: 55px;
    width: calc(100% - 40px);
    justify-content: flex-end;
  }
</style>