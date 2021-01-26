import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7UXc7nOKhnC67hoiwcxdDpFnUsf_ml4I",
    authDomain: "wri-messenger.firebaseapp.com",
    projectId: "wri-messenger",
    storageBucket: "wri-messenger.appspot.com",
    messagingSenderId: "621625836469",
    appId: "1:621625836469:web:c354c023a9c9d6b45b4ffc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;