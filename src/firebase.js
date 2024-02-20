import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCOZ1bURn9L6nahFctTRDYYagVWJtXycJk",
    authDomain: "evolving-ivers.firebaseapp.com",
    projectId: "evolving-ivers",
    storageBucket: "evolving-ivers.appspot.com",
    messagingSenderId: "68338598773",
    appId: "1:68338598773:web:4c6b7b06890ab601bbc93c",
    measurementId: "G-QSTDCW8T16"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
