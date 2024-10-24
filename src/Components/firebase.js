// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwu2gatIkgBCZqseonxsoJd5gPyz0ShE",
  authDomain: "ai-news-hub.firebaseapp.com",
  databaseURL: "https://ai-news-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ai-news-hub",
  storageBucket: "ai-news-hub.appspot.com",
  messagingSenderId: "1011698158648",
  appId: "1:1011698158648:web:bc0fe5428b832845096acd",
  measurementId: "G-78PDLMH4DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);