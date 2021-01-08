import firebase from 'firebase/app';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAs-__hgxNW35hmLxaEADUhRqfHpnIH_Ig",
        authDomain: "facebook-messenger-ed9aa.firebaseapp.com",
        projectId: "facebook-messenger-ed9aa",
        storageBucket: "facebook-messenger-ed9aa.appspot.com",
        messagingSenderId: "870943964380",
        appId: "1:870943964380:web:8f5b7cd3ed2fd90ba74819",
        measurementId: "G-MYCR0JR4QE"
      }
);


  const db = firebaseApp.firestore();

  export default db;