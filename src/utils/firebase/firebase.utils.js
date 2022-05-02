import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrkRSau0G0CjsGtiQiVZK7AzccVN5MNL0",
    authDomain: "ashirwad-db.firebaseapp.com",
    projectId: "ashirwad-db",
    storageBucket: "ashirwad-db.appspot.com",
    messagingSenderId: "681542838708",
    appId: "1:681542838708:web:b4fe9950d878e4797ceae1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
  };