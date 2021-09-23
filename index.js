import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0Du1rXA7ZPpel-uFWrJpkcllVo_hry7c",
  authDomain: "cec1-3f282.firebaseapp.com",
  projectId: "cec1-3f282",
  storageBucket: "cec1-3f282.appspot.com",
  messagingSenderId: "75025864324",
  appId: "1:75025864324:web:1950160de3917d6b8b14d1",
  measurementId: "G-9F7NWP3ZLQ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

console.log("Firebase connected");
