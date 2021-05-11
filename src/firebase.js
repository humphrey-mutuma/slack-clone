// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKYixC4WE8ytEycqQG02lyXZhBRCaNQIo",
  authDomain: "slack-clone-46400.firebaseapp.com",
  projectId: "slack-clone-46400",
  storageBucket: "slack-clone-46400.appspot.com",
  messagingSenderId: "962148919458",
  appId: "1:962148919458:web:74882870befcca66510ffb",
  measurementId: "G-MQJX4TVVDH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider  };
