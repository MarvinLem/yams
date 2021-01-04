<template>
  <div class="dices-saved">
    <Dice v-for="dice in dices" :key="dice.index" :number="dice" :showEmpty="showEmpty"/>
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
    dices: Array,
    showEmpty: Boolean
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