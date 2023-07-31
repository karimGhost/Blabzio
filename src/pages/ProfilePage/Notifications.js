import React, { useEffect, useState, useRef } from 'react';
import * as pro from '../../styles/profile.module.css';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import im from '../../images/proxy.jpeg';
//import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
import { Link } from 'gatsby';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import {confirmDialog, ConfirmDialog} from 'primereact/confirmdialog';
import {RadioButton} from "primereact/radiobutton";
import {Checkbox} from "primereact/checkbox";
import Navbar from './Navbared';

import {InputNumber} from "primereact/inputnumber";
import { event } from 'jquery';
import {ProgressSpinner} from 'primereact/progressspinner';
const firebaseConfig2 = {
  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"
  
  };
  
  



export default function Notifications() {

   return(
    <div>
      
    </div>
   )
}

export const Head = () => <title>Notifications</title>
