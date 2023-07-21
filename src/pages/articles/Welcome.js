import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Accounts/useAuth'
import { FaMoon, FaStarAndCrescent, FaSun, } from 'react-icons/fa';
import firebase from 'firebase/compat/app';




const firebaseConfig2 = {
  apiKey: "AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",

  authDomain: "zenanewstoday.firebaseapp.com",

  projectId: "zenanewstoday",

  storageBucket: "zenanewstoday.appspot.com",

  messagingSenderId: "1042837214412",

  appId: "1:1042837214412:web:ac14f71cb3f41e21719e69",

  measurementId: "G-V8VEEWMFR9"

};

export default function Welcome(props) {

  const { user, loading,signOut } = useAuth();

  const [usernames, setUsernames] = useState('')


  
  firebase.initializeApp(firebaseConfig2, 'app1');
  const app4 = firebase.app('app1');

  useEffect(() => {  
    if (user && user.email) {
      app4
        .database()
        .ref('prof')
        .orderByChild('email')
        .equalTo(user.email)
        .once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userId = Object.keys(snapshot.val());
            const snapshotval = snapshot.val()[userId];
            if (snapshotval && snapshotval.username) {
              setUsernames(snapshotval.username);
            
            }
          }
        });
    } else {
      // handle the case where user is not defined or does not have an email property
      setUsernames('anoonymous')
    }
    
  }, [user && user])


  return (
   <div className={props.greeting === "Good morning" ||  props.greeting === "Good afternoon"  ? "welcomePage" :  "welcomePageU"}>
    {user &&(
<div>  

 <p id='head1' class='header'>{props.greeting} {props.greeting === "Good morning" ||  props.greeting === "Good afternoon"  ? <FaSun style={{color: "#FCE570", fontSize: '4rem'}} /> :  <FaMoon  style={{color: "#F6F1D5"}}/> } </p>
<p id='head2' class='header'>it's { (new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + (new Date().getMinutes()+1) + " ") + (new Date().getHours() < 12 ? "Am" : "Pm") }</p>
<p id='head3' class='header'>Welcome Back <b style={{color:"rgb(61, 30, 20)"}}>{ user && usernames}</b></p>
 {/*<p id='head5' class='header'>Welcome to Back </p> */}

  <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
  </div>
 )} </div>
  
    )
}
