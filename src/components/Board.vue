<template>
  <div class="board">
    <DicesSaved :showEmpty="true" :dices="[0,0,0,0,0]"/>
    <DicesReplay :rolling="rolling" :showEmpty="false"/>
    <DicesActions :rolling="rolling"/>
  </div>
</template>

<script>
import DicesSaved from '@/components/DicesSaved.vue';
import DicesReplay from '@/components/DicesReplay.vue';
import DicesActions from '@/components/DicesActions.vue';

export default {
  name: 'Board',
  components: {
    DicesSaved,
    DicesReplay,
    DicesActions
  },
  computed: {
    rolling () {
      return this.$store.state.rolling
    }
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