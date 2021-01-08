import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

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
