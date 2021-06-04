import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDGgM3doFJprDs0Pb9F7UGgZ-1-mQasz7c",
    authDomain: "webproject-a855d.firebaseapp.com",
    projectId: "webproject-a855d",
    storageBucket: "webproject-a855d.appspot.com",
    messagingSenderId: "428839609247",
    appId: "1:428839609247:web:a29693f8988921c7fed3aa",
    measurementId: "G-CH4RFTD97R"
});

export default firebaseConfig;