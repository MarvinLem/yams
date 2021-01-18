<template>
  <div class="players-in-lobby">
    <p class="text">Joueurs connectés :</p>
    <p class="name" :key="player.name" v-for="(player,index) in playersInLobby">{{index == 0 ? player.name : ', ' + player.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'PlayersInLobby',
  computed:{
    playersInLobby(){
      return this.$store.state.yams.playersInLobby
    }
  },
};
</script>

<style lang="scss" scoped>
  .players-in-lobby{
    display: inline-block;
    position: absolute;
    left: 30px;
    bottom: 30px;
    .name,.text{
      display: inline-block;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: white;
      font-size: 0.6em;
    }
    .text{
      margin-right: 5px;
    }
  }
</style>