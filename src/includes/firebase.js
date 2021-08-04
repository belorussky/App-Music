import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBP0_PC0FrDCQEqAab-zN7dtyoBEMMBhzc',
  authDomain: 'music-30f66.firebaseapp.com',
  projectId: 'music-30f66',
  storageBucket: 'music-30f66.appspot.com',
  messagingSenderId: '477450261176',
  appId: '1:477450261176:web:4375e1d5125360cf0f9a4d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};