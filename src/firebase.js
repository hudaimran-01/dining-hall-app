import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// This config came from Firebase website (Step 2)
// You copied it when you registered your web app
const firebaseConfig = {
  apiKey: "AIzaSyD8m4CkWLbSHxm7_mM1dZz86RVqws0OQmY",
  authDomain: "protothon-ffd1d.firebaseapp.com",
  projectId: "protothon-ffd1d",
  storageBucket: "protothon-ffd1d.firebasestorage.app",
  messagingSenderId: "393520975290",
  appId: "1:393520975290:web:fdf367f22a90592dbda183",
  measurementId: "G-ED7758W6SZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);