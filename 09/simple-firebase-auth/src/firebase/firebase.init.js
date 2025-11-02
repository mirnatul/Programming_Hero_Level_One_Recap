// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC3oqAFpowtFCxds_GPZafQECrJM1dzeI",
    authDomain: "simple-firebase-auth-cced0.firebaseapp.com",
    projectId: "simple-firebase-auth-cced0",
    storageBucket: "simple-firebase-auth-cced0.firebasestorage.app",
    messagingSenderId: "87677665933",
    appId: "1:87677665933:web:59243662f66ce8835e98c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Don't paste it