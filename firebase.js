import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbe70TRHespj7KW60VpOroh6_-Kqp9oXg",
  authDomain: "triolocke-2d788.firebaseapp.com",
  projectId: "triolocke-2d788",
  storageBucket: "triolocke-2d788.firebasestorage.app",
  messagingSenderId: "923261403031",
  appId: "1:923261403031:web:08b102bc6f34ef642bced2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
