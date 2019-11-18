import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { FirebaseContext, Firebase } from './firebaseHOC/';

const rootNode = document.querySelector('#root');

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App/>
  </FirebaseContext.Provider>,
  rootNode
);
