import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBajy0n4DhBZ1O89VdSewV321HZ404LFmk',
  authDomain: 'letmeask-e3ce3.firebaseapp.com',
  databaseURL: 'https://letmeask-e3ce3-default-rtdb.firebaseio.com',
  projectId: 'letmeask-e3ce3',
  storageBucket: 'letmeask-e3ce3.appspot.com',
  messagingSenderId: '417362055594',
  appId: '1:417362055594:web:758e981682dcb9fc9d9bd3',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();