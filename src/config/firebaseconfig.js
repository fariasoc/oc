import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDF0zvyG13vlSjlfJSpD9MPUuSsPbk008Q",
  authDomain: "onpenclose.firebaseapp.com",
  projectId: "onpenclose",
  storageBucket: "onpenclose.appspot.com",
  messagingSenderId: "507044234122",
  appId: "1:507044234122:web:4038482a9f9b1138b5be73",
  measurementId: "G-738DQM02W7"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()

export default database

/*
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/