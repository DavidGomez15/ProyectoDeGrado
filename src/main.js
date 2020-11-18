import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
vue.use(VueTextareaAutosize);


import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNKAN8GZLLnJxynNysdkaByqplyUTMWKA",
  authDomain: "vue-calendario-a9ba4.firebaseapp.com",
  databaseURL: "https://vue-calendario-a9ba4.firebaseio.com",
  projectId: "vue-calendario-a9ba4",
  storageBucket: "vue-calendario-a9ba4.appspot.com",
  messagingSenderId: "241059298478",
  appId: "1:241059298478:web:430a675d1bc85485db813f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
