import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCvNGVxOi2jCiBpL_gzNFZnKMK6-u7FsXw",
  authDomain: "sub-hackathon.firebaseapp.com",
  databaseURL: "https://sub-hackathon-default-rtdb.firebaseio.com",
  projectId: "sub-hackathon",
  storageBucket: "sub-hackathon.appspot.com",
  messagingSenderId: "155419562508",
  appId: "1:155419562508:web:f2b212984cd64cf09fd429",
  measurementId: "G-6XPDPB3BJJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); 