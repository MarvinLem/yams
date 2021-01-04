<template>
  <div class="game-presentation" @click="redirect(link)">
    <img class="image" :src="require('@/assets/' + image)"/>
    <h2 class="title">{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'GamePresentation',
  props: {
    name: String,
    image: String,
    link: String
  },
  methods: {
    redirect(link){
      this.$router.push(link);
    }
  }
};
</script>

<style lang="scss" scoped>
 .game-presentation{
   width: 200px;
   height: 200px;
   margin: 0 20px;
   border-radius: 20px;
   background-color: #36393F;
   position: relative;
   cursor: pointer;
   transition: 0.3s;
   .title{
     color: white;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     position: absolute;
     bottom: 0;
     left: 50%;
     transform: translateX(-50%);
   }
   .image{
     display: block;
     width: 80%;
     margin: 0 auto;
     padding: 20px 0;
   }
   &:hover{
     transform: scale(1.1);
   }
 }
</style>