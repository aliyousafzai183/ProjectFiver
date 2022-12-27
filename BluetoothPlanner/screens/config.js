import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA2hNaxiRLYMnlWRY0A88rH_X3l0PFyls",
  authDomain: "mydb-64a17.firebaseapp.com",
  projectId: "mydb-64a17",
  storageBucket: "mydb-64a17.appspot.com",
  messagingSenderId: "195807171291",
  appId: "1:195807171291:web:051db2693be27ccfd8f2fe",
  measurementId: "G-6WDQ0L9HGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};