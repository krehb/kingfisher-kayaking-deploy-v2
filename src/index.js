import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCSLuKYhwlGvvFupvllxQlRyj8jD1gEKKQ",
  authDomain: "kingfisher-kayaking.firebaseapp.com",
  databaseURL: "https://kingfisher-kayaking.firebaseio.com",
  projectId: "kingfisher-kayaking",
  storageBucket: "kingfisher-kayaking.appspot.com",
  messagingSenderId: "416573307952",
  appId: "1:416573307952:web:cd0ba568a7d63024a901f5",
  measurementId: "G-9LHF6LJD8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

