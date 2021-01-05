<template>
  <div class="remaining-turn">
    <span class="turn">Tour</span>
    <span class="number">{{12 - remainingTurn + 1}}/12</span>
  </div>
</template>

<script>
export default {
  name: 'RemainingTurn',
  computed: {
    remainingTurn () {
      return this.$store.state.remainingTurn;
    },
  }
};
</script>

<style lang="scss" scoped>
  .remaining-turn{
    display: inline-block;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    position: absolute;
    left: 30px;
    top: 30px;
    .turn{
      width: 100%;
      display: block;
      font-size: 1.2em;
    }
    .number{
      font-size: 1.5em;
    }
  }
</style>