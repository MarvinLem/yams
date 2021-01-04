<template>
  <div class="dices-actions">
    <div v-if="!rolling && dices.length > 0 && remaining > 0" class="button" @click="shakeDices()">Melanger</div>
    <div v-if="!rolling" class="button" @click="endSerie()">Terminer la série</div>
    <div v-if="rolling" class="button" @click="launchDices()">Lancer</div>
  </div>
</template>

<script>
export default {
  name: 'DicesActions',
  props: {
    rolling: Boolean
  },
  computed: {
    dices () {
      return this.$store.state.dices
    },
    remaining () {
      return this.$store.state.remaining
    }
  },
  methods: {
    shakeDices(){
      this.$store.commit('updateRolling', true);
    },
    endSerie(){
      this.$store.commit('updateRemaining', 3);
    },
    launchDices(){
      this.$store.commit('updateRolling', false);
      let newDices = [];
      for(let i=0;i<this.dices.length;i++){
        newDices.push(Math.floor(Math.random() * Math.floor(6) + 1))
      }
      this.$store.commit('updateDices', newDices);
      this.$store.commit('updateRemaining', this.remaining - 1);
    },
  }
};
</script>

<style lang="scss" scoped>
  .dices-actions{
    display: flex;
    padding: 90px 0 0;
    margin: 0 auto;
    width: 60%;
    justify-content: center;
    .button{
      color: white;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      background-color: #2C2F33;
      padding: 20px;
      border-radius: 30px;
      text-transform: uppercase;
      font-size: 0.9em;
      letter-spacing: 1px;
      margin: 0 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
</style>