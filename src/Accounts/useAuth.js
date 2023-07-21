import { useState, useEffect } from 'react';
import 'firebase/auth';

import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig2 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};

export function useAuth() {


  firebase.initializeApp(firebaseConfig2, 'app05');
  const app05 = firebase.app('app05');
const apps = app05;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const unsubscribe = app05.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setLoading(true);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);


  function signInWithEmailAndPassword(email, password) {
    return app05.auth().signInWithEmailAndPassword(email, password);
  }

  function signOut() {
   setUser("")
    return app05.auth().signOut();
    
  }

  return { apps, user,setUser, app05, loading, signInWithEmailAndPassword, signOut };
}