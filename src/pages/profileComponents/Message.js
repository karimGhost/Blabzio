import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import { nanoid } from 'nanoid';
import 'firebase/auth';
import 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import im from '../../images/proxy.jpeg';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Button } from 'primereact/button';

import{
  faSun,
  faG,
  faSmile,
  faPaperPlane,
  faPaperclip,
  
  faImages,
 
} from '@fortawesome/free-solid-svg-icons';
import 'firebase/compat/firestore'; // import from compat version
import { event } from 'jquery';
const firebaseConfig013 = {

  apiKey: "AIzaSyALrSOduM9yvvHS_fR14WeCcgEhH5D8oCA",

  authDomain: "zenaglob.firebaseapp.com",

  databaseURL: "https://zenaglob-default-rtdb.firebaseio.com",

  projectId: "zenaglob",

  storageBucket: "zenaglob.appspot.com",

  messagingSenderId: "62411931925",

  appId: "1:62411931925:web:6581dc5950a7a2137fa91c",

  measurementId: "G-KDMQLLD16X"

  };
  

  const Message = ({ userid, useris,email }) => {
  
    const [isLoading, setIsLoading] = useState(false); // add loading state
    const { user, setUser, signOut } = useAuth();
  
    firebase.initializeApp(firebaseConfig013, 'app013');
    const app013 = firebase.app('app013');
  
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');

    const chatId1 = user && `${user.uid}-${userid}`;
   
    const chatId2 = user && `${userid}-${user.uid}`;


    const [previews, setPreviews] = useState('')
    const contentEditableRef = useRef('');


    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState("");
    
    const handleFocus = () => {
      setIsFocused(true);
    };
    
    const handleBlur = () => {
      setIsFocused(false);
    };
    
    
    const handleChange = (event) => {


      const inputValue = event.target.innerHTML;
      
      console.log("if this is the vals", inputValue)
      setNewMessage(inputValue);
      
      if(inputValue.length <= 0) {
      setNewMessage("")
      }
      }
    // Send message to Firebase Realtime Database
    const sendMessage = (event) => {
      event.preventDefault();
      const message = newMessage;
      const timestamp = new Date().getTime();
    
      if (!user) return;
    
      const chatRef = app013.database().ref(`chats/${chatId1}`);
      
      chatRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
          // Chat exists, push the new message
          chatRef.push({
            message,
            sender: user.uid,
            receiver: userid,
            timestamp,
            username: useris,
            textid: nanoid(),
            email: email,
            read: false
          });
        } else {
          // Chat doesn't exist, check if chatId2 exists
          const chatRef2 = app013.database().ref(`chats/${chatId2}`);
          
          chatRef2.once('value', (snapshot) => {
            if (snapshot.exists()) {
              // Chat exists, push the new message
              chatRef2.push({
                message,
                sender: user.uid,
                receiver: userid,
                timestamp,
                username: useris,
                textid: nanoid(),
                email: email,
                read: false  
              });
            } else {
              // Chat doesn't exist, create a new chat with chatId1
              chatRef.push({
                    message,
                    sender: user.uid,
                    receiver: userid,
                    timestamp,
                    email: email,
                    textid: nanoid(),
                    read: false
              });
            }
          });
        }
      });
    
      event.target.reset();
      setNewMessage("");
      if( newMessage === ""){
      contentEditableRef.current.innerHTML = ""
      }
      event.target.innerHTML = " "

    };
    
    /*
    // Listen for incoming messages from Firebase Realtime Database
    useEffect(() => {
      if (!user) return;
        
      app013
        .database()
        .ref(`chats`)
        .on('value', (snapshot) => {
          if (!snapshot) return;
    
          const filteredChats = [];

snapshot.forEach((childSnapshot) => {
  const chatValues = childSnapshot.val();
  const chatId = childSnapshot.key;
  const split = chatId.split("-");
  const chat = Object.values(chatValues);

  const includesUser = split.includes(user.uid);

  if (includesUser) {
    for (let i = 0; i < chat.length; i++) {
      const currentChat = chat[i];
      if (currentChat.sender === user.uid || currentChat.receiver === user.uid) {
        filteredChats.push(currentChat);
      }
    }
  }
});

    setMessages(filteredChats);
   

    console.log("this is   the FilteredChats show ", filteredChats);

        });
    }, [user]);
    */
    
    /*
    const handleNewMessageSubmit = async (e) => {
      e.preventDefault();
      
      if (!user) return;
      
      const message = {
        sender: user.uid,
        recipient: userid,
        text: newMessage,
        timestamp: new Date() ,
      };
      
      const conversationsRef = app013.firestore().collection('messages');
      const query = conversationsRef.where('sender', '==', user.uid).where('recipient', '==', userid);
      const snapshot = await query.get();
      
      if (!snapshot.empty) {
        // Update the existing conversation
        const conversationId = snapshot.docs[0].id;
        const conversationRef = conversationsRef.doc(conversationId);
        await conversationRef.set({
          sender: user.uid,
          recipient: userid,
          text: newMessage,
          timestamp: new Date() ,
        }, { merge: true });
      } else {
        // Create a new conversation
        const newConversation = {
      
            sender: user.uid,
            recipient: userid,
            text: newMessage,
            timestamp: new Date(),
       
        
        };
        await conversationsRef.add(newConversation);
      }
      
      setNewMessage('');
    };
    */
/*
    if (isLoading) {
      return <p>Loading...</p>; // render loading state while data is being fetched
    }
  */



    const [pic,setpic] = useState(null);
    const [named, setnamed] = useState(null);
    
    const [mypic, setmypic] = useState(im)
    const [myuser, setmyuser] = useState(null)
    const inputRef = useRef(null);
    const fileInputRef = useRef(null);
    

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
      //  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/; 
        const match = url.match();
        if (match) {
          // If the URL is a YouTube link, extract the video id
          const videoId = match[5];
          return `<div className="Fit" style="position: relative; padding-bottom: 56.25%; height: 300px, width: 300px"><iframe src="https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
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



const handlePaste = (evt) => {
const pasteData = evt.clipboardData.getData("text/plain");
//const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/i;
const match = pasteData.match();

if (match) {
  evt.preventDefault(); // prevent default paste behavior

  const videoId = match[5];
  const iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = '50%';
  iframe.style.height = '50%';
  iframe.src = ``;
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

const handleEmojiSelect = (emo) => {
console.log(emo);
//  setNewMessage((prevMessage) => prevMessage + emo.unified);
contentEditableRef.current.innerHTML = contentEditableRef.current.innerHTML+emo.native
     
      
  
}

  return (
    <div className='containerPad'  style={{background:"darkgrey", position: "absolute", top: "10%", left: "0", zIndex:"3", width: "fit-content" }}>
   
       
    {/* <ul>
     {messages.map((message) => (
       <li key={message.timestamp}>{message.message}</li>
     ))}
     
   </ul>
*/} 
    
 

 


   <form onSubmit={sendMessage}>
   <div id="containered" className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2   w-100 " >
                 <img
                   src={mypic}
                   alt="user"
                   style={{ width: "40px", height: "100%" }}
                 />
          
           <div
   className="input-box b-dark h-100 fom-control fom-control-lg mb-2 h-auto messonew"
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



<input
type="file"
accept="image/*"
onChange={handleImageUpload}
//onKeyDown = {ha}
ref={fileInputRef}
style={{ display: 'none' }} // hide fas the input element initially
/>

<label className='positions' htmlFor="file-input" onClick={() => fileInputRef.current.click()}>
<FontAwesomeIcon
 style={{ fontSize:"1.3rem", marginLeft:"10px", cursor: "pointer",color:"black"}}
 icon={faImages}
/>
</label>

<div className='smile_icon_small'>
<Button type="button" className='hideit ms-0 p-1 ml-3 text-mute'

style={{ background:"transparent", border:"none"}} >  

<FontAwesomeIcon  onClick={handleButtonClick} style={{ fontSize:"1.3rem",  color:"#ffcb4d", cursor:"pointer"}}  icon={faSmile} />
</Button>

{  showPicker && (    
<div ref={pickerRef}  style={{position:"absolute"}}> 

<Picker 
  data={data}
    onEmojiSelect={handleEmojiSelect}
   style={{position: "absolute",bottom: "100%",right: "0"}} />

</div>)
}

</div>


                 <button   style={{fontSize:"1.3rem", cursor:"pointer", background:"none", border:"none", hover: "green"}}  className="hovered ms-3 text-muted" >
                   <FontAwesomeIcon  className='paperplaneS' icon={faPaperPlane} style={{ cursor:"pointer", color: "yellowgreen"}} type="submit"  />
                 </button>
            </div>
</form>
              
              
              


 </div>
  );
};

export default Message;
