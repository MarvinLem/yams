<template>
  <div class="remaining-throw">
    {{remaining}} lancers restants
  </div>
</template>

<script>
export default {
  name: 'RemainingThrow',
  computed: {
    remaining () {
      return this.$store.state.remaining;
    },
  }
};
</script>

<style lang="scss" scoped>
  .remaining-throw{
    display: inline-block;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    position: absolute;
    right: 30px;
    top: 30px;
  }
</style>