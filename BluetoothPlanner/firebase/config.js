import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAA2hNaxiRLYMnlWRY0A88rH_X3l0PFyls",
  authDomain: "mydb-64a17.firebaseapp.com",
  projectId: "mydb-64a17",
  storageBucket: "mydb-64a17.appspot.com",
  messagingSenderId: "195807171291",
  appId: "1:195807171291:web:d435214c6c9ec6b0d8f2fe",
  measurementId: "G-NCZY62ZLDK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database


export {db};