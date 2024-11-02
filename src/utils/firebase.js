// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kkqF4h_3IoerkGsp9m-eviLfpbxJE7o",
  authDomain: "dineon-10as11.firebaseapp.com",
  projectId: "dineon-10as11",
  storageBucket: "dineon-10as11.firebasestorage.app",
  messagingSenderId: "47249412526",
  appId: "1:47249412526:web:43b9a9a4488948caa1f83f",
  measurementId: "G-T4E1XMGY05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();