import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBXN0RtzHg20yDKE0kfjPuSBmhMCIgYR4M",
    authDomain: "xtbc-dd2df.firebaseapp.com",
    databaseURL: "https://xtbc-dd2df.firebaseio.com",
    projectId: "xtbc-dd2df",
    storageBucket: "xtbc-dd2df.appspot.com",
    messagingSenderId: "849432446339"
  };

const app = firebase.initializeApp(config)
export default Rebase.createClass(app.database())