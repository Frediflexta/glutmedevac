import { createContext } from 'react';
import FirebaseApp from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from './config';

class Firebase {
  constructor() {
    if(!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      FirebaseApp.firestore()
        .enablePersistence({ synchronizeTabs: true })
        .catch(error => console.log(error))
    }

    this.db = FirebaseApp.firestore();
    this.pagesCollection = this.db.collection('pages');
  }
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };
