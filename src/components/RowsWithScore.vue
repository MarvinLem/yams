<template>
  <div :class="'rows-with-score ' + color">
    <div class="category">
      <img class="image" v-if="image" :src="require('@/assets/' + image + '.png')"/>
      <p class="name">{{name}}</p>
    </div>
    <div class="score" :key="index + '' + score" v-for="(score, index) in potentialScores">
      <p class="number">{{score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RowsWithScore',
  props: {
    color: String,
    image: String, 
    name: String,
    scores: Array,
    potentialScores: Array
  },
  computed:{
    dicesSaved() {
      return this.$store.state.dicesSaved;
    },
    remaining() {
      return this.$store.state.remaining;
    },
  },
};
</script>

<style lang="scss" scoped>
  .rows-with-score{
    display: flex;
    width: calc(100% - 40px);
    margin-left: 20px;
    padding: 12px 0;
    border-bottom: 1px solid white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    .category{
      flex-basis: 120px;
      margin-right: auto;
      .image{
        margin-right: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: bottom;
      }
      .name{
        display: inline-block;
        width: 90px;
        margin: 0;
        font-size: 0.9em;
      }
    }
    .score{
      flex-basis: 50px;
      margin-left: 20px;
      .number{
        margin: 0;
        font-weight: bold;
        font-size: 1.1em;
        text-align: center;
      }
      &:last-of-type{
        margin-right: 20px;
      }
    }
    &.first-dark{
      border-top: 1px solid white;
    }
  }
</style>