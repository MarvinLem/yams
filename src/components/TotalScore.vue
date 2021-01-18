<template>
  <div class="total-score">
    <div class="category">
      <p class="total">Total</p>
    </div>
    <div class="score" :key="index + '' + score" v-for="(score, index) in totalScores">
      <p class="number">{{score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalScore',
  props: {
    totalScores: Array
  }
};
</script>

<style lang="scss" scoped>
  .total-score{
    display: flex;
    width: calc(100% - 40px);
    margin-left: 20px;
    padding: 16px 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    .category{
      flex-basis: 120px;
      margin-right: auto;
      .total{
        display: inline-block;
        width: 90px;
        margin: 0;
        font-size: 1.25em;
        font-weight: bold;
      }
    }
    .score{
      flex-basis: 50px;
      margin-left: 10px;
      .number{
        margin: 0;
        font-weight: bold;
        font-size: 1.4em;
        text-align: center;
      }
      &:last-of-type{
        margin-right: 20px;
      }
    }
  }
</style>