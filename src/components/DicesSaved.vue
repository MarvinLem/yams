<template>
  <div class="dices-saved">
    <Dice v-for="(dice, index) in dicesSaved" :key="index + '-' + dice" :number="dice" :showEmpty="showEmpty" state="saved"/>
  </div>
</template>

<script>
import Dice from '@/components/Dice.vue';

export default {
  name: 'DicesSaved',
  components: {
    Dice
  },
  props: {
    showEmpty: Boolean
  },
  computed: {
    dicesSaved() {
      return this.$store.state.dicesSaved
    },
  }
};
</script>

<style lang="scss" scoped>
  .dices-saved{
    display: flex;
    padding: 30px;
    margin: 0 auto;
    width: 60%;
    justify-content: center;
  }
</style>