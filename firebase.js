import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBeIWzak-suOBM5GAx-gp6POt_yprzMd1w",
  authDomain: "fbclone-2cc8f.firebaseapp.com",
  projectId: "fbclone-2cc8f",
  storageBucket: "fbclone-2cc8f.appspot.com",
  messagingSenderId: "186975933822",
  appId: "1:186975933822:web:36b5fefb525f733e4f8f2f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
