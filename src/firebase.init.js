// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYx3aDIZMAbgrRlAT2GIxri5QlssRpUvw",
  authDomain: "dine-in-9ea28.firebaseapp.com",
  projectId: "dine-in-9ea28",
  storageBucket: "dine-in-9ea28.appspot.com",
  messagingSenderId: "318455303344",
  appId: "1:318455303344:web:f525656cd6447bba203f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth