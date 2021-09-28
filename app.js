import{initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
//import{get} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

import{
  getFirestore,
  collection,
  getDocs,
}from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyB0Du1rXA7ZPpel-uFWrJpkcllVo_hry7c",
  authDomain: "cec1-3f282.firebaseapp.com",
  databaseURL: "https://cec1-3f282-default-rtdb.firebaseio.com",
  projectId: "cec1-3f282",
  storageBucket: "cec1-3f282.appspot.com",
  messagingSenderId: "75025864324",
  appId: "1:75025864324:web:1950160de3917d6b8b14d1",
  measurementId: "G-9F7NWP3ZLQ"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
//const firebase=getFirestore(app);
//firebase.initializeApp(config);

console.log("firebase connected");
const db=collection(firestore,"queryhistory");
const snapshot = await getDocs(db);
const  q = snapshot.docs.map((doc) => doc.data());
console.log(q);

//const qh = document.querySelector('#query-hist');
export async function displayval(doc){
  let li = document.createElement('li');
  let q=document.createElement('span');
  let d=document.createElement('span');
  let s=document.createElement('span');
  let t=document.createElement('span');

  li.setAttribute('data-id',doc.id);
  q.textContent= doc.data.query;
  d.textContent= doc.data.date;
  s.textContent= doc.data.status;
  t.textContent= doc.data.time;

  li.appendChild(q);
  li.appendChild(d);
  li.appendChild(s);
  li.appendChild(t);

  qh.appendChild(li);
}
  q.forEach(doc => {
    displayval(doc);
  })
})
