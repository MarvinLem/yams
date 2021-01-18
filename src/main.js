import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    async createNewGame(){
      let players = 1;
      this.$store.state.yams.playersInLobby != undefined ? players = this.$store.state.yams.playersInLobby.length : players = 1;
      let defaultTotalScores = [];
      let defaultScoreRows = [
        {component: 'RowsWithScore',color: 'first-dark',name: 'Total des 1',image: 'dice-1', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 2',image: 'dice-2', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 3',image: 'dice-3', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 4',image: 'dice-4', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 5',image: 'dice-5', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Total des 6',image: 'dice-6', scores: [], potentialScores: []},
        {component: 'RowsSixtyThree',color: 'dark'},
        {component: 'RowsWithScore',color: 'dark',name: 'Chance', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Carre', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Full', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Petite suite', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Grande suite', scores: [], potentialScores: []},
        {component: 'RowsWithScore',color: 'dark',name: 'Yam', scores: [], potentialScores: []},
      ];
      for (let c=0;c<defaultScoreRows.length;c++){
        for(let i=0;i<players;i++){
          if(defaultScoreRows[c].scores != undefined && defaultScoreRows[c].potentialScores != undefined){
            defaultScoreRows[c].scores.push(null);
            defaultScoreRows[c].potentialScores.push(null);
          }
        }
      }
      for(let i=0;i<players;i++){
        defaultTotalScores.push(0);
      }
      const yamsCollection = this.db.collection('yams').doc('09G7eSiV0rWqoPR0gsNW');
      await yamsCollection.update({
        remaining: 3,
        dices: [1,1,1,1,1],
        dicesSaved: [],
        remainingTurn: 12,
        rolling: false,
        scoring: false,
        scoreRows: defaultScoreRows,
        totalScores: defaultTotalScores,
        isStarted: true,
        isEnded: false,
        currentPlayer: 1,
        players: this.$store.state.yams.playersInLobby,
        currentPlayerId:  this.$store.state.yams.playersInLobby[0].id
      });
    }
  }
})

const config = {
  apiKey: "AIzaSyCQHHxCJGXD8NL-qs999lWjbNGSa_uts0s",
  authDomain: "yams-a168a.firebaseapp.com",
  projectId: "yams-a168a",
  storageBucket: "yams-a168a.appspot.com",
  messagingSenderId: "41825693848",
  appId: "1:41825693848:web:26a3527fe476fc14dd60ed"
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
