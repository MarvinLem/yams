<template>
  <div class="player">
    <p :class="currentPlayer ? 'name name--active' : 'name'">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    name: String,
    currentPlayer: Boolean
  },
};
</script>

<style lang="scss" scoped>
  .player{
    margin-left: 10px;
    flex-basis: 50px;
    margin-top: 10px;
    .name{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: white;
      font-size: 0.8em;
      &--active{
        color: goldenrod;
      }
    }
  }
</style>