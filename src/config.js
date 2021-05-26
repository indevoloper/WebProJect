import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBxIhspJ4yPTkrOMWTaDjAv7zlPvtKYFJ4",
    authDomain: "react-auth-21afa.firebaseapp.com",
    projectId: "react-auth-21afa",
    storageBucket: "react-auth-21afa.appspot.com",
    messagingSenderId: "426552389772",
    appId: "1:426552389772:web:8f9266f35b0c8350f80ba9",
    measurementId: "G-SSQX57VD8C"
});

export default firebaseConfig;