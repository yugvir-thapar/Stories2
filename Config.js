import firebase from 'firebase'
 require("@firebase/firestore")
 
 var firebaseConfig = {
    apiKey: "AIzaSyBtNpzNcSMVlyA1QXifaTYK7dUZK-PagPQ",
    authDomain: "newsletter-f3108.firebaseapp.com",
    databaseURL: "https://newsletter-f3108-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newsletter-f3108",
    storageBucket: "newsletter-f3108.appspot.com",
    messagingSenderId: "97690447788",
    appId: "1:97690447788:web:d9ca74968ab8e51b04d409",
    measurementId: "G-WH7QJ5K5X9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();