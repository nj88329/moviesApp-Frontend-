// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6R3wXPdw9sXkoej4Ndj7lbZqD1PurVSs",
  authDomain: "moviesapp-d0167.firebaseapp.com",
  projectId: "moviesapp-d0167",
  storageBucket: "moviesapp-d0167.appspot.com",
  messagingSenderId: "143961069808",
  appId: "1:143961069808:web:9599560afa0a99ff5d0a35",
  measurementId: "G-E37B4899HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export default onAuthStateChanged  