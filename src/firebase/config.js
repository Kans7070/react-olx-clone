
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDHkXOC5Uxx4MSHiCl6NLdjVP6kO0hMSqc",
  authDomain: "fir-1bd70.firebaseapp.com",
  projectId: "fir-1bd70",
  storageBucket: "fir-1bd70.appspot.com",
  messagingSenderId: "999136935758",
  appId: "1:999136935758:web:36fda934e681cbfbec681f",
  measurementId: "G-Q0CVLJGX78"
};

export default firebase.initializeApp(firebaseConfig)