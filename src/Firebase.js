import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDg7rHmJln60qq9fGnt1lS-2sr7NHNcWwA",
  authDomain: "disney-clone-804eb.firebaseapp.com",
  projectId: "disney-clone-804eb",
  storageBucket: "disney-clone-804eb.appspot.com",
  messagingSenderId: "999669960867",
  appId: "1:999669960867:web:a09e14d86ed7940dd66f16"
};
 
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
// const db=firebaseApp.Firestore();
const db = getFirestore(firebaseApp);
const auth=getAuth();
// const storage=firbase.storage()
export {auth,provider}
export default db;

