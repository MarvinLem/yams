<template>
  <div class="scoreboard">
    <RemainingTurn/>
    <PlayersList :players="players" />
    <RowsWithScore v-for="(row,index) in rowsScore" :key="index + ' ' + row.name" :color="row.color" :image="row.image" :name="row.name" :scores="row.score" :potentialScores="row.potentialScores"/>
    <TotalScore :totalScores="[122,210]"/>
  </div>
</template>

<script>
import RemainingTurn from '@/components/RemainingTurn.vue'
import PlayersList from '@/components/PlayersList.vue'
import RowsWithScore from '@/components/RowsWithScore.vue'
import TotalScore from '@/components/TotalScore.vue'

export default {
  name: 'Scoreboard',
  components: {
    RowsWithScore,
    RemainingTurn,
    PlayersList,
    TotalScore
  },
  computed: {
    rowsScore() {
      return this.$store.state.scoreRows;
    },
    players() {
      return this.$store.state.players;
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