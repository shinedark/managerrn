import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {
  
  componentWillMount(){
    const config = {
        apiKey: "AIzaSyAl8Wipi8ErYIczP7NKA-Iiw3Ru3MrJgAQ",
        authDomain: "manager-8fdf6.firebaseapp.com",
        databaseURL: "https://manager-8fdf6.firebaseio.com",
        projectId: "manager-8fdf6",
        storageBucket: "",
        messagingSenderId: "1075715641630"
      };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store} >
        <Router/>
      </Provider>
    );
  }
}


