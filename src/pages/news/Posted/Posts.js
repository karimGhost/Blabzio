import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser, { Comment } from "html-react-parser";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import 'quill/dist/quill.snow.css';
import Comments from './Comments';
import firebase from 'firebase/compat/app';
import { Toast } from 'primereact/toast';
import { nanoid } from 'nanoid';
import { useAuth } from '../../../Accounts/useAuth';
import { navigate } from 'gatsby';
import { Avatar } from 'primereact/avatar';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    import axios from "axios";
    import noImg from  "../../../images/no-image.jpg"

import "primereact/resources/primereact.min.css";  
import ProfileComments from './ProfileComments';
import { useLocation } from '@reach/router';
//import BootstrapButton from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";
import  Card  from "react-bootstrap/Card";
import { isObject } from "lodash";



const firebaseConfig2 = {
  apiKey: "AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",

  authDomain: "zenahubglob.firebaseapp.com",

  databaseURL: "https://zenahubglob-default-rtdb.firebaseio.com",

  projectId: "zenahubglob",

  storageBucket: "zenahubglob.appspot.com",

  messagingSenderId: "414119474155",

  appId: "1:414119474155:web:d93f733443172ecd739fae",

  measurementId: "G-B65PR7NNXS"

};


const firebaseConfig019 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};

const firebaseConfig909 = {

  apiKey: "AIzaSyAlILFCEiJQQJsQB2a0uidx61r9zfEVLWc",

  authDomain: "notifications-a1743.firebaseapp.com",

  databaseURL: "https://notifications-a1743-default-rtdb.firebaseio.com",

  projectId: "notifications-a1743",

  storageBucket: "notifications-a1743.appspot.com",

  messagingSenderId: "624660139679",

  appId: "1:624660139679:web:a73fd504b5ba8e7b005caa",

  measurementId: "G-BCF42GY6H1"

};
export default function Posts(props) {
  const toast = useRef(null)
const id = props.id;
const profileImg = props.profileImg;
const username = props.username;


  const [cards, setCards] = useState([]);
  const [Edits, setEdits] = useState(true)
  const [editing, setEditing] = useState({});
const [CommentIt, setCommentIt] = useState(false)
const { user,setUser, loading,signOut } = useAuth();
const onHide =props.onHide 

const setonHide = props.setonHide

  firebase.initializeApp(firebaseConfig2, 'app11');
  const app4 = firebase.app('app11');
//const app4 = app4.database();



const  nano = nanoid();



async function handleoffed(id)  {


  try {
    const commentRef = app4.database().ref("Replies/replied");
    const snapshot = await commentRef.orderByChild("ip").equalTo(id).once("value");
    snapshot.forEach((childSnapshot) => {
      // Check if the child has a matching ID and delete it if it does
      if (childSnapshot.val().ip === id) {
        commentRef.child(childSnapshot.key).remove();
      }
    });
  } catch (error) {
    console.log(error);                                                                                                                              
  }

};




async function handleDelete(id)  {



  try {

    const commentRef = app4.database().ref("commentpost");
    const snapshot = await commentRef.orderByChild("ip").equalTo(id).once("value");
    snapshot.forEach((childSnapshot) => {
      // Check if the child has a matching ID and delete it if it does
      if (childSnapshot.val().ip === id) {
        

        commentRef.child(childSnapshot.key).remove();


      }
    if(childSnapshot.val().ip === id){
      
        handleoffed(childSnapshot.val().id)
    }
      })
  
      setonHide(true)
  } catch (error) {
    console.log(error);
  }


   
}




async function handleDismiss(id)  {
 
  handleDelete(id)

  try {
    const commentRef = app4.database().ref("comments/cards");
    const snapshot = await commentRef.orderByChild("id").equalTo(id).once("value");
    snapshot.forEach((childSnapshot) => {
      // Check if the child has a matching ID and delete it if it does
      if (childSnapshot.val().id === id) {
        commentRef.child(childSnapshot.key).remove();
      }
    });

  } catch(error){
    console.log(error)
  }
   

 
  
 
};




const handlexits = (id)  => {

  setCards((cards) => cards.filter((card) => card.id !== id));
  setcardid((cardid) => cardid.filter((car) => car.id !== id))

  setEditing((editing) => {
    const { [id]: _, ...rest } = editing;
    return rest;

 
});




setonHide(true)

setHasdata("")
}


const apps2 = firebase.initializeApp(firebaseConfig019, 'app2');
  const app2 = firebase.app('app2') 

  const nansid = nanoid();
  const apps9 = firebase.initializeApp(firebaseConfig909, 'app9');
  const app9 = firebase.app('app9');

  const [cardid, setcardid] = useState([]);

async function handledata(id) {
  try {
    const snapshot = await app4.database().ref("comments")
      .orderByChild("id")
      .equalTo(id)
      .once("value");
    if ( snapshot && snapshot.exists()) {
       await app4.database().ref(`comments/`).update({
        cards,
      });
     //console.log(exists)

  
   
     // Retrieve the list of followers for the user who posted the new item
 
 
    } else {
      const userRef = app4.database().ref(`comments/`);
      userRef.update({
         cards
      });
          //console.log(success)
      
             
             
    }
  
  } catch (error) {
    console.log(error);
         //console.log(error)

  }

  
  const profilesRef = app2.database().ref(`profile/`);

  profilesRef.once('value', (snapshot) => {
    snapshot.forEach((profileSnapshot) => {
      const followers = profileSnapshot.child('followers').val();
      if (followers && Object.keys(followers).includes(user.uid)) {
        const userId = profileSnapshot.key;
        console.log("User with ID ", userId, " has ", user.uid, " in their followers");
        // Do something with the userId here

        // Add a new notification for this follower
        const notification = {
          receive: userId,
          usersend: user.uid,
          cardid,
          content: `${user.uid} posted a new message: ${cardid}`,
          viewed: false,
        };
        
  const postsRef = app9.database().ref(`users/${userId}/posts/`);
  const newPostRef = postsRef.push();
  newPostRef.set({
   userId,
   cardid
  }).then(() => {
    console.log("Post added successfully");
    setcardid([]);
  }).catch((error) => {
    console.error("Error adding post:", error);
  });


 

}
    })
  })

    }        



const handleClick = () => {
  setCards((cards) => [
    ...cards,
    {
      id: nano,
      message: "",
      font: "sans-serif",
      showCommentBox: "",
      liked: "0",
      disliked: "1",
      profile: profileImg,
      user: username,
      datePosted: new Date(),
      mail: user.email,
      userId: user.uid,
     
    },
  ]);



setcardid((cardid) => [
  ...cardid,
  {
    id: nano,
    message :"",
    userid : user.uid,
    user: username,
    datePosted: new Date(),
  },
]);


  setEditing((editing) => ({ ...editing, [cards.length]: true }));
  setonHide(false)
};








useEffect(() => {
  const comments = app4.database().ref("comments");

  const comment = comments.on('value', (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      setCards([]);

      return;
    }

    
    if (data && data.cards) {
      const cardArray = Object.values(data.cards);
      const updatedCardArray = cardArray.map((card) => {
        return {
          ...card,
          showCommentBox: false,
        };
      });

      setCards(updatedCardArray);
if(user){
      updatedCardArray.forEach((card) => {
        if (card.mail ===  user.email) {
          card.profile = profileImg;
          card.user = username;
        }

   

      });



   if (id) {
  const cardWithId = updatedCardArray.find((card) => card.id === id);

  if (cardWithId) {
    updatedCardArray.push(cardWithId);
  }
}
     
      }

      const editingObject = Object.fromEntries(
        cardArray.map((card) => [card.id, true])
      );
      setEditing(editingObject);
    }
  });
}, [user, profileImg, username]);




  




 // console.log('How are there the the hare these commets ',cards)

 const handleComment = (id) =>{

  setCards((cards) =>
    cards.map((card) =>
      card.id === id ? { ...card, showCommentBox: true } : card
    )
     
  );



  handledata(id)





};


const handlecancel = (id) =>{
  setCards((cards) =>
    cards.map((card) =>
      card.id === id ? { ...card, showCommentBox: false } : card
    )
  );
};



  const handleEdit = (id, newMessage) => {
      setCards((cards) =>
        cards.map((card) =>
        card.id === id ? { ...card, message: newMessage } : card
      )
    );

    setcardid((cardid) =>
    cardid.map((car) =>
    car.id === id ? { ...car, message: newMessage } : car
  )
);
   

  };
  
 

  useEffect(() => {
    cards.forEach(async (card) => {
      if (!card.user) {
        const userId = card.userid; // Get the userId from the card object
        const commentRef = app4.database().ref("comments/cards");
  
        try {
          const snapshot = await commentRef
            .orderByChild("userId")
            .equalTo(userId)
            .once("value");
  
          const updates = {};
  
          snapshot.forEach((childSnapshot) => {
            updates[childSnapshot.key] = null;
          });
  
          await commentRef.update(updates);
        } catch (error) {
          console.error("Error deleting card data:", error);
        }
      }
    });
  }, [cards]);
  

  const handleCommen = (id) =>{
    setEditing((editing) => ({ ...editing, [id]: false }));

  };
  


  const handlePost = (id) => {
    setEditing((editing) => ({ ...editing, [id]: true }));
    handledata(id)
    setonHide(true)

 setHasdata("")
   
  };
  


const formatDate = (date) => {
  if (!date) {
    return "";
  }
  const timeDiffMs = new Date() - new Date(date);
  const timeDiffSec = Math.floor(timeDiffMs / 1000);
  if (timeDiffSec < 60) {
    return `${timeDiffSec} sec ago`;
  }
  const timeDiffMin = Math.floor(timeDiffSec / 60);
  if (timeDiffMin < 60) {
    return `${timeDiffMin} min ago`;
  }
  const timeDiffHr = Math.floor(timeDiffMin / 60);
  if (timeDiffHr < 24) {
    return `${timeDiffHr} h ago`;
  }
  const timeDiffDay = Math.floor(timeDiffHr / 24);
  if (timeDiffDay < 30) {
    return `${timeDiffDay} day ago`;
  }
  const timeDiffMo = Math.floor(timeDiffDay / 30);
  if (timeDiffMo < 12) {
    return `${timeDiffMo} mo ago`;
  }
  const timeDiffYr = Math.floor(timeDiffMo / 12);
  return `${timeDiffYr} yr ago`;
};

const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => { setTopRightModal(!topRightModal) };




const [hasdata, setHasdata] = useState("")



async function snoop(id) {
  const comments = app4.database().ref("comments/cards")
  .orderByChild("id")
  .equalTo(id)
  .once('value')
  .then((snapshot) => {
    if (snapshot.exists()) {
      const comments = [];
      snapshot.forEach(childSnapshot => {
        const comment = childSnapshot.val();
    
        comments.push(comment);
      });




      if(comments){
   setHasdata(comments[0].message)
   
      }
                                                    setCards((cards) => [        ...cards,        {      
                                                      id: nanoid(),  
                                                          message: "",       
                                                             copied: comments,  
                                                        font: "sans-serif",   
                                                            showCommentBox: "", 
                                                                     liked: "0", 
                                                          disliked: "1",   
                                                                 profile: profileImg,   
                                                                        user: username,  
                                                                                datePosted: new Date(), 
                                                                                userId: user.uid,
                                                                                         mail: user.email  
                                                                                              },      ]);


                                                                                              setcardid((cardid) => [        ...cardid,        {      
                                                                                                id: nanoid(),  
                                                                                                    message: "",       
                                                                                                       copied: comments,    
                                                                                                           profile: profileImg,   
                                                                                                                  user: username,  
                                                                                                                          datePosted: new Date(), 
                                                                                                                          userId: user.uid,
                                                                                                                               
                                                                                                                                        },      ]);
      setEditing((editing) => ({ ...editing, [cards.length]: true }));
      setonHide(false)
    }
 
  });

  }

  if(hasdata){
    console.log("hasdata", hasdata)
  }

  const [editorHtml, setEditorHtml] = useState('');


  const handleImagePaste = async (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
  
    // Check if the pasted data is an image URL
    if (isImageUrl(pastedData)) {
      // Fetch the image URL and convert it to an HTML image tag
      try {
        const response = await axios.get(pastedData, { responseType: 'blob' });
        const imageUrl = URL.createObjectURL(response.data);
        const imgTag = `<img src="${imageUrl}" alt="Pasted Image" />`;
  
        // Insert the image tag into the editor
        const newEditorHtml = editorHtml + imgTag;
        setEditorHtml(newEditorHtml);
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    }
  
    // Check if the pasted data is a YouTube link
    if (isYoutubeLink(pastedData)) {
      // Extract the YouTube video ID from the link
      const videoId = extractYoutubeVideoId(pastedData);
  
      // Create an HTML iframe tag for embedding the YouTube video
      const iframeTag = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  
      // Insert the iframe tag into the editor
      const newEditorHtml = editorHtml + iframeTag;
      setEditorHtml(newEditorHtml);
    }
  };
  
  // Helper function to check if a string is a valid image URL
  const isImageUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
  };
  
  // Helper function to check if a string is a valid YouTube link
  const isYoutubeLink = (link) => {
    return link.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/) !== null;
  };
  
  // Helper function to extract the YouTube video ID from a link
  const extractYoutubeVideoId = (link) => {
    const videoIdMatch = link.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return videoIdMatch[3];
    }
    return '';
  };
  




const location = useLocation();
let isBlogActive;

if (location.pathname.startsWith(`/profileComponents/${props.userId}`) ){
  isBlogActive = true;
} else {
  isBlogActive = false;
}

let bg ;
 if(location.pathname.startsWith('/profileComponents/Profiles')){
bg = true;
}else{
  bg = false;
}
useEffect(() => {
 if(cards){

 if(props.Bio){
 
 const profs = cards.filter((card) =>   props.Bio === card.user);
 const legth =profs.length
 props.setLength(legth)
 }
 }
}, [cards ])


const overflowWrap ={
  overflowWrap:"break-word",
  wordBreak:"break-word"
  
}


useEffect(() => {
  if( props.isBlog){
     const val = cards.filter((card) =>  props.isBlog && props.users === card.user );
    const vv = val.length
   vv && props.setLe(vv)
  }
}, [cards, props.isBlog])


  return(

    <div className={`pad ${props.dark && "darken"   }`} >

<Modal
  animationDirection='right'
  show={topRightModal}
  tabIndex='-1'
  setShow={setTopRightModal}
>
  <Modal.Dialog position='top-right' side>
    <Modal.Body>
      <Modal.Header className='bg-dark text-white'>
        <Modal.Title>Finish setting Account</Modal.Title>
        <Button
          color='none'
          className='btn-close btn-close-white'
          onClick={toggleShow}
        ></Button>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-3 text-center'>
            <i className='fas fa-shopping-cart fa-4x text-info'></i>
          </div>

          <div className='col-12'>
            <p style={{fontSize: "1rem", textAlign:"center"}} className="bold">Please Finish setting Up your Account!</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color='dark' onClick={() => navigate('/ProfilePage/Profile') }>yea sure!</Button>
        <Button outline color='danger' onClick={toggleShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Body>
  </Modal.Dialog>
</Modal>
   
   <div className="App " style={{   margin: "auto" }}>

      <Toast ref={toast} />
     {/* <h1>Notifications {cards.length}</h1> */}
{!isBlogActive && <div>      <div className="mb-4 mt-5" style={{ width: "80%", margin:"auto", height: "50px", justifyContent: "center", display: "flex" , marginLeft: "15%"}}>
    
     
  <Avatar 
        className="rounded-circle shadow-1-strong me-3 smally mr-2 "
        image={profileImg}
        alt="avatar"
        size="large" shape="circle"
        style={{display: bg && "none ", marginTop:" -5px"}}/>     <button disabled={!user} className="bgpost" style={{textShadow:"none",  zIndex: "5", width: "80%", height: "40px", borderRadius:"20px", color: "gray", border: props.dark ? "1px solid black"  : "1px solid gray", background: props.dark && "#141515" , display: bg && "none " }} 
         onClick={handleClick}> Whatchu wanna blab! </button>
      </div>
 </div>} 

      {cards.slice().reverse().map((card) => (
  <div key={card.id}  className=""  style={{   marginLeft:"auto",marginRight:"auto" }}>


{!editing[card.id] ? (
<div className="pp d-flex paddin jusify-center" style={{background:"", width:"95vw", backdropFilter: "blur(25px)",  zIndex: "105", position: "relative", top: "10px", left: "0", right: "0"}}>
<div className="autoaddi" style={{margin:"auto", position:"relative"}}>
  <Editor
    onPaste={handleImagePaste}

    value={card.message + typeof hasdata === "object" ?  `<br/> <br/> <span className="bg-dark disabled bgeditor w-100 h-100"> <h1 style=${ overflowWrap } className="h1Edit bg-dark"> ${hasdata.title && hasdata.title}</h1> <img  className="m-auto" src= ${hasdata.images[3] ?  hasdata.images[3]: noImg}/>  <br/>   <p style=${ overflowWrap } className="textEdi">${hasdata.paragraphs && hasdata.paragraphs }</p> </span>` : hasdata}
    onTextChange={(e) => handleEdit(card.id, e.htmlValue)}
    className="ql-snow ql-editor-custom customed "
    style={{ height: "320px", overflow: "scroll", width: "100%" ,marginLeft: "auto", marginRight: "auto"}}
  />

<Button
  label={editing[card.id] ? "Edit" : "post"}
  icon="pi pi-upload"
  style={{zIndex: "3",position: "absolute", right: "0", bottom:"0"}}
  className=" p-button-dark p-button p-mt-2 p-2 bg-dark"
  onClick={() => handlePost(card.id)}
/> 


<Button     
            icon="pi pi-times"
            className="p-button-danger p-button p-mt-2 p-0 m-0 exitbuttons"
            style={{zIndex: "3",position: "absolute", top: "0", right: "0"}}

            onClick={() => handlexits(card.id)}
          />
</div>

</div>

) : (
<> </>

)}   
{!onHide  && <div   onClick={() => handlexits(card.id)} style={{background:"rgba(250, 247, 247, 0.16)", position:"fixed", top: "0", left: "0", right: "0",bottom:'0', zIndex:"100", backgroundColor:"rgba(100,100,100,0.21)", display:"flex", justifyContent:"center", width:"100vw", marginRight:"-10px"}}></div>}
  <div className="mb-2  mx-0" >     
  {props.isBlog && props.users === card.user ||   props.Bio === card.user ?  username && <ProfileComments idd={props.userId} fullSizeImage ={props.fullSizeImage}
setFullSizeImage ={props.setFullSizeImage} dark={props.dark}   Bio ={props.Bio} userData= {props.userData} userId={card.userid}  copied={card.copied} shared ={card.shared} snoop={() => snoop(card.id)}  datePosted ={formatDate(card.datePosted)} ids={card.id} profileuser={profileImg} user={username ? username : "Anonymous" }   profileImg = {card.profile} username={card.user} liked={card.liked}    handleCommen={() => handleCommen(card.id)} handlePost = {() => handlePost(card.id)}  handleDismiss = {()  =>  handleDismiss(card.id)} card = {card.font} showCommentBox = {card.showCommentBox} handlecancel={() => handlecancel(card.id)} handleComment={() => handleComment(card.id)}  posted ={card.message} /> 
  : null }

  </div>
 <div className="mb-2  w-100" >    
{ !props.isBlog && !props.Bio &&
<Comments   fullSizeImage ={props.fullSizeImage}setFullSizeImage ={props.setFullSizeImage} useruid={user.uid} dark ={props.dark} userId={card.userId} copied={card.copied} shared ={card.shared} snoop={() => snoop(card.id)}  datePosted ={formatDate(card.datePosted)} ids={card.id} profileuser={profileImg} user={username ? username : "Anonymous" }   profileImg = {card.profile} username = {card.user} liked ={card.liked}    handleCommen={() => handleCommen(card.id)} handlePost = {() => handlePost(card.id)}  handleDismiss = {()  =>  handleDismiss(card.id)} card = {card.font} showCommentBox = {card.showCommentBox} handlecancel={() => handlecancel(card.id)} handleComment={() => handleComment(card.id)}  posted ={card.message} /> 

}
</div>





        </div>
      ))}
    </div>
    </div>
  );

}


const renderHeader = () => {
  return (
    <span className="ql-formats" style={{width:  "70%"}}>
            <select className="ql-font" defaultValue="">
        <option value="Open Sans">Open Sans</option>
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>

      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
    
    

    </span>
  
  );
};


