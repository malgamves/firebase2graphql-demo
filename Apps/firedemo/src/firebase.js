import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDx6YCpRw3YRCBBn8aXaP3gEyg5JWF8uPM",
    authDomain: "fir-vue-94919.firebaseapp.com",
    databaseURL: "https://fir-vue-94919.firebaseio.com",
    projectId: "fir-vue-94919",
    storageBucket: "",
    messagingSenderId: "865318825386"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');