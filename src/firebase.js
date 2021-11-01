import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDQCLW3M92l8kNS-fgwq3WLQH4HEQyW14g",
  authDomain: "clever-to-do-list-69168.firebaseapp.com",
  projectId: "clever-to-do-list-69168",
  storageBucket: "clever-to-do-list-69168.appspot.com",
  messagingSenderId: "551496646726",
  appId: "1:551496646726:web:7788200f0121abd60a0a47",
  measurementId: "G-G5E6JYMY2S"
});

export const auth = app.auth();
export default app;