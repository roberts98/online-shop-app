import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDDvkYqcR4GuceBACqjTPw-p2LRbsnOpJs',
  authDomain: 'online-shop-8da9c.firebaseapp.com',
  databaseURL: 'https://online-shop-8da9c.firebaseio.com',
  projectId: 'online-shop-8da9c',
  storageBucket: 'online-shop-8da9c.appspot.com',
  messagingSenderId: '41467605275'
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const googleEmailProvider = new firebase.auth.EmailAuthProvider;


export { firebase, googleAuthProvider, googleEmailProvider, database as default };
