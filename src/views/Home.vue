<template>
  <div class="home">
    <NameSelector/>
    <GameSelector :pseudo="pseudo"/>
  </div>
</template>

<script>
import GameSelector from '@/components/GameSelector.vue';
import NameSelector from '@/components/NameSelector.vue';

export default {
  name: 'Home',
  components: {
    GameSelector,
    NameSelector
  },
  computed: {
    pseudo(){
      return this.$store.state.pseudo
    }
  }
};
</script>

<style lang="scss" scoped>
  .home{
    background-color: #2C2F33;
    width: 100vw;
    height: 100vh;
  }
</style>