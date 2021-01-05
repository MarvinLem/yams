<template>
  <div class="check-scoreboard">
    <p class="title">Choissisez dans quelle catégorie vous mettez votre jet de dés !</p>
  </div>
</template>

<script>
export default {
  name: 'CheckScoreboard',
};
</script>

<style lang="scss" scoped>
  .check-scoreboard{
    width: 100%;
    .title{
      color: white;
      font-size: 1.5em;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      margin-bottom: 40px;
      text-align: center;
    }
  }
</style>
