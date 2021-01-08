<template>
  <div :class="'rows-sixty-three ' + color">
    <div class="row">
      <div class="category">
        <p class="name">Subtotal</p>
      </div>
      <div v-for="(score, index) in scoresFromTotal" class="score" :key="index + '1+35'">
        <p class="number number--light">{{score}}/63</p>
      </div>
    </div>
    <div class="row">
      <div class="category">
        <p class="name">+35 Bonus</p>
      </div>
      <div v-for="(score, index) in scoresFromTotal" class="score" :key="index + '2+35'">
        <p class="number number--light">{{score >= 63 ? '+35' : '0'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RowsSixtyThree',
  props: {
    color: String,
  },
  computed:{
    players(){
      return this.$store.state.yams.players;
    },
    scoreRows(){
      return this.$store.state.yams.scoreRows;
    },
    scoresFromTotal(){
      let TotalScores = [];
      let newTotalScore = 0;
      for(let c=0;c<this.players.length;c++){
        for(let i=0;i<6;i++){
          if(this.scoreRows[i].scores[c] != undefined){
            newTotalScore += this.scoreRows[i].scores[c];
          }
        }
        TotalScores.push(newTotalScore);
        newTotalScore = 0
      }
      return TotalScores;
    }
  },
};
</script>

<style lang="scss" scoped>
  .rows-sixty-three{
    display: flex;
    width: calc(100% - 40px);
    margin-left: 20px;
    flex-wrap: wrap;
    .row{
    display: flex;
    flex-basis: 100%;
    width: 100%;
    padding: 10px 0;
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
          font-size: 1em;
          text-align: center;
          opacity: 0.6;
        }
        .number--light{
          opacity: 1;
        }
        &:last-of-type{
          margin-right: 20px;
        }
      }
      &:first-of-type{
        border-bottom: 1px dotted white;
      }
    }
  }
</style>