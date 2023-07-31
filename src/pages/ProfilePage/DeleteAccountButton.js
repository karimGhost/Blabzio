import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

import { useAuth } from '../../Accounts/useAuth';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { navigate } from 'gatsby';
//import { ButtonToolbar } from 'react-bootstrap';

const firebaseConfig2 = {
  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};


const firebaseConfig922 = {

  apiKey: "AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",

  authDomain: "zenahubglob.firebaseapp.com",

  databaseURL: "https://zenahubglob-default-rtdb.firebaseio.com",

  projectId: "zenahubglob",

  storageBucket: "zenahubglob.appspot.com",

  messagingSenderId: "414119474155",

  appId: "1:414119474155:web:d93f733443172ecd739fae",

  measurementId: "G-B65PR7NNXS"

};

function DeleteAccountButton({toastRef}) {
 return(
  <div>
    
  </div>
 )
}

export default DeleteAccountButton;
