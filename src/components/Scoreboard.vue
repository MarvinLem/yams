<template>
  <div class="scoreboard">
    <RemainingTurn/>
    <PlayersList names="[]" :numbersOfPlayers="2"/>
    <RowsWithScore style="" image="" name="" scores="" />
    <TotalScore totalScores=""/>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
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