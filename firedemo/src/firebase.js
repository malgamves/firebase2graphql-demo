import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "Key"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');