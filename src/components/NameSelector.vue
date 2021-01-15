<template>
  <div class="name-selector">
    <h1 class="title">Choisissez votre pseudo</h1>
    <input @keyup="updatePseudo()" v-model="pseudo" class="input" type="text" minlength="1" maxlength="12">
  </div>
</template>

<script>
export default {
  name: 'NameSelector',
  data() {
    return{
      pseudo: undefined
    }
  },
  methods: {
    updatePseudo() {
      this.$store.commit('updatePseudo', this.pseudo);
    }
  }
};
</script>

<style lang="scss" scoped>
  .name-selector{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    .title{
      font-size: 1.5em;
      margin-bottom: 40px;
      text-align: center;
    }
    .input{
      font-size: 1.3em;
      width: calc(100% - 10px);
      color: white;
      padding: 10px 5px;
      background-color: transparent;
      border: 3px solid white;
      border-radius: 5px;
    }
  }
</style>
