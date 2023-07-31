import React, { useEffect, useState } from 'react';
import * as pro from '../../styles/profile.module.css';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
//import im from '../../images/proxy.jpeg ./Profile';
import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
import { Link } from 'gatsby';

import Navbar from './Navbared';


const firebaseConfig2 = {

    apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

    authDomain: "itsmynodezena.firebaseapp.com",
  
    databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",
  
    projectId: "itsmynodezena",
  
    storageBucket: "itsmynodezena.appspot.com",
  
    messagingSenderId: "299392955521",
  
    appId: "1:299392955521:web:ef5671ad2702d441304980"
  };
  



export default function Billing() {
    return(
        <div>

        </div>
    
 
  )
}
export const Head = () => <title>Billing</title>
