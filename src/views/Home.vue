<template>
  <div class="home">
    <GameSelector/>
  </div>
</template>

<script>
import GameSelector from '@/components/GameSelector.vue';

export default {
  name: 'Home',
  components: {
    GameSelector,
  },
};
</script>

<style lang="scss" scoped>
  .home{
    background-color: #2C2F33;
    width: 100vw;
    height: 100vh;
  }
</style>