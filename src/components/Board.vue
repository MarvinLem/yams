<template>
  <div class="board">
    <RemainingThrow/>
    <DicesSaved :showEmpty="true"/>
    <DicesReplay :rolling="rolling" :showEmpty="false"/>
    <CheckScoreboard v-if="remaining == 0"/>
    <DicesActions :rolling="rolling"/>
  </div>
</template>

<script>
import RemainingThrow from '@/components/RemainingThrow.vue';
import DicesSaved from '@/components/DicesSaved.vue';
import DicesReplay from '@/components/DicesReplay.vue';
import CheckScoreboard from '@/components/CheckScoreboard.vue';
import DicesActions from '@/components/DicesActions.vue';

export default {
  name: 'Board',
  components: {
    RemainingThrow,
    DicesSaved,
    DicesReplay,
    CheckScoreboard,
    DicesActions
  },
  computed: {
    rolling () {
      return this.$store.state.rolling
    },
    remaining () {
      return this.$store.state.remaining
    },
  }
};
</script>

<style lang="scss" scoped>
  .board{
    display: inline-block;
    vertical-align: top;
    width: calc(75% - 12px);
    height: calc(100vh - 24px);
    border-radius: 20px;
    background-color: #36393F;
  }
</style>