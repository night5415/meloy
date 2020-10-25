import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/firebase-database";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAQ8VpsewE3Aw6NDCI_b9xn1ngDEUenKK8",
  authDomain: "meloydev.firebaseapp.com",
  databaseURL: "https://meloydev.firebaseio.com",
  projectId: "meloydev",
  storageBucket: "meloydev.appspot.com",
  messagingSenderId: "52739195575",
  appId: "1:52739195575:web:03a9d6bf5d7ea5faf3c332",
  measurementId: "G-5VJJK1H384"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

