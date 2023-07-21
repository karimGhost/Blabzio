import React, { useState, useEffect ,useRef} from 'react';
import firebase from 'firebase/compat/app';
//import { useAuth } from '../../Accounts/useAuth';
//import { nanoid } from 'nanoid';
import 'firebase/auth';
import 'firebase/database';
import im from '../../images/proxy.jpeg';
import { Link } from "gatsby";
import 'firebase/compat/firestore'; // import from compat version
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutoComplete } from "primereact/autocomplete";
//import ReactHtmlParser, { Comment } from "html-react-parser";
import { Image } from 'primereact/image';
//import parse from 'html-react-parser';
//import { Carousel } from 'primereact/carousel fas';  youtube
import { Card } from 'react-bootstrap';
import '../../styles/Messages.css';
import { debounce } from 'lodash';

import{

  faTimes,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

const firebaseConfig019 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};






    
      export default  function Users(props) {


        const setCreatemesage = props.setCreatemesage;
       const selectedUser = props.selectedUser;

       const [users, setUsers] = useState([]);
       const [uids, setuids] = useState(null);

       const [selectedAcc, setSelectedAcc] = useState(null);
       const [filteredUsers, setFilteredUsers] = useState(null);
   

console.log("this s the selected Acc", selectedAcc)
console.log("as you type logs data is", users.id)

       firebase.initializeApp(firebaseConfig019, 'app0999');
       const app0999 = firebase.app('app0999');
       //const {user} = useAuth(); typeof user.user === 'string' && 

       const debouncedHandleChange = debounce((event) => {
        let _filteredUsers;
        if (!users) return;
        if (!event.query.trim().length) {
          _filteredUsers = [...users];
       
        } else {
          _filteredUsers = users.filter((useri) => {
        

            return (
              useri &&
              useri.useri &&
                useri.useri.toLowerCase().startsWith(event.query.toLowerCase())
            );
          });
        }
        setFilteredUsers(_filteredUsers);
      }, 100); 
      
    
      
       const search = (event) => {
        debouncedHandleChange(event);

      };
      
    

      function rest(){
        setCreatemesage(false);
        selectedAcc && props.setId(uids);
        props.setShowTextArea(true);
       
        alert(uids)

      }



       const  itemTemplate = (users) => {
          
        return (
         
            <div className="flex align-items-center" onClick={rest}>
                <img
                    alt={"dP"}
                    src={users && users.profileImg }
                    //className={`flag flag-${item.code.toLowerCase()} mr-2`} youtube 
                    style={{width: '28px'}}
                />
                <div style={{color: "black"}}>{ users && users.useri }</div>
            </div>
        );
    };
  
    useEffect(() => {
      if (typeof selectedAcc === 'object') {
        return;
      }
      app0999
        .database()
        .ref('profile')
        .orderByChild('username')
        .equalTo(selectedAcc)
        .once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userId = Object.keys(snapshot.val())[0];
            const userData = snapshot.val()[userId];
        const useri = {
              id: userId,
         useri: userData.username,
              profileImg: userData.profileImg ? userData.profileImg : im,
 
            };
            setUsers([useri]);
            setuids(useri.id)
            console.log("if this shows why is it id", useri.id)
          } else {
            setUsers([]);
          }
        });
    }, [selectedAcc]);

      

   function setSearch(){

    
    if(!selectedAcc || selectedAcc.length < 1){
      setCreatemesage(false)
    }
    

    if (typeof selectedAcc === 'object') {
      return;
    }



    app0999
      .database()
      .ref('profile')
      .orderByChild('username')
      .equalTo(selectedAcc)
      .once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userId = Object.keys(snapshot.val())[0];
          const userData = snapshot.val()[userId];
      const useri = {
            id: userId,
       useri: userData.username,
            profileImg: userData.profileImg ? userData.profileImg : im,

          };
          setUsers([useri]);
          setuids(useri.id)
          console.log("if this shows why is it id", useri.id)
        } else {
          setUsers([]);
        }
      });


   }

        return(
          <>
  

  
         
         
<AutoComplete field="name" value={selectedAcc} suggestions={filteredUsers} placeholder="Send message to..." 
     className='borderradius mt-1'   style={{borderTopRightRadius:"0", borderBottomRightRadius: "0"}}       completeMethod={search}  onChange={(e) => setSelectedAcc(e.value)} itemTemplate={itemTemplate} />
{
                            <button style={{background:"white",  border: "none", fontSize: selectedAcc && selectedAcc.length > 0 ? "1rem" : " 1.5rem", marginLeft:"-5px", marginTop: "-1px",padding: "10px", borderTopLeftRadius:"0", borderBottomLeftRadius: "0", paddingTop: selectedAcc && selectedAcc.length > 0 && "14px", paddingBottom: selectedAcc && selectedAcc.length > 0 && "14px" }}
                             onClick={setSearch} className="btn btn-danger close-new-message">
                            <FontAwesomeIcon  icon={selectedAcc && selectedAcc.length > 0 ?  faSearch : faTimes }
                             style={{cursor:"pointer", color: selectedAcc && selectedAcc.length > 0 ? "yellowgreen" : "red" }} 
                             type="submit"  />

                            </button>
}

</>

        )

      }