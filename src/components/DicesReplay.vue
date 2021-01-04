<template>
  <div class="dices-replay">
    <Dice v-for="dice in dices" :key="dice.index" :number="dice" :showEmpty="showEmpty" :rolling="rolling"/>
  </div>
</template>

<script>
import Dice from '@/components/Dice.vue';

export default {
  name: 'DicesReplay',
  components: {
    Dice
  },
  props: {
    showEmpty: Boolean,
    rolling: Boolean,
  },
  computed: {
    dices () {
      return this.$store.state.dices
    },
  }
};
</script>

<style lang="scss" scoped>
  .dices-replay{
    display: flex;
    padding: 180px 0 20px;
    margin: 0 auto;
    width: 60%;
    justify-content: center;
  }
</style>