import React, { useState, useEffect ,useRef} from 'react';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import { nanoid } from  'nanoid';
import 'firebase/auth';
import 'firebase/database';
import im from '../../images/proxy.jpeg';
import { Link } from "gatsby";
import 'firebase/compat/firestore'; // import fa from compat version
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutoComplete } from "primereact/autocomplete";
import ReactHtmlParser, { Comment } from "html-react-parser";
import { Image } from 'primereact/image';
import parse from 'html-react-parser';
import { Carousel } from 'primereact/carousel';
import { Card } from 'react-bootstrap';
import '../../styles/Messages.css';

import{
  faAnchorLock,
  faBan,
  faCalendarDay,
  faCalendarWeek,
  faTimes,
  faClock, faClockFour, faClockRotateLeft, faEllipsis, faFlag, faPaperclip, faTrash, faUserClock, faVolumeMute, faSearch, faVolumeHigh
} from '@fortawesome/free-solid-svg-icons';
import { FaUserClock, FaVolumeUp } from 'react-icons/fa';
import { Skeleton } from 'primereact/skeleton';

const firebaseConfig019 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};






export default function MessageDrawer(props) {
  const {user} = useAuth();

  firebase.initializeApp(firebaseConfig019, 'app019');
  const app019 = firebase.app('app019');



const SetupidA = props.SetupidA;
const SetupidB = props.SetupidB;
const SetsetupDp = props.SetsetupDp;
const searchval = props.searchval;
const setSearchId = props.setSearchId;

const BlockedMe  = props.BlockedMe;
const setBlockedMe = props.setBlockedMe;
const [Muted, setMuted] = useState('') ;

const setlockedmeUsers = props.setlockedmeUsers;

useEffect(() => {
  if (!user) return;

  const db = app019.database().ref('profile');
  const otherUserIds = Array.isArray(props.idA) ? props.idA : [props.idA];
  const filteredChats = [];
const didblockme  = []; 
  const onValue = (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const chatValues = childSnapshot.val();
      const chatId = childSnapshot.key;
      const hasOtherUserId = otherUserIds.some(id => chatId.includes(id));
     

    
    if(chatId.includes(user.uid)){

     didblockme.push(chatValues)

    }

      if (hasOtherUserId) {
        filteredChats.push(chatValues);
      }
    });


    const filteredEmails = filteredChats.map(obj => obj.username);
    const blockedME = filteredChats.map(obj => obj.blockedMe !== undefined && Object.keys(obj.blockedMe)[0] && obj.username );

    //const blockedthem = filteredChats.map(obj => obj.blockList && obj.blockList);
   blockedME && setBlockedMe(blockedME);
   const Mute = filteredChats.map(obj => obj.Muted !== undefined  && Object.keys(obj.Muted)[0] && obj.username );
setMuted(Mute);

    console.log("i blocked these people", blockedME);
    console.log("peps are", filteredChats)
   // console.log("i blocked this person ", blockedthem)
    const filteredDp = filteredChats.map(obj => obj.profileImg ? obj.profileImg : im);
 SetupidA(filteredEmails);
   SetsetupDp(filteredDp);

    const chatIds = Object.keys(snapshot.val() || {});
    const chatIdWithUserUid = chatIds.find(id => id.includes(user?.uid || ''));

    if (chatIdWithUserUid) {
      const chatValue = snapshot.val()[chatIdWithUserUid];
      
      props.setmyuser(Object.values(chatValue.username || "You"));
      props.setmypic( Object.values(chatValue.profileImg || {im}) );

    }
  setlockedmeUsers(didblockme.map(obj => obj.blockedMe !== undefined && Object.keys(obj.blockedMe)[0]))
  //console.log( 'show those who blocked me ', didblockme  )

  };
  db.on('value', onValue);

  return () => {
    db.off('value', onValue);
  };
}, [user, props.idA, props.setmyuser, SetupidA, SetsetupDp]);



const [showed, setShowed] = useState(false)

 /*
useEffect(() => {
 if(!props.setup) return;
searchval == props.setup && props.setup[props.setupidA] &&
props.setSearchId("jjj")

setmyUser

if(searchval && searchval.toLowerCase() === props.setup && props.setup[props.setupidA].toLowerCase()){
  console.log("if this two are equal props shows good", searchval && searchval.toLowerCase() === props.setup && props.setup[props.setupidA].toLowerCase()  )
}


}, [ props.setup && props.setup, searchval && searchval])

*/





const BlockUser = async (userId) => {
          
  // Remove the user ID from the "following" node of the current user
if(user){

const userI = userId[0] === user.uid ?
userId[1] : userId[0]
 // Update the state with the modified followers array

 await  app019.database().ref(`profile/${user.uid}/following/${userI}`).remove();
 await app019.database().ref(`profile/${userI}/following/${user.uid}`).remove();

  // Remove the current user's ID from the "followers" node of the user being unfollowed
 await app019.database().ref(`profile/${userI}/followers/${user.uid}`).remove();

 await app019.database().ref(`profile/${user.uid}/followers/${userI}`).remove();

 await app019.database().ref(`profile/${userI}/blockedMe/${user.uid}`).set(true);
 //    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);

 alert("Blocked")
}
};

const MuteUser = async (userId) =>{
if(user){

  await app019.database().ref(`profile/${userId[0] === user.uid ?
     userId[1] : userId[0] }/Muted/${user.uid}`).set(true);
  //    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);
  alert("Muted")

 }
 };

 const setshowmuted = props.setshowmuted;
const UnmuteUser = async (userId, mu) => {
             
  if(user){   
   
    

    await app019.database().ref(`profile/${userId[0] === user.uid ?
      userId[1] : userId[0] }/Muted/${user.uid}`).remove();
     
      const newMutedUsers = Muted.filter((mutedUserId) => mutedUserId !== mu);
      setMuted(newMutedUsers);

   alert("unmuted", {mu})

  //    await app019.database().ref(ofile/${user.uid}/blockList/${userId.value}`).set(true);


        

   }


   };
   



const showmuted = props.showmuted;




if(!user || !app019.database().ref('profile') || !props.setup ){
  return(<div className="flex mb-3">
  <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
  <div>
      <Skeleton width="5rem" className="mb-2"></Skeleton>
      <Skeleton width="0rem" className="mb-2"></Skeleton>
      <Skeleton width="2rem" className="mb-2 " style={{float: " right"}}></Skeleton>
      <Skeleton width="1rem" className="mb-2 " style={{float: " right"}}></Skeleton>

  </div>
</div>)
}

if(showmuted){


return(
  <>

  { props.setup && BlockedMe && BlockedMe.includes(props.setup[props.setupidA])   ? 
    "" : 
   
    props.setup && Muted.includes(props.setup[props.setupidA]) &&
   
  <li style={{borderLeftColor: props.Ref && props.Ref > 0  ? "green" : "black"}} data-toggle="tab" data-target="#inbox-message-1" className="active">
  {  props.Ref && props.Ref > 0 ? <div className="message-count bg-success"> {props.Ref && props.Ref > 0 && props.Ref} </div> : ""}
  <img style={{marginTop: "-65px"}}  alt={props.setup && props.setup} className="img-circle medium-image" src={props.setupDp && props.setupDp[props.setupidA]}/>

  <div className="vcentered info-combo">
     <h3  className="no-margin-bottom name" >
        <Link style={{fontSize: "1rem", fontWeight:"bold", fontFamily:"monospace", textShadow: props.Ref && props.Ref > 0 ? "1px 1px 0.20px black" : "1px 1px 0.10px Highlight", color: "black"}} to={`profileComponents/Profiles/?id=${props.personid}`}> 
        {props.setup && props.setup[props.setupidA]} </Link>
</h3>

 <h5 style={{ fontWeight: props.Ref && props.Ref > 0  && "bold", color: props.Ref && props.Ref > 0   && "black", textShadow: props.Ref && props.Ref > 0  && "1px 1px 0.25px Highlight"}}> 
{props.text}</h5>
<button onClick={(e) => {  e.stopPropagation(); setShowed(pre => !pre) }} style={{background: "transparent", border: "none", color: "black", float:"right", zIndex:"100"}} >
<FontAwesomeIcon icon={faEllipsis} style={{marginTop: "5px", float:"right"}} />
</button>
  </div>

  <div className="contacts-add mt-1">
      <span className="message-time mt-1" style={{display: "flex"}}>{ props.Ref && props.Ref > 0 ? <FontAwesomeIcon style={{marginTop: "5px"}}  icon={   props.time.includes("days") ? faCalendarDay :    faUserClock } /> : "" }   {props.time} </span>
      { showed && <div style={{display:"flex", justifyContent:"space-evenly", marginLeft:"auto", marginRight:"auto" ,padding:"5px 20px", width: "100%"}}>
           <button onClick={(e) => {e.stopPropagation(); BlockUser(props.idA)}} style={{background: "transparent", border: "none", color: "tomato"}} tooltip="Block" > <FontAwesomeIcon className='mx-2' icon={faBan} style={{marginTop: "5px" }} /></button>    
           <button onClick={(e) => {e.stopPropagation(); UnmuteUser(props.idA, props.setup && props.setup[props.setupidA]) }} tooltip="Mute" style={{background: "transparent", border: "none", color: "black"}} >    <FontAwesomeIcon className='mx-2' icon={faVolumeHigh} style={{marginTop: "5px"}} /> </button>
           <button  style={{background: "transparent", border: "none", color: "red"}} tooltip="report">  <FontAwesomeIcon className='mx-2' icon={faFlag} style={{marginTop: "5px"}} /> </button>

        </div>} 

          </div>
</li>
  } 
  
  
  </>
    )


}else{


  

  return (

 <> 
  { props.setup && BlockedMe && BlockedMe.includes(props.setup[props.setupidA])   ? 
    "" : 
    props.setup && Muted.includes(props.setup[props.setupidA]) ? "" 
    
    
    :

    <li style={{borderLeftColor: props.Ref && props.Ref > 0  ? "green" : "black"}} data-toggle="tab" data-target="#inbox-message-1" className="active">
    {  props.Ref && props.Ref > 0 ? <div className="message-count bg-success"> {props.Ref && props.Ref > 0 && props.Ref} </div> : ""}
    <img style={{marginTop: "-65px"}}  alt="no Dp!" className="img-circle medium-image" src={props.setupDp && props.setupDp[props.setupidA] ? props.setupDp[props.setupidA] : im  }/>

    <div className="vcentered info-combo">
       <h3  className="no-margin-bottom name" >
       {props.setup && props.setup[props.setupidA] ? <Link style={{fontSize: "1rem", fontWeight:"bold", fontFamily:"monospace", textShadow: props.Ref && props.Ref > 0 ? "1px 1px 0.20px black" : "1px 1px 0.10px Highlight", color: "black"}} to={`/profileComponents/Profiles/?id=${props.personid}`}> 
          {props.setup && props.setup[props.setupidA]} </Link> : "Deleted user"}
  </h3>

   <h5 style={{ fontWeight: props.Ref && props.Ref > 0  && "bold", color: props.Ref && props.Ref > 0   && "black", textShadow: props.Ref && props.Ref > 0  && "1px 1px 0.25px Highlight"}}> 
  {props.text}</h5>
  <button onClick={(e) => {  e.stopPropagation(); setShowed(pre => !pre) }} style={{background: "transparent", border: "none", color: "black", float:"right", zIndex:"100"}} >
  <FontAwesomeIcon icon={faEllipsis} style={{marginTop: "5px", float:"right"}} />
</button>
    </div>

    <div className="contacts-add mt-1">
        <span className="message-time mt-1" style={{display: "flex"}}>{ props.Ref && props.Ref > 0 ? <FontAwesomeIcon style={{marginTop: "5px"}}  icon={   props.time.includes("days") ? faCalendarDay :    faUserClock } /> : "" }   {props.time} </span>
        { showed && <div style={{display:"flex", justifyContent:"space-evenly", marginLeft:"auto", marginRight:"auto" ,padding:"5px 20px", width: "100%"}}>
             <button onClick={(e) => {e.stopPropagation(); BlockUser(props.idA)}} style={{background: "transparent", border: "none", color: "tomato"}} > <FontAwesomeIcon className='mx-2' icon={faBan} style={{marginTop: "5px" }} /></button>    
             <button onClick={(e) => {e.stopPropagation(); MuteUser(props.idA)}}  style={{background: "transparent", border: "none", color: "black"}}>   <FontAwesomeIcon className='mx-2' icon={faVolumeMute} style={{marginTop: "5px"}} /> </button>
             <button  style={{background: "transparent", border: "none", color: "red"}}>  <FontAwesomeIcon className='mx-2' icon={faFlag} style={{marginTop: "5px"}} /> </button>

          </div>} 

            </div>
</li>
  
 }</>
  )
  
  }

}


