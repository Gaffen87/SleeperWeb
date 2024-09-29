// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
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
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

export const getPlayersFromDb = async () => {
  const players = [];
  const querySnapshot = await getDocs(collection(db, "players"));
  querySnapshot.forEach((doc) => {
    players.push(doc.data());
  });
  return players;
};

export const getPlayerById = async (playerId) => {
  const playersRef = collection(db, "players", );
  const querySnapshot = query(playersRef, where("playerId", "==", playerId));
  const player = (await getDocs(querySnapshot)).docs[0].data();
  return player;
};
