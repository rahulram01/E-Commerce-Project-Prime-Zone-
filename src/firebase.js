import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgERY8i6WEaKLtZPstkgUNfVo99uZ99aQ',
  authDomain: 'prime-zone-41fbb.firebaseapp.com',
  projectId: 'prime-zone-41fbb',
  storageBucket: 'prime-zone-41fbb.appspot.com',
  messagingSenderId: '908451988157',
  appId: '1:908451988157:web:3a2a63e4229e43d876add4',
  measurementId: 'G-YZFCJ5MNG2',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
