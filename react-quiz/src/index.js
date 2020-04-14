import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase/app";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const firebaseConfig = {
  apiKey: "AIzaSyDFRGLitIMIIuCmM4abOtTGVil7yCInU7I",
  authDomain: "quiz-react-ce508.firebaseapp.com",
  databaseURL: "https://quiz-react-ce508.firebaseio.com",
  projectId: "quiz-react-ce508",
  storageBucket: "quiz-react-ce508.appspot.com",
  messagingSenderId: "1042884251547",
  appId: "1:1042884251547:web:e14e1d661b4c3f49655b3e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
