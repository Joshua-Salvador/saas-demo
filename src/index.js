import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAtBSRFnl17D7rrZ3WpEuVV7b2MwjAGW38",
  authDomain: "yektopro-347fb.firebaseapp.com",
  projectId: "yektopro-347fb",
  storageBucket: "yektopro-347fb.appspot.com",
  messagingSenderId: "996014756304",
  appId: "1:996014756304:web:c0d8782310fce1dadce9d5",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
