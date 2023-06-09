import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHE_f9QpNRgPK_hy0FI27AEJ8OxDnOufA",
  authDomain: "linkedin-clone-d0c1c.firebaseapp.com",
  projectId: "linkedin-clone-d0c1c",
  storageBucket: "linkedin-clone-d0c1c.appspot.com",
  messagingSenderId: "501492999144",
  appId: "1:501492999144:web:74030108bf3102ce1cba5d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
export default firebaseApp;
