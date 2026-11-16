import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACcbwPXw98DhtPtcY5BPaRQfBx0UL6Uxc",
  authDomain: "website-github-nekochan-xyz.firebaseapp.com",
  projectId: "website-github-nekochan-xyz",
  storageBucket: "website-github-nekochan-xyz.firebasestorage.app",
  messagingSenderId: "244447450523",
  appId: "1:244447450523:web:35d4562029c6f674edbd3e",
  measurementId: "G-VNE7GZ4GGD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
