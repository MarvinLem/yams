<template>
  <div :key="key" class="dices-replay">
    <Dice v-for="(dice, index) in dices" :key="index + '-' + dice" :number="dice" :showEmpty="showEmpty" :rolling="rolling" state="replayable"/>
  </div>
</template>

<script>
import Dice from '@/components/Dice.vue';

export default {
  name: 'DicesReplay',
  components: {
    Dice
  },
  data () {
    return {
      key: 1
    }
  },
  props: {
    showEmpty: Boolean,
    rolling: Boolean,
  },
  computed: {
    dices () {
      return this.$store.state.dices
    },
  },
  watch: {
    dices () {
      this.key = Math.random(50);
    }
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