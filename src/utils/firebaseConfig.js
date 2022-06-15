// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCilsgSnBcQ_fk-32Gmocu-rILacNUreGA",
  authDomain: "fornetti-shop.firebaseapp.com",
  projectId: "fornetti-shop",
  storageBucket: "fornetti-shop.appspot.com",
  messagingSenderId: "550363193897",
  appId: "1:550363193897:web:6b1988ac62ad4de860f238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;