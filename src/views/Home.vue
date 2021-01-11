<template>
  <div class="home">
    <NameSelector/>
    <GameSelector :pseudo="pseudo"/>
  </div>
</template>

<script>
import GameSelector from '@/components/GameSelector.vue';
import NameSelector from '@/components/NameSelector.vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'Home',
  components: {
    GameSelector,
    NameSelector
  },
  data(){
    return {
      db: firebase.firestore()
    }
  },
  computed: {
    pseudo(){
      return this.$store.state.pseudo
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