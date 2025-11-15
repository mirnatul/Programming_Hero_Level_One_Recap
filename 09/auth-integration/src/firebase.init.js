// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6QF6ZVkUfb7sPBn9OaW1EjbIFoOVwQrw",
  authDomain: "github-email-pass-auth.firebaseapp.com",
  projectId: "github-email-pass-auth",
  storageBucket: "github-email-pass-auth.firebasestorage.app",
  messagingSenderId: "661716646458",
  appId: "1:661716646458:web:b76e063ab5230c9260d303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);