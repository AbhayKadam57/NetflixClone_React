// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgXfFnAFPO6uniY4UaUiT77dJNCBOSBgQ",
  authDomain: "netflixclonedatabase.firebaseapp.com",
  projectId: "netflixclonedatabase",
  storageBucket: "netflixclonedatabase.appspot.com",
  messagingSenderId: "598400636284",
  appId: "1:598400636284:web:5712658aadff470c9080f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
