import React, { useEffect, useState } from 'react';
import * as pro from '../../styles/profile.module.css';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import im from '../../images/proxy.jpeg';
import { initializeApp } from "firebase/app";
import Language from '../Language';
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


export default function Profile(props) {
 return(
  <div>
    
  </div>

);}

export const Head = () => <title>Profile</title>

{/*
{/*{/*


<div  style={{zIndex: "19"}} classNameName="container  bg-white mt-5 mb-5">
    <div classNameName="row">
        <div classNameName="col-md-3 border-right">
            <div classNameName="d-flex flex-column align-items-center text-center p-3 py-5">{user && <div id={pro.container} classNameNameName="container" >
 <div> <img  src={profileImg}  alt={user.displayName}  classNameNameName="profileimg" /> </div> 
  <p  classNameNameName='v8'>+</p>
  <input   classNameNameName='v'id="dp"  type="file"  onChange={handleProfileImgChange} />  
 alt={user.displayName}

</div>}<span classNameName="font-weight-bold">                <h1 style={{fontWeight: "bold" ,margin: '0 auto', textAlign: "center" }} classNameNameName='PP'>{ user &&  user.email.split("@")[0].replace(/[0-9]/g, "").length > 8 ? user && user.email.slice(0, 8).charAt(0).toUpperCase().concat(user && user.email.slice(1, 10)) : user && user.email.split("@")[0].replace(/[0-9]/g, "").charAt(0).toUpperCase().concat(user && user.email.split("@")[0].replace(/[0-9]/g, ""))  } </h1>
</span><span classNameName="text-black-50">{user && user.email}</span><span> </span></div>
        </div>
        <div classNameName="col-md-5 border-right">
            <div classNameName="p-3 py-5">
                <div classNameName="d-flex justify-content-between align-items-center mb-3">
                    <h4 classNameName="text-right">Profile Settings</h4>
                </div>

                <div classNameName="row mt-2">
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='ame' classNameName="labels">Name</label> <input type="text" id="ame" classNameName="form-control" placeholder="first name" value="" /></div>
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='Sur' classNameName="labels">Surname</label><input type="text" id="Sur" classNameName="form-control" value="" placeholder="surname"/></div>
                </div>
                <div classNameName="row mt-3">
                    <div classNameName="col-md-12"> <label htmlFor="" htmlFor='Add' classNameName="labels">Address Line 1</label><input type="text" classNameName="form-control" placeholder="enter address line 1" value=""/></div>
                    <div classNameName="col-md-12"> <label htmlFor="" htmlFor='emal' classNameName="labels">Email ID</label><input type="text" id='emal' classNameName="form-control" placeholder="enter email id" value=""/></div>
                </div>
                <div classNameName="row mt-3">
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='co' classNameName="labels">Country</label><input id='co' type="text" classNameName="form-control" placeholder="country" value=""/></div>
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='st' classNameName="labels">State/Region</label><input id="st" type="text" classNameName="form-control" value="" placeholder="state"/></div>
                </div>
                <div classNameName="mt-5 text-center"><button classNameName="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div classNameName="col-md-4">
            <div classNameName="p-3 py-5">
                <div classNameName="col-md-12"> <label htmlFor="" htmlFor='addi' classNameName="labels">Additional Details</label><input type="text" id="addi" classNameName="form-control" placeholder="additional details" value=""/></div>
            </div>
     
        <div classNameNameName={pro.lague}>
     <Language classNameNameName={pro.lague} language={props.language} handleLanguageChange={props.handleLanguageChange} /> 
     </div>

        <div classNameNameName={pro.favoritescontainer}>
            <h2><Trans>Favorites</Trans>:</h2>
            <ul>

              { /*favorites.map(favorite => (
                
<li key={favorite}>{favorite}</li>
              )) 
</ul>
</div> /</div> } */} 
