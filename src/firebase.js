
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId:process.env.REACT_APP_APP_ID,
// };


// const app = initializeApp(firebaseConfig);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl9F6G_-2JQtnz0QD_ZzZaHphX3VFlYaA",
  authDomain: "quiz-app-3b993.firebaseapp.com",
  projectId: "quiz-app-3b993",
  storageBucket: "quiz-app-3b993.appspot.com",
  messagingSenderId: "527261833828",
  appId: "1:527261833828:web:1908b9ac0f400b0ba85d71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
