<template>
  <div v-if="pseudo && pseudo.length > 1 && pseudo.length <= 12" class="game-selector">
    <h1 class="title">Choissisez le jeu auquel vous voulez jouez</h1>
    <div class="game-container">
      <GamePresentation :pseudo="pseudo" name="Yam's" image="dice.png" link="yams"/>
    </div>
  </div>
</template>

<script>
import GamePresentation from "./GamePresentation.vue"

export default {
  name: 'GameSelector',
  components: { 
    GamePresentation 
  },
  props: {
    pseudo: String
  }
};
</script>

<style lang="scss" scoped>
  .game-selector{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    .title{
      color: white;
      font-size: 1.5em;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      margin-bottom: 40px;
      text-align: center;
    }
    .game-container{
      display: flex;
      justify-content: center;
    }
  }
</style>
