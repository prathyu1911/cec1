import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
const firestore = getFirestore(app);

console.log("Firestore connected");

export async function onSubmit() {
  const data = new FormData(document.getElementById("login"));
  const username = data.get("uname");
  const password = data.get("psw");
  const admin = collection(firestore, "admin");
  const snapshot = await getDocs(admin);
  const usernames = snapshot.docs.map((doc) => doc.data());
  console.log(usernames);
  let flag = false;
  usernames.forEach((user) => {
    if (user["userid"] === username) {
      if (user["password"] === password) {
        console.log("Success");
        window.location.replace("ad1.html");
        flag = true;
        return;
      } else {
        console.log("Password Incorrect");
        flag = true;
        alert("Password Incorrect");
        return;
      }
    }
  });
  if (!flag) {
    console.log("User not found");
    alert("User not found");
  }
}
document.getElementById("submitbtn").addEventListener("click", onSubmit);
