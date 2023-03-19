// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD36Ygr8e64c0q0MSJzUvxOTXYefCLRmEU",
  authDomain: "chat-app-fd7cd.firebaseapp.com",
  projectId: "chat-app-fd7cd",
  storageBucket: "chat-app-fd7cd.appspot.com",
  messagingSenderId: "804641616862",
  appId: "1:804641616862:web:f23dd93395959ed7f4234f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
