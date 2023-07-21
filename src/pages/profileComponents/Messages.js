import React, { useEffect, useRef, useState } from 'react'
 import { FileUpload } from 'primereact/fileupload';        
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import {Layout} from "../../components/Layout"
import 'firebase/auth';
import { Form, ListGroup } from 'react-bootstrap';
import { Badge } from 'primereact/badge';
import 'firebase/database';
import { Card } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import 'quill/dist/quill.snow.css';
import { Editor } from "primereact/editor";
import MessageDrawer from "./MessageDrawer";
import MessageA from "./MessageA";
import MessageB from "./MessageB";
import Users from "./MessageUsers";
import im from '../../images/proxy.jpeg';
import { Image } from 'primereact/image';
import ContentEditable from 'react-contenteditable';
import ReactHtmlParser, { Comment } from "html-react-parser";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { debounce } from 'lodash';
import { Skeleton } from 'primereact/skeleton';
//import 'firebase/compat/firestore'; // import from compat version fas
/*       <MDBBtn rippleDuration={3000} size='lg' rippleColor='red' color='light'> 

 <div className='bg-image'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
    </div>   to ad a shadow .shadow-1 to 5  .shadow-inner   .hover-shadow
*/

import{
  faSun,
  faG,
  faSmile,
  faPaperPlane,
  faPaperclip,
  faTrashCan,
  faTrashArrowUp,
  faTrashRestore,
  faTrashAlt,
  faTrash,
  faShareNodes,
  faTimes,
  faLink,
  faEnvelopeOpenText,
  faArrowRightFromBracket,
  faArrowsLeftRightToLine,
  faDownLeftAndUpRightToCenter,
  faRightFromBracket,
  faAngleLeft,
  faChevronLeft,
  faEllipsis,
  faTimesCircle,
  faImages,
  faTimesSquare,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Messages.css';
import { InputTextarea } from 'primereact/inputtextarea';
import { ListBox } from 'primereact/listbox';
import { FaImages, FaOpencart, FaTrashRestore } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
const firebaseConfig015 = {
  // your firebase config fas

  apiKey: "AIzaSyALrSOduM9yvvHS_fR14WeCcgEhH5D8oCA",

  authDomain: "zenaglob.firebaseapp.com",

  databaseURL: "https://zenaglob-default-rtdb.firebaseio.com",

  projectId: "zenaglob",

  storageBucket: "zenaglob.appspot.com",

  messagingSenderId: "62411931925",

  appId: "1:62411931925:web:6581dc5950a7a2137fa91c",

  measurementId: "G-KDMQLLD16X"


};

export default function Messages() {

  
const [ifdark, setdark] = useState(true)
       
  const {user, loading} = useAuth();
  const nano = nanoid();
    firebase.initializeApp(firebaseConfig015, 'app015');
    const app015 = firebase.app('app015');
    const [fullSizeImage, setFullSizeImage] = useState(null);
    const [lockedmeUsers,  setlockedmeUsers]  =  useState([])

      const [messages, setMessages] = useState([]);
      const [newMessage, setNewMessage] = useState('');
      const [conversations, setConversations] = useState([]);
      const [selectedUser, setSelectedUser] = useState(null);
      const op = useRef(null);
      const inputRef = useRef(null);
      const text = useRef("");
      const [idis, setIds] = useState(null);

      const chatId11 = user && `${user.uid}-${idis}`;
   
const chatId22 = user && `${idis}-${user.uid}`;
     // const chatId1 = user && user.uid;
    
     const handleNewMessageChange = (event) => {
      setNewMessage(event.target.value);


    }

     const [selectedSender,setSelectedSender] = useState(null)

const [selectedreceiver, setSelectedreceiver] = useState(null)
const [chatId1, setchatId1] = useState(null);
const [chatId2, setchatId2] = useState(null);
useEffect(()=>{
  setchatId1( user && `${user.uid}-${selectedSender === user.uid ? selectedreceiver && selectedreceiver : selectedSender && selectedSender}`
  ) 
  setchatId2(
  user && `${selectedreceiver === user.uid ? selectedSender &&  selectedSender : selectedreceiver && selectedreceiver  }-${user.uid}`
  )
}, [selectedSender, selectedreceiver])

  
    // console.log("this is the selectedreceiver", selectedreceiver)
// console.log("this is the SelectedSender", selectedSender)
     // Send message to Firebase Realtime Database
     const sendMessage = (event) => {
        event.preventDefault();

        

        const message = newMessage;
        const timestamp = new Date().getTime();
      
        if (!user) return;
      
        const chatRef =  app015.database().ref(`chats/${chatId1}`);
      
        chatRef.once('value', (snapshot) => {
          if (snapshot.exists()) {
            // Chat exists, push the new message youtube
            chatRef.push({
              message,
              sender: user.uid,
              receiver: user.uid ===  selectedreceiver ? selectedSender : selectedreceiver,
              timestamp,
              textid: nano,
               read: false
            });
          } else {
            // Chat doesn't exist, check if chatId2 exists
            const chatRef2 = app015.database().ref(`chats/${chatId2}`);
      
            chatRef2.once('value', (snapshot) => {
              if (snapshot.exists()) {
                // Chat exists, push the new message
                chatRef2.push({
                  message,
                  sender: user.uid,
                  receiver: user.uid ===  selectedreceiver ? selectedSender : selectedreceiver,
                  timestamp,
                  textid: nano,
                  read: false

                });
              } else {
                // Chat doesn't exist, create a new chat with chatId1
                chatRef.push({
                 
                      message,
                      sender: user.uid,
                      receiver: user.uid ===  selectedreceiver ? selectedSender : selectedreceiver,
                      timestamp,
                      textid: nano,
                      read: false
                      
                  
                });
              }
            });
          }
        });
      
        setNewMessage("");
        if( newMessage === ""){
        contentEditableRef.current.innerHTML = ""
        }
      };
      const [Imaged, setImaged ] = useState('')
      const fileInputRef = useRef(null);

      const [previews, setPreviews] = useState('')

    
      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64String = reader.result;
          setNewMessage((prev) => prev + " " + base64String); // append the base64-encoded image data to the existing message
          setPreviews(base64String);

          // Set the current text to the new base64-encoded image data
          inputRef.current =  `<div class="card flex justify-content-center"><Image className="sized" src="${base64String}" zoomSrc="${base64String}" alt="Image" class="resizedImages" width="250" preview /></div>
`  };
      };
        
        
      

      const [showPicker, setShowPicker] = useState(false);
      const pickerRef = useRef(null);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [pickerRef]);
    
      const handleButtonClick = () => {
        setShowPicker(!showPicker);
      };



      const handleImageOrVideos = (url) => {
        const fileExtension = url.split('.').pop().toLowerCase();
      
        if (fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'jpeg' || fileExtension === 'gif'  || fileExtension === 'img') {
          // If the URL is pointing to an image
          return `<div class="card flex w-50 justify-content-center"><Image class="sized"   src="${url}" zoomSrc="${url}" alt="Image" class="resizedImages" width="250"  preview /></div>`;
        } else if (fileExtension === 'mp4') {
          // If the URL is pointing to a video
          return `<video src="${url}" controls>Your browser does not support the video tag.</video>`;
        } else if (fileExtension === 'mp3') {
          // If the URL is pointing to an audio file
          return `<audio src="${url}" controls>Your browser does not support the audio tag.</audio>`;
        } else {
          // If the URL is not pointing to an image, video, or audio file, check if it's a YouTube link
          const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/; 
          const match = url.match(youtubeRegex);
          if (match) {
            // If the URL is a YouTube link, extract the video id
            const videoId = match[5];
            return `<div className="Fit" style="position: relative; padding-bottom: 56.25%; height: 300px, width: 300px">
            <iframe
            width="300"
            height="300"
            src='https://www.youtube.com/embed/${videoId}'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>



             
               </div>`;

          } else {
            // If the URL is not pointing to an image, video, or YouTube link, return the URL
            return url;
          }
        }
      };
    
 // const words = newMessage.split(' ');


 const generateMarkup = () => {
  
  const words = newMessage.split(' ');
  const elements = [];

  words.forEach((word, index) => {
    if (word.startsWith('http') || word.startsWith('https')) {
      const element = handleImageOrVideos(word) || (
        <a href={word} target="_blank" rel="noopener noreferrer">
          {word}
        </a>
      );
      elements.push( element);
    } else if (word.startsWith("data:image/")) {
      // If the word is a base64-encoded image data URL, create an <img> tag
      elements.push(`<div class="card flex justify-content-center"><Image className="sized" src="${word}" zoomSrc="${word}" alt="Image" class="resizedImages" width="250" preview /></div>`);
    }
  });

  return elements.join('');
};


const [BlockedMe, setBlockedMe] = useState('');

const [inputVal, setInputValue] = useState("");

const debouncedHandleChange = debounce((event) => {
  const inputValue = event.target.innerHTML;
  setNewMessage(inputValue);
  if (inputValue.length <= 0) {
    setNewMessage('');
  }
}, 300); 

const handleChange = (event) => {
  debouncedHandleChange(event);
};





 console.log("if this is the vals", newMessage)

/*
const handlePaste = (evt) => {
  const pasteData = evt.clipboardData.getData("text/plain");
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/i;
  const match = pasteData.match(youtubeRegex);

  if (match) {
    evt.preventDefault(); // prevent default paste behavior

    const videoId = match[5];
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.width = '50%';
    iframe.style.height = '50%';
    iframe.src = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    const parser = new DOMParser();
    const doc = parser.parseFromString(evt.clipboardData.getData('text/html'), 'text/html');
    const pastedElement = doc.documentElement;

    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(iframe);
    range.insertNode(pastedElement);
  }
};

*/
const handleEmojiSelect = (emo) => {
  console.log(emo);
 //  setNewMessage((prevMessage) => prevMessage + emo.unified);
  contentEditableRef.current.innerHTML = contentEditableRef.current.innerHTML+emo.native
       
        
    
}
    
const submits = () => {
  
  contentEditableRef.current.innerHTML = " "
}

const formatDate = (date) => {
        if (!date) {
          return "";
        }
        const timeDiffMs = new Date() - new Date(date);
        const timeDiffMSec = Math.floor(timeDiffMs / 1000);
        if (timeDiffMSec === 0) {
          return `right_now`;
        }
        const timeDiffSec = Math.floor(timeDiffMs / 1000);
        if (timeDiffSec < 60) {
          return `${timeDiffSec} sec `;
        }
        const timeDiffMin = Math.floor(timeDiffSec / 60);
        if (timeDiffMin < 60) {
          return `${timeDiffMin} min `;
        }
        const timeDiffHr = Math.floor(timeDiffMin / 60);
        if (timeDiffHr < 24) {
          return `${timeDiffHr} h `;
        }
        const timeDiffDay = Math.floor(timeDiffHr / 24);
        if (timeDiffDay < 2) {
          return `${timeDiffDay} day `;
        }else if(timeDiffDay < 30){
            return `${timeDiffDay} day's `;
        }
        const timeDiffMo = Math.floor(timeDiffDay / 30);
        if (timeDiffMo < 12) {
          return `${timeDiffMo} mo's `;
        }else  if (timeDiffMo < 1) {
            return `${timeDiffMo} mo `;
        }
        const timeDiffYr = Math.floor(timeDiffMo / 12);
        return `${timeDiffYr} yr's `;
      };
      console.log("if full image trigers", fullSizeImage);

const [pic,setpic] = useState(null);
const [named, setnamed] = useState(null);

const [mypic, setmypic] = useState(im)
const [myuser, setmyuser] = useState(null)


      useEffect(() => {
        if (!user) return;
      
        app015
          .database()
          .ref(`chats`)
          .on('value', (snapshot) => {
            if (!snapshot) return;
      
            const filteredChats = [];
      
            snapshot.forEach((childSnapshot) => {
              const chatValues = childSnapshot.val();
              const chatId = childSnapshot.key;
              const split = chatId.split('-');
              const chat = Object.values(chatValues);
      
              const otherUser = split.includes(user.uid)
      
              if (otherUser) {
                filteredChats.push(chat);
              }
            });
      
            setConversations(filteredChats);

            console.log("this are the filtered chats", filteredChats)
          });
      }, [user]);
      
    
      const handleDelete = (messageId) => {
        const chatRef = app015.database().ref(`chats/${chatId1}`);
            
        chatRef.once('value', (snapshot) => {
          if (snapshot.exists()) {
            const removeRef = app015.database().ref(`chats/${chatId1}`)
                .orderByChild('textid')
                .equalTo(messageId);
      
            removeRef.once('value', (removeSnapshot) => {
              if (removeSnapshot.exists()) {
                removeSnapshot.forEach((childSnapshot) => {
                  childSnapshot.ref.remove();
                });
              }
            });
          } else {
            // Chat doesn't exist, check if chatId2 exists
            const chatRef2 = app015.database().ref(`chats/${chatId2}`);
                
            chatRef2.once('value', (snapshot) => {
              if (snapshot.exists()) {
                const removeRef2 = app015.database().ref(`chats/${chatId2}`)     
                    .orderByChild('textid')
                    .equalTo(messageId);
      
                removeRef2.once('value', (removeSnapshot) => {
                  if (removeSnapshot.exists()) {
                    removeSnapshot.forEach((childSnapshot) => {
                      childSnapshot.ref.remove();
                    });
                  }
                });
              }
            });
          };
        });
      };
      





       //  app015.database().ref(`chats/${chatId}/${messageId}`).remove();
    


const handleRead = () => {
  const chatRef = app015.database().ref(`chats/${chatId1}`);

  chatRef.once('value', (snapshot) => {
    if (snapshot.exists()) {
      const ref = chatRef.orderByChild('receiver').equalTo(user && user.uid);

      ref.once('value', (snapshot) => {
        if (!snapshot) return;
        snapshot.forEach((childSnapshot) => {
          const message = childSnapshot.val();
          if (message.read === false) {
            chatRef.child(childSnapshot.key).update({ read: true });
          }
        });
      });
    } else {
      const chatRef2 = app015.database().ref(`chats/${chatId2}`);

      chatRef2.once('value', (snapshot) => {
        if (snapshot.exists()) {
          const ref2 = chatRef2.orderByChild('receiver').equalTo(user && user.uid);

          ref2.once('value', (snapshot) => {
            if (!snapshot) return;
            snapshot.forEach((childSnapshot) => {
              const message = childSnapshot.val();
              if (message.read === false) {
                chatRef2.child(childSnapshot.key).update({ read: true });
              }
            });
          });
        }
      });
    }
  });
};


       const  [setupidA, setSetupidA] = useState(null);
   
 const [setupDp, SetsetupDp] = useState(null);
       const [setupidB, setSetupidB] = useState(null);

       console.log("this are the uSerA Data chats frm M",setupidA)
const [activate, setActivate] = useState(false)
const [showBox, setShowBox] = useState(false)



useEffect(() => {
  if (loading !== undefined && !loading) {
    setTimeout(() => {
      if ( loading !== undefined && !loading) {
        window.location.href = "/";
      }
    }, 3000);
  }
}, [loading]);


const debouncedHandleUser = debounce((userId, sender, receiver, pic, name, isread) => {
 
 

  setSelectedUser(userId);
  setMessages(conversations[userId] || []);

  setnamed(name);
  setpic(pic);
  setSelectedSender(sender);
  receiver && setSelectedreceiver(receiver);
  setActivate(true)
 
}, 200); 



const handleUserClick = (userId, sender, receiver, pic, name, isread) => {
  debouncedHandleUser(userId, sender, receiver, pic, name, isread)
 
handleChatBoxClick();

isread && setShowBox(true);
}


useEffect(() => {
  handleRead();
}, [handleUserClick])
    
      const Ref = useRef(null)
      const [setup, setSetup] = useState(null)
      const [filtered, setSetupfilter] = useState(null)
    
   
            console.log("these is the setupidA withot map ", setupidA && setupidA);


            const [ids, setids] = useState(null)

const  [showUploa, SetshowUploa] = useState(true)




const [newMessages, setNewMessages] = useState({});
if(newMessages){
  console.log("newMessages messages is ", newMessages)

}


const [hasRead, sethasRead] = useState(null)

useEffect(() => {
   const users = [...Object.keys(conversations)].sort((a, b) => {
          const aTime = conversations[a].slice().reverse()[0].timestamp;
          const bTime = conversations[b].slice().reverse()[0].timestamp;
          return bTime - aTime;
        });
        
  users &&  users.map((userId) => {
   

     if(userId === selectedUser){
        
       const values =   conversations[userId]
        .slice()
        .reverse()[0].sender === user.uid && 
        conversations[userId]
          .slice()
          .filter((a) => a.read === false).length;
          
        sethasRead(values);

        const conversation = conversations[userId][0];
        const sender = conversation.sender === user.uid ? user.uid : conversation.sender;
        const receiver = conversation.receiver === user.uid ? conversation.sender : conversation.receiver;
        const dp = setupDp && setupDp[userId];
        const idA = setupidA && setupidA[userId];
        
        handleUserClick(userId, sender, receiver, dp, idA);
        
          setNewMessages((prev) => ({
            ...prev,
            [userId]: 0, // set the count for the selected conversation to zero
          }));

     

          Ref.current = null
        }else if(userId !== selectedUser){
        
        
           if(conversations[userId][0]?.sender !== user.uid ){

            setSetup(conversations[userId][0]?.sender !== user.uid && messages.filter((l) => l.sender.length).length);
            setSetupfilter(conversations[userId][0]?.sender !== user.uid  && conversations[userId].filter((l) => l.sender.length).length)
         
                      } 
        
           if(filtered > setup){


            Ref.current =    filtered
            

                           }else{
          Ref.current = null
                           }
     
                    }
                  })

                  const vals = []
               users &&   users.map((userId) => { 
                    conversations[userId][0].sender === user.uid ? vals.push(conversations[userId][0].receiver) : vals.push(conversations[userId][0].sender)
           })
setids(vals)





}, [conversations])
    
/*
   if(userId !== selectedUser){
        
          setStore(pre => pre && conversations[userId].length > pre[userId][0].length  )

          
          }
            
          
          useEffect(() =>  {

const val = document.getElementById('blockedperson').innerText;



you are seeing this because you this user has  blocked you!

}, [])
*/


const chatBoxRef = useRef(null);
const handleChatBoxClick = () => {
  scrollToRecentMessage();
};

const scrollToRecentMessage = () => {
  if (chatBoxRef.current) {
    const messages = chatBoxRef.current.getElementsByClassName("list-group-item");
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      lastMessage.scrollIntoView({ behavior: "smooth" });
    }
  }
};

useEffect(() => {
  scrollToRecentMessage();
}, [messages])

const [isFocused, setIsFocused] = useState(false);
const [content, setContent] = useState("");

const handleFocus = () => {
  setIsFocused(true);
};

const handleBlur = () => {
  setIsFocused(false);
};



console.log("it exists ", idis)

const contentEditableRef = useRef('');

const sendMesso = (event) => {
  event.preventDefault();
  console.log("does it exists ", idis)
   
  if(ids === user.uid) return alert("don't send message to yourself!!")
  const nano = nanoid();

  const message = newMessage ;

  const timestamp = new Date().getTime();

  if (!user) return;

  if(!idis) return
  const chatRef = app015.database().ref(`chats/${chatId11}`);
  
  chatRef.once('value', (snapshot) => {
    if (snapshot.exists()) {
      // Chat exists, push the new message
      chatRef.push({
        message,
        sender: user.uid,
        receiver: idis,
        timestamp,
        textid: nano,
        read: false

      });
    } else {
      // Chat doesn't exist, check if chatId2 exists
      const chatRef2 = app015.database().ref(`chats/${chatId22}`);
      
      chatRef2.once('value', (snapshot) => {
        if (snapshot.exists()) {
          // Chat exists, push the new message
          chatRef2.push({
            message,
                  sender: user.uid,
                  receiver: idis,
                  timestamp,
                  textid: nano,
                  read: false

          });
        } else {
          // Chat doesn't exist, create a new chat with chatId1
          chatRef.push({
            message,
            sender: user.uid,
            receiver: idis,
            timestamp,
            textid: nano,
            read: false
            
          });
        }
      });
    }
  });
  setNewMessage("");
  setPreviews("")
        if( newMessage === ""){
        contentEditableRef.current.innerHTML = ""
        }

};





const [showmuted, setshowmuted] = useState(false);


const [createmessage,  setCreatemesage] = useState(false);

const [searchval, setSearchVal] = useState(null)
const [searchId, setSearchId] = useState(null)
console.log("this is the val fi id  ", searchval) 

console.log("this is the seadcc tis fi id  ", searchId)




      const renderUsers = () => {
     
        const users = [...Object.keys(conversations)].sort((a, b) => {
          const aTime = conversations[a].slice().reverse()[0].timestamp;
          const bTime = conversations[b].slice().reverse()[0].timestamp;
          return bTime - aTime;
        });
    
 
        if(searchval){


          const users = [...Object.keys(conversations)].sort((a, b) => {
            const aTime = conversations[a].slice().reverse()[0].timestamp;
            const bTime = conversations[b].slice().reverse()[0].timestamp;
            return bTime - aTime;
          });
          
          users &&  users.map((userId) => {
  
    

            console.log("if this two are equal props shows props",    searchval && searchval.toLowerCase() === (setupidA && setupidA[userId] && setupidA[userId].toLowerCase()) )
            console.log(searchval && searchval)
            console.log(setupidA && setupidA)
         
            console.log("if this two are equal props shows good really", searchval && searchval.toLowerCase() , setupidA && setupidA[userId] &&  setupidA[userId].toLowerCase()  )
      
          })
        }

       console.log( 'show those who blocked me ', lockedmeUsers)


      
        return (
        
            <ListGroup>
            {users && users.map((userId) => (
searchval && searchval.length > 1 ?
searchval && searchval.toLowerCase() === (setupidA && setupidA[userId] && setupidA[userId].toLowerCase())  &&

 
<ListGroup.Item
key={userId}
active={userId === selectedUser}
style={{display: BlockedMe && BlockedMe.some(a => Array.isArray(a) && a.includes(setupidA && setupidA[userId[0]])) ? "none" : "block",
 background:  userId === selectedUser && "#fbfcff", borderRight: userId === selectedUser && "none", borderColor: userId === selectedUser &&"yellowgreen"}}
 onClick={() => {
  const conversation = conversations[userId][0];
  const sender = conversation.sender === user.uid ? user.uid : conversation.sender;
  const receiver = conversation.receiver === user.uid ? conversation.sender : conversation.receiver;
  const dp = setupDp && setupDp[userId];
  const idA = setupidA && setupidA[userId];
  const timestamp = conversations[userId]?.slice().reverse()[0].timestamp;

  handleUserClick(userId, sender, receiver, dp, idA, timestamp);
}}

onTouchEnd={
  () => {
    const conversation = conversations[userId][0];
    const sender = conversation.sender === user.uid ? user.uid : conversation.sender;
    const receiver = conversation.receiver === user.uid ? conversation.sender : conversation.receiver;
    const dp = setupDp && setupDp[userId];
    const idA = setupidA && setupidA[userId];
    const timestamp = conversations[userId]?.slice().reverse()[0].timestamp;
  
    handleUserClick(userId, sender, receiver, dp, idA, timestamp);
  }

}
>  


<MessageDrawer personid={conversations[userId][0].sender === user.uid ? conversations[userId][0].receiver :   conversations[userId][0].sender }
setmypic={setmypic} 
showmuted = {showmuted} 
setshowmuted = {setshowmuted}
setlockedmeUsers={setlockedmeUsers}
setmyuser={setmyuser} 
setupDp={setupDp}
SetsetupDp={SetsetupDp} 
userId={userId}  
setupid={setupidA} 
setSetupidA={setSetupidA}
conversations = {conversations} 
setup={setupidA} 
setupidA={[userId][0]} 
searchval={searchval}
setSearchId={setSearchId}
setBlockedMe = {setBlockedMe}
BlockedMe = {BlockedMe}
Ref =  {conversations[userId]
.slice()
.reverse()[0].receiver === user.uid && 
conversations[userId].filter(a => a.receiver === user.uid)
.slice()
.filter((a) => a.read === false).length
} 

SetupidA={setSetupidA}
SetupidB={setSetupidB} 
idB={user && user.uid} 
idA={ids} 

text={ userId !== selectedUser ?   conversations[userId].slice().reverse()[0].message.length > 50 ? conversations[userId].slice().reverse()[0].message.slice(0, 50) +"...":  conversations[userId].slice().reverse()[0].message : ""  } 
time ={ formatDate(conversations[userId].slice().reverse()[0].timestamp) }  /> 


</ListGroup.Item>  

:

<ListGroup.Item
key={userId}
active={userId === selectedUser}
style={{  display :  BlockedMe && BlockedMe.some(a => a &&  a.includes(setupidA && setupidA[userId[0]] )) && "none" , background:  userId === selectedUser && "#fbfcff", borderRight: userId === selectedUser && "none", borderColor: userId === selectedUser &&"yellowgreen"}}
onClick={() => {const conversation = conversations[userId][0];
  const sender = conversation.sender === user.uid ? user.uid : conversation.sender;
  const receiver = conversation.receiver === user.uid ? conversation.sender : conversation.receiver;
  const dp = setupDp && setupDp[userId];
  const idA = setupidA && setupidA[userId];
  const timestamp = conversations[userId]?.slice().reverse()[0].timestamp;
  
  handleUserClick(userId, sender, receiver, dp, idA, timestamp);}
  }




  onTouchEnd={
    () => {const conversation = conversations[userId][0];
      const sender = conversation.sender === user.uid ? user.uid : conversation.sender;
      const receiver = conversation.receiver === user.uid ? conversation.sender : conversation.receiver;
      const dp = setupDp && setupDp[userId];
      const idA = setupidA && setupidA[userId];
      const timestamp = conversations[userId]?.slice().reverse()[0].timestamp;
      
      handleUserClick(userId, sender, receiver, dp, idA, timestamp);}
  }
>  
{BlockedMe && BlockedMe.includes( conversations[userId][0].receiver === user.uid ?  conversations[userId][0].sender :  conversations[userId][0].receiver) 
  ? "" :  
<MessageDrawer
 personid={conversations[userId][0].sender === user.uid ? conversations[userId][0].receiver :   conversations[userId][0].sender }
setmypic={setmypic} 
showmuted = {showmuted} 
setshowmuted = {setshowmuted}
setlockedmeUsers={setlockedmeUsers}
setmyuser={setmyuser} 
setupDp={setupDp}
SetsetupDp={SetsetupDp} 
userId={userId}  
setupid={setupidA} 
setSetupidA={setSetupidA}
conversations = {conversations} 
setup={setupidA} 
setBlockedMe = {setBlockedMe} 
BlockedMe = {BlockedMe}
setupidA={[userId][0]} 
searchval={searchval}
setSearchId={setSearchId}
Ref =  {conversations[userId]
.slice()
.reverse()[0].receiver === user.uid && 
conversations[userId].filter(a => a.receiver === user.uid)
.slice()
.filter((a) => a.read === false).length
} 

SetupidA={setSetupidA}
SetupidB={setSetupidB} 
idB={user && user.uid} 
idA={ids} 

text={ userId !== selectedUser ?   conversations[userId].slice().reverse()[0].message.length > 50 ? conversations[userId].slice().reverse()[0].message.slice(0, 50) +"...":  conversations[userId].slice().reverse()[0].message : ""  } 
time ={ formatDate(conversations[userId].slice().reverse()[0].timestamp) }  /> }


</ListGroup.Item>  

))}
{ /* users && users.filter((userId) => (

 <ListGroup.Item
                key={user}
                active={userId === selectedUser}
                style={{ background:  userId === selectedUser && "#fbfcff", borderRight: userId === selectedUser && "none", borderColor: userId === selectedUser &&"yellowgreen"}}
                onClick={() => handleUserClick(userId, ( conversations[userId][0]?.sender === user.uid ? user.uid : user.uid),( conversations[userId][0]?.receiver === user.uid ? conversations[userId][0]?.sender : conversations[userId][0]?.receiver), setupDp && setupDp[userId] ,setupidA && setupidA[userId], conversations[userId].slice().reverse()[0].timestamp)}
              >  
<MessagedrawerShows
 personid={conversations[userId][0].sender === user.uid ? conversations[userId][0].receiver :   conversations[userId][0].sender }
 setmypic={setmypic} 
 setmyuser={setmyuser} 
  setupDp={setupDp}
   SetsetupDp={SetsetupDp} 
   userId={userId}  
   setupid={setupidA} 
    setSetupidA={setSetupidA}
     conversations = {conversations} 
     setup={setupidA} 
     setupidA={[userId][0]} 
     searchval={searchval}
     Ref =  {conversations[userId]
      .slice()
      .reverse()[0].receiver === user.uid && 
      conversations[userId]
        .slice()
        .filter((a) => a.read === false).length
        } 

     SetupidA={setSetupidA}
      SetupidB={setSetupidB} 
      idB={user && user.uid} 
       idA={ids} 
       
       text={ userId !== selectedUser ?   conversations[userId].slice().reverse()[0].message.length > 50 ? conversations[userId].slice().reverse()[0].message.slice(0, 50) +"...":  conversations[userId].slice().reverse()[0].message : ""  } 
         time ={ formatDate(conversations[userId].slice().reverse()[0].timestamp) }  />


              </ListGroup.Item>

         
        )) */}

     
</ListGroup>
        );
      }; 
    

      const [showtextArea, setShowTextArea] = useState(false)
      const [zoomLevel, setZoomLevel] = useState(1);


      const zoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
      };
    
      const zoomOut = () => {
       if(zoomLevel > 1 ) {
        setZoomLevel(zoomLevel - 0.1);
       }
      };
    

const [showBin, setshowBin] = useState(false)


function revert(){
  setShowTextArea(false)
  setIds(null);

}

const initialState = {};

messages.forEach((message) => {
  initialState[message.textid] = false
})




const [buttonState, setButtonState] = useState(initialState);
      const renderMessages = () => {
       // if (!selectedUser) return null;


     

     

     
        return (
          <>
        
            <ListGroup ref={chatBoxRef}>
            
              {messages.map((message) => (
                <ListGroup.Item key={message.textid}>
                  <div style={{display:"flex", position: "fixed", top: "0", zIndex:"102"}}>
  <button onTouchEnd={() => setShowBox(false)} onClick={() => setShowBox(false) } style={{background:"transparent", border:"none", color:"#fefeff"}}>
      <FontAwesomeIcon className='bchevro'  style={{paddingTop: "8px", fontSize:"1.6rem", marginLeft:"-7px", marginRight:"8px"}} icon={faChevronLeft}/>
    
  </button>
  <img  alt={named && named} className="mt-1 img-circle medium-image" src={pic && pic }/>
<Link style={{color: "gray",fontWeight: " bold",fontStyle:" italic", fontFamily: "helvantica", fontSmooth:"auto"}} to={`/profileComponents/Profiles/?id=${message.sender}`}
> 
 <h4 style={{marginTop: "14px"}}>{named && named } </h4>
</Link>               
            
                  </div>
             

 {message.sender === user.uid ? 
   
   
     


  <MessageA 
   mypic = {mypic} 
  fullSizeImage = {fullSizeImage}
   setFullSizeImage = {setFullSizeImage}
  setmypic={setmypic} 
  myuser={myuser}
   setmyuser={setmyuser}  
    setupidA={setupidA}
    setupidB={setupidB}
    hasRead ={hasRead}
     time ={formatDate(message.timestamp)}
       message={message.message}
       lockedmeUsers ={lockedmeUsers}
         setlockedmeUsers = {setlockedmeUsers}
      
       />
  : 
<MessageB
  pic={pic}  
 fullSizeImage = {fullSizeImage}
  setFullSizeImage = {setFullSizeImage} 
 named ={named} 
 setupidA={setupidA} 
 setupidB={setupidB} 
 personid={message.sender === user.uid ?  message.receiver : message.sender }
   message={message.message}
   lockedmeUsers ={lockedmeUsers}
    setlockedmeUsers = {setlockedmeUsers}
     time ={formatDate(message.timestamp)}/>
  
    
}
        

             
                        {message.sender === user.uid && (
                          <>
<button  onClick={() =>
              setButtonState((prevState) => ({
                ...prevState,
                [message.textid]: !prevState[message.textid],
              }))
            }  style={{background:"transparent", border:"none", color: "black", float: "right" ,marginLeft:"10px"}}>
<FontAwesomeIcon icon={faEllipsis}   />
</button>
                          
                     
                    {buttonState[message.textid] && (
                                          <Button   variant="link" style={{float: "right",marginTop:"-10px" }} onClick={() => handleDelete(message.textid)}>

                      <FontAwesomeIcon  style={{color:'darkred', fontSize:"1.1rem"}}  icon={faTrash} />
                      
                   </Button>
                     )}
                   </>
      )}
                  



                </ListGroup.Item>
              ))}
            </ListGroup>
            
                 </>
                  );
      };
                  
     /*   
                    className="container bg-danger  w-100 m-0 p-0   y-0 x-0"     
    style={{heigh : "100px"} debounce
      className={`panel messages-panel  ${showBox ? 'messosize' : "" } `}  */
/*
      const users = [...Object.keys(conversations)].sort((a, b) => {
        const aTime = conversations[a]?.slice()?.reverse()?.[0]?.timestamp;
        const bTime = conversations[b]?.slice()?.reverse()?.[0]?.timestamp;
        return bTime - aTime;
      });
      
      const messoLength = users && users.map((userId) => (
        conversations[userId]?.slice()
          .reverse()?.[0]?.receiver === user.uid &&
        conversations[userId]?.slice().filter(a => a.receiver === user.uid)
          .filter(a => !a.read)
          .length || 0
      ));
      
      const totalLength = messoLength.reduce((total, length) => total + (length ? length : 0), 0);
      */

      if (!user || !app015.database().ref('chats')) {
        return <div>Loading</div>;
      }



   
      return (
  <> 
  <>
     <Navbar  setLight={setdark} />
  </>

  <div style={{background: ifdark && " black"}} id={ifdark ? "darkmode" : "lightmode"} className={`${ifdark && "bg-dark darkmode "}  `}>

    <div  style={{ marginTop:"-15px", height:"fit-content"}} >
    {fullSizeImage &&
<div id="myModal" className="moda  " >
      <span onClick={() => setFullSizeImage(null)} className="close">&times;</span>
     
      <div style={{marginBottom: "100px", width: "100%",height: "100%", margin:"auto", alignItems: "center", display:"flex", flexDirection:"column" }}>
    <div style={{display:"inline-block", float:"right", marginTop: "-45px"}}>
    <span  onClick={zoomIn} style={{cursor:"pointer" }} className='m-3  text-light '>
      <FontAwesomeIcon className='hover-text-light' icon={faMagnifyingGlassPlus}/>
      </span> 

      <span  onClick={zoomOut}  style={{cursor:"pointer", color:zoomLevel > 1 && "white"}} className='m-3 hover-text-light ' >
        <FontAwesomeIcon className='' icon={faMagnifyingGlassMinus}/>
        </span>
    </div>
      
      <img style={{ width: `${50 * zoomLevel}%`, textAlign: "center" , justifySelf:"center", marginLeft:"auto", marginRight:"auto"}} zoomSrc={fullSizeImage} src={fullSizeImage} alt="Full-size Image" preview />
     
      </div>
    </div> }


  <div style={{height: "100vh",  position:"fixed", left:"0", top: "70px",bottom:"0", background:"azure"}}> {/*this uig */}
        <div   className={`contacts-list   ${showBox ?  "contacts-li" : "contacts-lili"}`}>
        
            <div className="inbox-categories  ">
                <div  onClick={() => setshowmuted(false)} data-toggle="tab" data-target="#inbox"  style={{color: showmuted && "black", borderBottomColor:"black"}}  className={`${!showmuted &&  "active"   }`}> Chats </div>
                <div onClick={() => setshowmuted(true)} className={`${showmuted && 'active'}`} data-toggle="tab"  data-target="#marked"> Muted </div>
            </div>


            <div className="tab-content  " >
                <div id="inbox" className="contacts-outter-wrapper tab-pane active ">
   {/*Top Search */}   
                        <input type="text"  className="form-control" value={searchval} onChange={(e) => setSearchVal( e.target.value)} name="search" placeholder=" Search" />
                        <span className="fa fa-search form-control-feedback"></span>
                      
             
      {/*list outer profile*/}   


  

                    <div className="contacts-outter ">
                    
                        <ul className="list-unstyled contacts">
                        {renderUsers()}
                            
                        </ul>
                    </div>
                </div>




               </div>

               </div>
</div>



<div     className={`${ !showBox && "dnoned"} backis`}
 style={{  marginBottom: "0", marginTop: "5px",marginBottom:"20px", height: "100vh"}} >
       
        <div className="tab-content   "  >
        {/*vwsm*/}    <div className="tab-pane message-body active  "  id="inbox-message-1" >
                <div className="message-top  bg-dark bgg asided" style={{position:"fixed", top:'0', zIndex:"101", background:"none", width: "fit-content"}} >
                {!selectedUser &&   !createmessage   && <button style={{background:"transparent", border:"none"}} onClick={() => setCreatemesage(true)} className="btn btn btn-success new-message bg-dark text-light  float-left">
                <FontAwesomeIcon 
                                 icon={faEnvelopeOpenText} 
                                style={{cursor:"pointer", color: "yellowgreen"}}
                                 type="submit"
                                  /> New Message</button>}

                    <div className="new-message-wrappe ">
                      {createmessage && <div className=" form-group">
                      <Users 
                       setCreatemesage = {setCreatemesage}
                      selectedUser={selectedUser} 
                      setId={setIds}
                      setShowTextArea= {setShowTextArea}
                    
        />
                        </div>    }

                        <div className="chat-footer new-message-textarea d-none h-10 positon-absolute top-0 z-index-3 bg-dark"  style={{zIndex:"4", }}>
                      
                            <InputTextarea className="send-message-text bg-light"></InputTextarea>
                            <label className="upload-file">
                                <input type="file" required="" className='bg-dark' />
                                
                                <FontAwesomeIcon 
                                 icon={faLink} 
                                style={{cursor:"pointer", color: "yellowgreen"}}
                                 type="submit"
                                  />

                            </label>
                            <button type="button" className="send-message-button btn-info">        
                                          <FontAwesomeIcon  icon={faPaperPlane} 
                                          style={{cursor:"pointer", color: "yellowgreen"}}
                                           type="submit" disabled={!selectedUser} />
</button>

                        </div>
                    </div>
                </div>
             
              
                <div   className={`{ message-chat  ${!showBox && "message-chated"} } bg-dark` } >
                  
                <div className="chat-body bg-success h-100  bg-dark" style= {{marginBottom:"60px"}}>
                               
                   
                {renderMessages()}

           
                

                       {showtextArea && <div style={{position: "absolute", top: "25%", bottom: "25%" , justifySelf:"center", alignItems:"center"}}>

                  <Button severity="danger" outlined onClick={revert}><FontAwesomeIcon icon={faTimes} /> </Button>
                          
{ lockedmeUsers.some(id => id === selectedreceiver) ? <div style={{background: "black", color: "white", position:"fixed" , bottom: "0"}}>  you are seeing this because this user blocked you! </div> :  
                       <Form className='bg-light' onSubmit={sendMesso}>         
                               <Form.Group >
                 {  
                    <div id="containered" className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2   w-100 " >
                    <img
                      src={mypic}
                      alt={user.uid}
                      style={{ width: "40px", height: "100%" }}
                    />
             
              <div
      className="input-box b-dark h-100 fom-control fom-control-lg mb-2 h-auto"
  ref={contentEditableRef}
  contentEditable={true}
  onInput={handleChange}
  dangerouslySetInnerHTML={{ __html:  generateMarkup() } }
  spellCheck={true}
  style={{
    height: 'fit-content',
   // minHeight: "50px",
    marginLeft: 'auto',
   minHeight: "fit-content",
    background:"white",
    marginRight: 'auto',
    overflow: 'scroll',
    width:  "40vw",
    border: "1px solid grey",
    padding:"20px 10px",
    color: "black",
    
     border: "1px solid #ccc", padding: "5px"
  }}
  placeholder={"Text here ..."}
  onFocus={handleFocus}
  onBlur={handleBlur} 
/>
<div style={{display:"flex", justifyContent:"space-evenly", background:"white"}}>


<input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  //onKeyDown = {ha}
  ref={fileInputRef}
  style={{ display: 'none' }} // hide the input element initially
  />

 <label className='positions' htmlFor="file-input" onClick={() => fileInputRef.current.click()}>
  <FontAwesomeIcon
    style={{ fontSize:"1.3rem", marginLeft:"10px", cursor: "pointer",color:"black"}}
    icon={faImages}
  />
</label>

 
<Button onClick={handleButtonClick} type="button" className='hideit ms-0 p-1 ml-3 text-mute'
  
  style={{ background:"transparent", border:"none"}} >  
 
  <FontAwesomeIcon   style={{ fontSize:"1.3rem",  color:"#ffcb4d", cursor:"pointer"}}  icon={faSmile} />
</Button>

{  showPicker && (    
<div ref={pickerRef}> 
  
  <Picker 
     data={data}
       onEmojiSelect={handleEmojiSelect}
      style={{position: "absolute",bottom: "100%",right: "0"}} />

</div>)
}

 
                    <button   style={{fontSize:"1.3rem", cursor:"pointer", background:"none", border:"none", hover: "green"}}  className="hovered ms-3 text-muted" >
                      <FontAwesomeIcon  icon={faPaperPlane} style={{ cursor:"pointer", color: "yellowgreen"}} type="submit"  />
                    </button>
               

</div>

 
                 

                 
                  </div>
      }
          </Form.Group>
                    </Form>  
                    
                   }
</div>
                 
                       }
                    </div>
          

           

          <div style={{width: "100%",height:"70px", background:"rgb(251, 252, 255)",backgroundColor:"#f8f8f8", position: "fixed", bottom: "0", zIndex: "101"}}> 
                    <div style={{width:"60%", background:"#fbfcff", height:"fit-content", zIndex:"102"}}  className="chat-foote ml-0 mr-0 w-70   position-fixed bottom-0 bg-light " >
                    
{ lockedmeUsers.some(id => id === selectedreceiver) ? <div style={{background: "black", color: "white", position:"fixed" , bottom: "0"}}>  you are seeing this because this user blocked you! </div> :  
                       <Form className='bg-light' onSubmit={(event) => sendMessage(event)}>         
                               <Form.Group >
                 {  activate &&
                    <div id="containered" className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2   w-100 " >
                  <div className="inheri" style={{backgroundColor:"white",
     width:"76vw", overflowY:"scroll", position:" absolute", bottom:"0", left:"0",right:"0", maxHeight:"150px", display:"flex"}}>
          <img
                      src={mypic}
                      alt={user.uid}
                      style={{ width: "40px", height: "100%" }}
                    />



          <div
      className="input-box b-dark h-100 fom-control fom-control-lg mb-2 h-auto"
  ref={contentEditableRef}
  contentEditable={true}
  onInput={handleChange}
  dangerouslySetInnerHTML={{ __html:  generateMarkup() } }
  spellCheck={true}
  style={{
    height: 'fit-content',
   // minHeight: "50px",
    marginLeft: 'auto',
   minHeight: "fit-content",
    background:"white",
    marginRight: 'auto',
    overflow: 'scroll',
    width:  "100%",
    border: "1px solid grey",
    padding:"20px 10px",
    color: "black",
     border: "1px solid #ccc", 
    borderRadius:"5px",
     padding: "10px 20px",

  }}
  placeholder={"Text here ..."}
  onFocus={handleFocus}
  onBlur={handleBlur} 
/>

        
           
<div style={{display:"flex", justifyContent:"space-evenly", background:"white", alignItems:"center"}}>


<input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  //onKeyDown = {ha}
  ref={fileInputRef}
  style={{ display: 'none' }} // hide the input element initially
  />

 <label className='positions' htmlFor="file-input" onClick={() => fileInputRef.current.click()}>
  <FontAwesomeIcon
    style={{ fontSize:"1.3rem", marginLeft:"10px", cursor: "pointer",color:"black"}}
    icon={faImages}
  />
</label>

 
<Button  onClick={handleButtonClick} type="button" className='hideit ms-0 p-1 ml-3 text-mute'
  
  style={{ background:"transparent", border:"none"}} >  
 
  <FontAwesomeIcon  style={{ fontSize:"1.3rem",  color:"#ffcb4d", cursor:"pointer"}} icon={faSmile} />
</Button>

{  showPicker && (    
<div ref={pickerRef}> 
  
  <Picker 
     data={data}
       onEmojiSelect={handleEmojiSelect}
      style={{position: "absolute",bottom: "100%",right: "0"}} />

</div>)
}

 
                    <button onClick={submits}  style={{fontSize:"1.3rem", cursor:"pointer", background:"none", border:"none", hover: "green", marginLeft:"10px", marginRight:"10px"}}  className="hovered ms-3 text-muted" >
                      <FontAwesomeIcon  icon={faPaperPlane} style={{ cursor:"pointer", color: "yellowgreen"}} type="submit"  />
                    </button>
               </div>
 
                    </div>         

                 
                  </div>
      }
          </Form.Group>
                    </Form>  
                    
                   }
                 
                      </div>



                </div>




             

               
            </div>

          


</div>
        </div>          
        
  </div>
</div>

</div>
 </>


  )



}



