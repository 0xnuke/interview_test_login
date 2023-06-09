import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAFPszI-rzuql-kE-fGZeLNvqE6r9aR6KE",
    authDomain: "login-edbd8.firebaseapp.com",
    projectId: "login-edbd8",
    storageBucket: "login-edbd8.appspot.com",
    messagingSenderId: "639392265277",
    appId: "1:639392265277:web:99f6c9f14705a00edb2654",
    measurementId: "G-8EGPHG7TXK"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;