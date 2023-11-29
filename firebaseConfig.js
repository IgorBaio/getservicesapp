// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAq-_OLZQ52-jTD9fa3DBoRhWualXoTUdE",
  authDomain: "getservicesapp-66d27.firebaseapp.com",
  projectId: "getservicesapp-66d27",
  storageBucket: "getservicesapp-66d27.appspot.com",
  messagingSenderId: "314883633893",
  appId: "1:314883633893:web:5d7ef441afb64def1e5a0c",
  measurementId: "G-JFLZY6VN0V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);