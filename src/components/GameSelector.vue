<template>
  <div class="game-selector">
    <GamePresentation name="Yam's" image=""></GamePresentation>
  </div>
</template>

<script>
import GamePresentation from "./GamePresentation.vue"

export default {
  name: 'GameSelector',
  components: { 
    GamePresentation 
  },
};
</script>

<style lang="scss" scoped>

</style>
