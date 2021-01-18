<template>
  <div class="yams">
    <Scoreboard/>
    <Board v-if="!isEnded && isStarted"/>
    <Menu v-if="!isStarted"/>
    <Results v-if="isEnded"/>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';
import Board from '@/components/Board.vue';
import Results from '@/components/Results.vue';
import Menu from '@/components/Menu.vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'Yams',
  components: {
    Scoreboard,
    Board,
    Results,
    Menu
  },
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    isEnded() {
      return this.$store.state.yams.isEnded;
    },
    isStarted() {
      return this.$store.state.yams.isStarted;
    },
    players(){
      return this.$store.state.yams.players;
    },
    totalScores(){
      return this.$store.state.yams.totalScores;
    },
    player(){
      return this.$store.state.player;
    }
  },
  async mounted(){
    const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
    const yams = await yamsCollection.get();
    this.$store.commit('updateYams', yams.data());

    const observer = yamsCollection.onSnapshot(async docSnapshot => {
      const yams = await yamsCollection.get();
      this.$store.commit('updateYams', yams.data());
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
    let player = this.players.map(function(player) { return player.id; }).indexOf(this.$session.get('id'));
    /*
    await yamsCollection.onDisconnect().update({
      
    });
    */
  }
};
</script>

<style lang="scss" scoped>
  .yams{
    background-color: #2C2F33;
    display: flex;
    width: calc(100vw - 24px);
    height: calc(100vh - 24px);
    padding: 12px;
  }
</style>