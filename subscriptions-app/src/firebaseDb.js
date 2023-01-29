import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAbwkRAIRtf-N4C_-efqkf-fMOhaXe7xDQ',
  authDomain: 'my-subscriptions-fcc2a.firebaseapp.com',
  projectId: 'my-subscriptions-fcc2a',
  storageBucket: 'my-subscriptions-fcc2a.appspot.com',
  messagingSenderId: '182017604122',
  appId: '1:182017604122:web:8962aa06eb294fff706fa3'
}

const db = firebase.initializeApp(firebaseConfig)

export default db.firestore()
