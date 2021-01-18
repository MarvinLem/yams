<template>
  <div class="board">
    <RemainingThrow/>
    <DicesSaved :showEmpty="true"/>
    <DicesReplay :rolling="rolling" :showEmpty="false"/>
    <CheckScoreboard v-if="remaining == 0"/>
    <DicesActions :rolling="rolling"/>
    <RestartButton/>
    <PlayersInLobby/>
  </div>
</template>

<script>
import RemainingThrow from '@/components/RemainingThrow.vue';
import DicesSaved from '@/components/DicesSaved.vue';
import DicesReplay from '@/components/DicesReplay.vue';
import CheckScoreboard from '@/components/CheckScoreboard.vue';
import DicesActions from '@/components/DicesActions.vue';
import RestartButton from '@/components/RestartButton.vue';
import PlayersInLobby from '@/components/PlayersInLobby.vue';

export default {
  name: 'Board',
  components: {
    RemainingThrow,
    DicesSaved,
    DicesReplay,
    CheckScoreboard,
    DicesActions,
    RestartButton,
    PlayersInLobby
  },
  computed: {
    rolling () {
      return this.$store.state.yams.rolling
    },
    remaining () {
      return this.$store.state.yams.remaining
    },
  },
};
</script>

<style lang="scss" scoped>
  .board{
    display: inline-block;
    flex-grow: 1;
    vertical-align: top;
    width: auto;
    height: calc(100vh - 24px);
    border-radius: 20px;
    background-color: #36393F;
    position: relative;
  }
</style>