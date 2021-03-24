import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpeRIUOF6igCV85QJl7wQ9-5tH10Di1BQ",
    authDomain: "e-webapp-1beea.firebaseapp.com",
    projectId: "e-webapp-1beea",
    storageBucket: "e-webapp-1beea.appspot.com",
    messagingSenderId: "229714741289",
    appId: "1:229714741289:web:f0200e3608f48cbdb73438",
    measurementId: "G-4K5DB4XF36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };