import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCRKMznTQTkKkVIhkUWZzXrLm3Lc_-u5U",
  authDomain: "ecommerce-shop-b205f.firebaseapp.com",
  projectId: "ecommerce-shop-b205f",
  storageBucket: "ecommerce-shop-b205f.appspot.com",
  messagingSenderId: "690843227988",
  appId: "1:690843227988:web:67b8941d3541bcd19a9ac1",
  measurementId: "G-RY77N2NQ7P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;