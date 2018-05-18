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
      apiKey: "AIzaSyBqjFIs8-mcQBDDqi8YNgHwqwwpeJPl28g",
      authDomain: "dads-9bec2.firebaseapp.com",
      databaseURL: "https://dads-9bec2.firebaseio.com",
      projectId: "dads-9bec2",
      storageBucket: "dads-9bec2.appspot.com",
      messagingSenderId: "708249643696"
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


