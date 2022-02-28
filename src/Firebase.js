// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHwvb7r0ukPLYJpX0K1T8yjXPggq_X_Ag",
    authDomain: "solo-project-cb178.firebaseapp.com",
    projectId: "solo-project-cb178",
    storageBucket: "solo-project-cb178.appspot.com",
    messagingSenderId: "277990611168",
    appId: "1:277990611168:web:8b8d70b1e3cc0334381885"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)