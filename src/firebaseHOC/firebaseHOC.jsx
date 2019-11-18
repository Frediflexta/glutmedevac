import React from 'react';
import { FirebaseContext } from '.';

export const firebaseHOC = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
  </FirebaseContext.Consumer>
)