// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore, getDoc, setDoc, doc} from 'firebase/firestore';
import { getAuth ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgKYzbjIo581LbAdrMDyWngtAwdYLNVLE",
  authDomain: "cloth-db-72e32.firebaseapp.com",
  projectId: "cloth-db-72e32",
  storageBucket: "cloth-db-72e32.appspot.com",
  messagingSenderId: "767757946611",
  appId: "1:767757946611:web:1c30ba951893067d16f186",
  measurementId: "G-T2B2KK8EWJ"
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth();
export const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
    return;
  }

  const docRef = doc(firestore, `users/${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, 'users', userAuth.uid), {
        displayName, email, createdAt, ...additionalData
      })
    } catch (error) {
      console.log("Error creating doc", error);
    }
  } else {
    console.log("Document already added");
  }

  return docRef; 
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

