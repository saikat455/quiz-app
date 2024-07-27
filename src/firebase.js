


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl9F6G_-2JQtnz0QD_ZzZaHphX3VFlYaA",
  authDomain: "quiz-app-3b993.firebaseapp.com",
  databaseURL: "https://quiz-app-3b993-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-app-3b993",
  storageBucket: "quiz-app-3b993.appspot.com",
  messagingSenderId: "527261833828",
  appId: "1:527261833828:web:1908b9ac0f400b0ba85d71",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
