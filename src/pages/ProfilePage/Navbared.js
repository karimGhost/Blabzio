import React, { useEffect, useState } from 'react';
import * as pro from '../../styles/profile.module.css';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import im from '../../images/proxy.jpeg';
import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import  {Button} from 'primereact/button';

import Navbar from '../../components/Navbar';
const firebaseConfig2 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};



export default function Navbared(props) {

  firebase.initializeApp(firebaseConfig2, 'app019');

  const app4 = firebase.app('app019');
  const { user,setUser, loading,signOut } = useAuth();
  const auth = app4.auth();
  const database = app4.database();

  const [language, setLanguage] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [profileImg, setProfileImg] = useState(im);
  const setDarks = props.setDarks; 

const actives = props.actives;
/*

  useEffect(() => {
    app4.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        database.ref(`users/${currentUser.uid}`).on('value', snap => {
        
       if(snap.val()){
          setProfileImg(snap.val().profileImg);
          setLanguage(snap.val().language);
  setFavorites(snap.val().favorites);
       }      
});
      
      }
    });



 
  }, []);

*/

const [dark , setdark] = useState(false)


  useEffect(() => {  

    if (user && user.email) {
      app4
        .database()
        .ref('profile')
        .orderByChild('email')
        .equalTo(user.email)
        .once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userId = Object.keys(snapshot.val());
            const snapshotval = snapshot.val()[userId];
            if (snapshotval && snapshotval.username  ) {
              snapshotval.darkmode &&   setDarks(snapshotval.darkmode)
              snapshotval.darkmode && setdark(snapshotval.darkmode)
            
            }
          }
        });
    } else {
      // handle the case where user is not defined or does not have an email property
   
    }
    
  
  
  
  }, [user && user])
  


  useEffect(() => {
    // Only run the effect if the user object is defined
    if (user) {
      app4.database().ref(`profiles/${user.uid}`).on('value', snapshot => {
        console.log(JSON.stringify(snapshot.val()))
        if (!snapshot.val()) {
     
          console.log("Snapshot value is null or undefined");
          return;
        }
     

        // check if snapshot.val() is an object
        if(typeof snapshot.val() === 'object'){
          const val = snapshot.val();
         setProfileImg(val.profileImg)
        } else {
setProfileImg(snapshot.val())
        }
      });
    }



  }, [user]);


 
 
  
  console.log(`ìtsb ${profileImg}`)
 
  useEffect(() => {
    
    let vf = document.getElementById('#va');
    user &&
    vf.addEventListener('mouseover', () => {
      alert('h')
      document.querySelector('.profileimg').classNameNameList.add('propo')
    }) 
  }, [])
 
  const handleLogout = async () => {
    try {
      signOut();
      setUser(null);
      sessionStorage.clear();
    } catch (error) {
      console.error(error);
    }




  };

  const handleProfileImgChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
      app4.database().ref(`users/${user.uid}`).set({ profileImg:reader.result })

    };
    reader.readAsDataURL(file);


  };
    

/*
  useEffect(() => {
    if (!user || !actives) return;
    const v8 = document.querySelector(".v8");
    const vh = document.querySelector('#dp');
    vh.addEventListener('mouseover', () => {
    
      v8.classNameNameList.add("vjj");
    });

  
      vh.addEventListener('mouseout', () => {
        v8.classNameNameList.remove("vjj");
      })
    if(actives){

    }

  }, [actives]);
  /*

  */
  const bu = props.bu;
  const setBu =  props.setBu;

function active(){
  props.setactive(true)
  setBu(false)

}
  
function setActive(){
  props.setactive(false)
  setBu(true)
}
 
 /* margin-top:20px;
background-color:#f2f6fc;
color:#69707a;*/

function isActive({ isCurrent }) {
  return isCurrent ? { className: 'active papol '} : null;
}

  return (
<div>
<Button className='pi p-1 pi-home flex row bg-dark' onClick={() => navigate('/')} ><p className='p-1'>Zena</p></Button>

<Navbar />
<div class="container-xl px-4 mt-4" >
       <nav className="nav nav-borders">

        <Link getProps={isActive}  to ="/ProfilePage/ProfileSettup" className="nav-link  ms-0" >Profile </Link>
        <Link getProps={isActive} to ="/ProfilePage/Billing"  className="nav-link" > Billing</Link>
        <Link getProps={isActive} to ="/ProfilePage/Security"  className="nav-link"  >Security</Link>
        <Link getProps={isActive} to ="/ProfilePage/Notifications"  className="nav-link"  >Notifications</Link>

     { /*  <Link getProps={isActive} to ="/Profile"  className="nav-link"  ><h1>Zena Home</h1></Link>*/}
    </nav> 
    <hr className="mt-0 mb-4" />
    </div>
    </div>
  )
}
