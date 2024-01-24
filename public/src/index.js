// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdInnxk7BuhmMNYuOcjP9kaqR8VGEQRuI",
  authDomain: "aigame-83e8f.firebaseapp.com",
  projectId: "aigame-83e8f",
  storageBucket: "aigame-83e8f.appspot.com",
  messagingSenderId: "596188046542",
  appId: "1:596188046542:web:77238a25ef66a229401c9f",
  measurementId: "G-4R45XS0H0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);