// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgUDJ7rDVWOrkyg6rYcQ435B5iTMyJIsw",
  authDomain: "ikastdyna.firebaseapp.com",
  projectId: "ikastdyna",
  storageBucket: "ikastdyna.appspot.com",
  messagingSenderId: "194815442087",
  appId: "1:194815442087:web:979e79f5b550a009a92f82",
  measurementId: "G-47T2SGH83W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
