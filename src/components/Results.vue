<template>
  <div class="results">
    <p class="text">{{winner}} remporte la partie avec {{score}} points !!!</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    winner: String,
    score: Number
  }
};
</script>

<style lang="scss" scoped>
  .results{
    display: inline-block;
    vertical-align: top;
    width: calc(75% - 12px);
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
      top: 45%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }
</style>