import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "delaygram-e8b7e.firebaseapp.com",
  databaseURL: "https://delaygram-e8b7e.firebaseio.com",
  projectId: "delaygram-e8b7e",
  storageBucket: "delaygram-e8b7e.appspot.com",
  messagingSenderId: "1090657831436",
  appId: "1:1090657831436:web:00a11225c46f5e73"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database};