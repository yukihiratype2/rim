import { initializeApp } from 'firebase/app';
import FirebaseAuthStore from './auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8Kd0VCMFp1QTMBvhDEqSePHoFnye18m4',
  authDomain: 'rim-assetsmanager.firebaseapp.com',
  databaseURL: 'https://rim-assetsmanager-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'rim-assetsmanager',
  storageBucket: 'rim-assetsmanager.appspot.com',
  messagingSenderId: '53990639893',
  appId: '1:53990639893:web:90a3f8f137207e20de411c',
  measurementId: 'G-GVSN625LN3',
};

const firebase = initializeApp(firebaseConfig);

export const firebaseAuthStore = new FirebaseAuthStore(firebase);

export default firebase;
