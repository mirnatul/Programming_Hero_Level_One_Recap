// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdjOYMITNft-6sg8BRGX7za_p2r2-LxdM",
  authDomain: "email-pass-test.firebaseapp.com",
  projectId: "email-pass-test",
  storageBucket: "email-pass-test.firebasestorage.app",
  messagingSenderId: "66330172801",
  appId: "1:66330172801:web:8def598de080a6a8939c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);