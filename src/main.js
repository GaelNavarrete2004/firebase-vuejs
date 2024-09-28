import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHjmkgFmOSFkLKnokYnGAJsAEPL9D_HPU",
  authDomain: "fir-eec17.firebaseapp.com",
  projectId: "fir-eec17",
  storageBucket: "fir-eec17.appspot.com",
  messagingSenderId: "769947960603",
  appId: "1:769947960603:web:f23731ad2e3a8871fcffbe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')
