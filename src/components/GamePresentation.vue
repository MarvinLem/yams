<template>
  <div class="game-presentation" @click="redirect(link)">
    <img class="image" :src="require('@/assets/' + image)"/>
    <h2 class="title">{{name}}</h2>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'GamePresentation',
  props: {
    name: String,
    image: String,
    link: String,
    pseudo: String
  },
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    players(){
      return this.$store.state.yams.players
    },
    currentPlayer(){
      return this.$store.state.yams.currentPlayer
    }
  },
  methods: {
    async redirect(link){
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      let newPlayer;
      let newCurrentPlayer;
      let uid = Math.floor(Math.random() * 10000000000);
      if(this.players) {
        newPlayer = this.players;
      } else {
        newPlayer = [];
        newPlayer.push({name: this.pseudo})
      }
      if(this.currentPlayer) {
        newCurrentPlayer = this.currentPlayer + 1;
      } else {
        newCurrentPlayer = 1;
      }
      newPlayer.push({id: uid, name: this.pseudo})

      this.$session.start();
      this.$session.set('id',uid);
      console.log(this.$session.get('id'));

      await yamsCollection.update({
        players: newPlayer,
        currentPlayer: newCurrentPlayer
      });
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