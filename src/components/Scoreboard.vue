<template>
  <div :key="key" class="scoreboard">
    <RemainingTurn/>
    <PlayersList :players="players" :currentPlayer="currentPlayer" />
    <component :is="row.component" v-for="(row,index) in rowsScore" :key="index + ' ' + row.name" :index="index" :color="row.color" :image="row.image" :name="row.name" :scores="row.scores" :potentialScores="row.potentialScores"/>
    <TotalScore :totalScores="totalScores"/>
  </div>
</template>

<script>
import RemainingTurn from '@/components/RemainingTurn.vue'
import PlayersList from '@/components/PlayersList.vue'
import RowsWithScore from '@/components/RowsWithScore.vue'
import RowsSixtyThree from '@/components/RowsSixtyThree.vue'
import TotalScore from '@/components/TotalScore.vue'

export default {
  name: 'Scoreboard',
  components: {
    RowsWithScore,
    RowsSixtyThree,
    RemainingTurn,
    PlayersList,
    TotalScore
  },
  data() {
    return{
      key: 2394,
    }
  },
  computed: {
    rowsScore() {
      return this.$store.state.scoreRows;
    },
    players() {
      return this.$store.state.players;
    },
    currentPlayer() {
      return this.$store.state.currentPlayer;
    },
    scoring() {
      return this.$store.state.scoring
    },
    totalScores(){
      return this.$store.state.totalScores
    }
  },
  watch: {
    scoring() {
      this.key = Math.random(5);
    }
  }
};
</script>

<style lang="scss" scoped>
  .scoreboard{
    display: inline-block;
    width: 25%;
    margin-right: 12px;
    height: calc(100vh - 24px);
    border-radius: 20px;
    background-color: #36393F;
  }
</style>