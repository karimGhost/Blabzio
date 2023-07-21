import React, { useState, useEffect ,useRef} from 'react';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
import { nanoid } from 'nanoid';
import 'firebase/auth';
import 'firebase/database';
import im from '../../images/proxy.jpeg';
import LazyLoad from 'react-lazy-load';
import { Link } from "gatsby";
import 'firebase/compat/firestore'; // import from fas compat version
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

const firebaseConfig019 = {

  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"

};





export default  function MessageB(props) {


  const [zoom, setzoom] = useState(false)



  const setFullSizeImage = props.setFullSizeImage;
  const fullSizeImage = props.fullSizeImage;
  
  
  
  useEffect(() => {
    const images = document.querySelectorAll(".resizedImages");
    images.forEach(image => {
      image.addEventListener("click", handleImageClick);
      return () => {
        image.removeEventListener("click", handleImageClick);
      };
    });
  }, []);
  
  function handleImageClick(event) {
    const clickedEl = event.target;
    if (clickedEl.tagName === "IMG") {
      // Do something with the clicked image youtube
      setFullSizeImage(clickedEl.src)
  }
  }
  
  const ifZomed ={
    position : zoom && "absolute",
    top: zoom && "0",
    left: zoom && "0",
    right:  zoom &&"0",

    bottom: zoom && "0",
zIndex: zoom && "20",
backgroundColor:  zoom && "rgba(0,0,0,0.11)"
  }

 // const handleImageOrVide = props.handleImageOrVideo;
const  newMessage = props.message;






const handleImageOrVideo = (url) => {
const fileExtension = url.split('.').pop().toLowerCase();

if (fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'jpeg' || fileExtension === 'gif'  || fileExtension === 'img') {
  // If the URL is pointing to an image
  return `<div class="card p-image-preview-container flex justify-content-center"><Image className="sized resizedImages" id="resizedImages"   src="${url}" zoomSrc="${url}" alt="Image" class="resizedImages" width="250"   /></div>`;
} else if (fileExtension === 'mp4') {
  // If the URL is pointing to a video
  return `<video src="${url}" controls>Your browser does not support the video tag.</video>`;
} else if (fileExtension === 'mp3') {
  // If the URL is pointing to an audio file
  return `<audio src="${url}" controls>Your browser does not support the audio tag.</audio>`;
} else {
  // If the URL is not pointing to an image, video, or audio file, check if it's a YouTube link
 // const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/;
  const match = url.match();
  if (match) {
    // If the URL is a YouTube link, extract the video id
    const videoId = match[5];
    return ` <div height={300}> <div className="Fit" id="Fit" style="position: relative; padding-bottom: 56.25%; height: auto, width: 50%"><iframe src="https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  allowfullscreen></iframe></div></div>`;
  } else {
    // If the URL is not pointing to an image, video, or YouTube link, return the URL
    return url;
  }
}
};

const generateMarkup = () => {

  if (!newMessage) {
    return null; // Or any default value or error handling you want
  }
const words =  newMessage.split(' ');
const elements = [];

words.forEach((word, index) => {
  if (word.startsWith('http') || word.startsWith('https')) {
    const element = handleImageOrVideo(word) || (
      <a href={word} target="_blank" rel="noopener noreferrer">
        {word}
      </a>
    );
    elements.push( element);
  } else if (word.startsWith("data:image/")) {
    // If the word is a base64-encoded image data URL, create an <img> tag i
    elements.push(`<div class="p-image-preview-container wid card flex justify-content-center"><Image id="resizedImages"  className="sized resizedImages" src="${word}" zoomSrc="${word}" alt="Image" class="p-image-preview resizedImages" width="250"  /></div>`);
  } else {
    elements.push(word + ' ');
  }
});


return elements.join('');
};


function resizeImage() {

const htmlString = generateMarkup();
const regex = /<img [^>]*>/g;

const matches =  htmlString ? htmlString.match(regex) || [] : [];
let modifiedHtmlString = htmlString;
for (const match of matches) {
const widthRegex = /width="(\d+)"/;
const heightRegex = /height="(\d+)"/;
const srcRegex = /src="([^"]+)"/; // add regex to extract src attribute

const widthMatch = match.match(widthRegex);
const heightMatch = match.match(heightRegex);
const srcMatch = match.match(srcRegex); // match src attribute

const width = widthMatch ? parseInt(widthMatch[1]) : undefined;
const height = heightMatch ? parseInt(heightMatch[1]) : undefined;
const newWidth = width ? Math.floor(width / 2) : undefined;
const newHeight = height ? Math.floor(height / 2) : undefined;
const widthAttr = newWidth ? ` width="${newWidth}"` : "";
const heightAttr = newHeight ? ` height="${newHeight}"` : "";
const src = srcMatch ? srcMatch[1] : ''; // extract the src value from the match
const newTag = `<Image src="${src}" id="resizedImages" style="width:100%; max-width:300px" class="resizedImages p-image-preview p-image-mask" width="250" preview  />`;

modifiedHtmlString = modifiedHtmlString.replace( 
  match,
  `<div class=" p-image-preview-container card flex justify-content-center imagewraper d-flex-column">${newTag}</div>`
);
}
return modifiedHtmlString;
}



const resizedHtml = resizeImage();
const parsedHtml = typeof resizedHtml === 'string' ? ReactHtmlParser(resizedHtml, { decodeEntities: false }) : null;

  return (
    <>


   
   <div className="message info ">
   <Link to={`/profileComponents/Profiles/?id=${props.personid}`}> 
             <img alt={props.named && props.named} className="img-circle medium-image" src={props.pic && props.pic }/>
           
                     </Link>
<div className="message-body ">


<div className="message-info">


   <h4 > { props.named && props.named} {props.id} </h4>

     <h5>  {props.time}</h5>
 </div>
 <hr/>
 <div className="message-text d-flex">
                                <div 
                                 
                                 style={ zoom ?  ifZomed :{ 
                                  overflow: "hidden", 
                                  msTextOverflow: "ellipsis", 
                                  whiteSpace: "pre-wrap", 
                                  width: "fit-content",
                                  maxWidth: "100", 
                                  wordBreak: "break-all", 
                                  overflowWrap: "break-all",
                                  display:  "flex",
                                  flexDirection: "column"
                                }  } 
                                className="w-100 message-text d-flex-column dflex"
                              
                              >



                               {parsedHtml} </div>
</div>

{fullSizeImage && (
    <div className="full-size-image-overlay" onClick={() => setFullSizeImage(null)}>
      <img src={fullSizeImage} alt="Full-size Image" />
    </div>
  )}



     
 </div>
                         <br/>
                     </div>
                  

                  
    </>
  )
  }

