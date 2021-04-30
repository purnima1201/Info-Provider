import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDghFVjat3yCXdokiBqguXKfO3XThRbFOI",
  authDomain: "info-provider-app.firebaseapp.com",
  databaseURL: "https://info-provider-app-default-rtdb.firebaseio.com",
  projectId: "info-provider-app",
  storageBucket: "info-provider-app.appspot.com",
  messagingSenderId: "692764487576",
  appId: "1:692764487576:web:61b1ac8e5f1f88dd4d85ed",
  measurementId: "G-F9XC9R8B47"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
