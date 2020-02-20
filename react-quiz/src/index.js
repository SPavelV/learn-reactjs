import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFRGLitIMIIuCmM4abOtTGVil7yCInU7I",
  authDomain: "quiz-react-ce508.firebaseapp.com",
  databaseURL: "https://quiz-react-ce508.firebaseio.com",
  projectId: "quiz-react-ce508",
  storageBucket: "quiz-react-ce508.appspot.com",
  messagingSenderId: "1042884251547",
  appId: "1:1042884251547:web:e14e1d661b4c3f49655b3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
