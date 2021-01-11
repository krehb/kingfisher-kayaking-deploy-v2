import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAOr9eX5HHMMU6fX2yNqOCf6lcYeDaEmfA",
  authDomain: "kingfisher-kayaking-website.firebaseapp.com",
  databaseURL: "https://kingfisher-kayaking-website-default-rtdb.firebaseio.com/",
  projectId: "kingfisher-kayaking-website",
  storageBucket: "kingfisher-kayaking-website.appspot.com",
  messagingSenderId: "810507287798",
  appId: "1:810507287798:web:8a58000ac03b5145c8c0d7",
  measurementId: "G-YNPVMKG7R1"
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

