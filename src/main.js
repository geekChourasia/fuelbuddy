import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {

    apiKey: "AIzaSyBF2oT1kb8vw9P7fbhOPGaACYA8vjTWqb8",
    authDomain: "login-page-firebase-7b946.firebaseapp.com",
    projectId: "login-page-firebase-7b946",
    storageBucket: "login-page-firebase-7b946.appspot.com",
    messagingSenderId: "887871221976",
    appId: "1:887871221976:web:924e5f2bc08223e857e7ad",
    measurementId: "G-06Y238VY3P"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')