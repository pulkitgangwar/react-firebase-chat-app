import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD_r4RXg5QjsCk_igU1MrTGkXcvy4VLgTk",
  authDomain: "react-chat-app-59357.firebaseapp.com",
  projectId: "react-chat-app-59357",
  storageBucket: "react-chat-app-59357.appspot.com",
  messagingSenderId: "638968271262",
  appId: "1:638968271262:web:3d1dc1fc45e4d1e5c9468f",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
