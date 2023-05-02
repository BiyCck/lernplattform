// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh_L-7ZFMmX8iOSIZ1mrf13AD4i0XcdbQ",
  authDomain: "lernplattform-hsba.firebaseapp.com",
  projectId: "lernplattform-hsba",
  storageBucket: "lernplattform-hsba.appspot.com",
  messagingSenderId: "912118752994",
  appId: "1:912118752994:web:8e359e59de4253f61b60bb",
  measurementId: "G-2YP09ESS86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export { auth , db};