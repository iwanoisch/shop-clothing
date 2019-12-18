import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


let firebaseConfig = {
    apiKey: "AIzaSyALy16En6lXPuU4HhZHRraDYAmi_e6R7lc",
    authDomain: "clothing-db-c4179.firebaseapp.com",
    databaseURL: "https://clothing-db-c4179.firebaseio.com",
    projectId: "clothing-db-c4179",
    storageBucket: "clothing-db-c4179.appspot.com",
    messagingSenderId: "641951906129",
    appId: "1:641951906129:web:b014e41cee7775d926bb70",
    measurementId: "G-2K0880VVYM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
