import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCLxgGW59oLEi5hHZrVNydmBMky7BfhEcg",
    authDomain: "liverpool-ff725.firebaseapp.com",
    databaseURL: "https://liverpool-ff725.firebaseio.com",
    projectId: "liverpool-ff725",
    storageBucket: "",
    messagingSenderId: "396459141771",
    appId: "1:396459141771:web:e5d403a6c2f2cc1b"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')

export {
    firebase,
    firebaseMatches
}