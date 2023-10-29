// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCga2TcMjch217vLOAsBbfaUkGpwEZ2m0M",
  authDomain: "website-d21af.firebaseapp.com",
  projectId: "website-d21af",
  storageBucket: "website-d21af.appspot.com",
  messagingSenderId: "699304178759",
  appId: "1:699304178759:web:9bfe5ed7720e44c6fd6d62",
  measurementId: "G-T67Z1S4ZWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);