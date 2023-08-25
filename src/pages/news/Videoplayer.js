import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import video from "../../images/anim.mp4";
import * as Video from "../../styles/Video.scss";
import '../../styles/Video.scss';
import { navigate } from 'gatsby';
import { Avatar } from 'primereact/avatar';
import { InputTextarea } from "primereact/inputtextarea";
import 'primeicons/primeicons.css';
import { useAuth } from '../../Accounts/useAuth';
  function VideoPlayer(props) {

    const {user} = useAuth();


   const  setImg = props.setImg;
const setUser = props.setUser;

const  videos= props.videoplay ;



    const [likesAmount, setLikesAmount] = useState('');
  
    const videoRef = useRef(null);
    const barRef = useRef(null);
    const durationRef = useRef(null);
    const rangeRef = useRef(null);
    const commentsCountRef = useRef(null);
    const commentsCount2Ref = useRef(null);
    const commentsListRef = useRef(null);
    const overlayRef = useRef(null);
    const closeOverlayRef = useRef(null);
    const commentsContainerRef = useRef(null);
    const closeCommentsRef = useRef(null);
    const likesRef = useRef(null);
    const likesIconRef = useRef(null);
const setRecordedVideo = props.setRecordedVideo;
    const [showNull, setShowNull] = useState(null)
    useEffect(() => {
      loadComments();

    if(showNull === null){
      setShowNull(true);
    }else{
      setShowNull(false);

    }



    videoRef.current.addEventListener('timeupdate', updateProgress);

    // Clean up the event listener when the component unmounts
    return () => {
      videoRef.current.removeEventListener('timeupdate', updateProgress);
    };



    }, []);
  

function setNull(){

  setShowNull(false);

}


const Image =props.Image;
const  Useris = props.Useris;

   
    const displayTime = (time) => {
      const mins = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      seconds = seconds <= 9 ? `0${seconds}` : seconds;
      return `${mins}:${seconds}`;
    };  
  


    const updateProgress = () => {
      if (videoRef.current && barRef.current && durationRef.current) {
        barRef.current.style.width = `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%`;
     
        if (durationRef.current && durationRef.current.textContent) {
          durationRef.current.textContent = `${displayTime(videoRef.current.currentTime)} : ${displayTime(videoRef.current.duration)}`;
        }
     
      }
    };
  
    const setProgress = (e) => {
      const time = e.nativeEvent.offsetX / rangeRef.current.offsetWidth;
      videoRef.current.currentTime = time * videoRef.current.duration;
    };
  
    const activateComments = () => {
      commentsContainerRef.current.classList.add("comments-active");
      videoRef.current.pause();
      if (videoRef.current.pause) {
        videoRef.current.style.cursor = "pointer";
      }
    };
  
    const deactivateComments = () => {
      if (videoRef.current.pause) {
        commentsContainerRef.current.classList.remove("comments-active");
        videoRef.current.play();
        videoRef.current.style.cursor = "default";
      }
    };

    const [loadedComments, setLoadedComments] = useState([]);

const loadComments = () => {
  setLoadedComments(props.comments);
};


const updateLikes = (id) => {
  setRecordedVideo(prevRecordedVideo =>
    prevRecordedVideo.map(video => {
      if (video.id === id) {
        const updatedLikes = [...video.likes]; // Likes as an array

        const userLiked = updatedLikes.includes(user.uid);

        if (userLiked) {
          // If user has already liked, remove their like
          const updatedLikesWithoutUser = updatedLikes.filter(uid => uid !== user.uid);
          if (likesIconRef.current) {
            likesIconRef.current.src = "https://assets.codepen.io/2629920/heart.png";
          }
          return {
            ...video,
            likes: updatedLikesWithoutUser
          };
        } else {
          // If user hasn't liked, add their like
          likesIconRef.current.src = "https://assets.codepen.io/2629920/heart+%281%29.png";
          return {
            ...video,
            likes: [...updatedLikes, user.uid]
          };
        }
      }
      return video;
    })
  );
};
    const darkmode = useRef(null)
    
    const [value, setValue] = useState({
      userName: Useris,
      timePosted: "2hrs ago",
      profilePhoto: Image,
      comment: "",
      userid : user ? user.uid : "" ,
      id: nanoid()
    });

function Comment(id){
  setRecordedVideo(prevRecordedVideo => 
    prevRecordedVideo.map(video => {
      if (video.id === id) {
        return {
          ...video,
          comments: [...video.comments, value]
        };
      }
      return video;
    })
  );
console.log("values as is ", props.recordedVideos )
  // After adding the comment, reset the value state to clear the comment field
  setValue(prevValue => ({ ...prevValue, comment: '' }));
}
const [isPlaying, setIsPlaying] = useState(true);
const [Visibility, setVisibility] = useState(false);
const togglePlay = () => {
  if (videoRef.current) {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }
};



const [videoStates, setVideoStates] = useState(
  props.recordedVideos.map(video => ({ id: video.id, isVisible: false }))
);

const toggleVisibility = (id, isVisible) => {
  const updatedVideoStates = videoStates.map(videoState =>
    videoState.id === id ? { ...videoState, isVisible } : videoState
  );
  setVideoStates(updatedVideoStates);
};

    return (
      <div >
      <div style={{ background: darkmode.current   ? "black" : "white"}} className="ConBod " >
        <div className="containered">
         {showNull &&     <div className="overlay"  ref={overlayRef}>
         <i   className="caretpi pi pi-caret-right over "    style={{ display: videoStates.find(vs => vs.id === props.id).isVisible ? 'block' : 'none' }}></i>

          <div className="howto">
              <div className="explain">
                <ul className="explain-list">
                  <li className="explain-details">
                    <h2 className="explain-details-head">Likes</h2>
                    <span className="icocolor explain-details-desc">Click the <span className="icon">
                      <img src="https://assets.codepen.io/2629920/heart.png" alt=""/>
                    </span> to set a like on the video.</span>
                  </li>
                  <li className="explain-details">
                    <h2 className="explain-details-head">Comments</h2>
                    <span className="explain-details-desc icocolor">Click the <span className="icon">
                      <img src="https://assets.codepen.io/2629920/chat.png" alt=""/>
                    </span>view comments.</span>
                  </li>
                </ul>
                <div className="explain-video">
                  <h2 className="explain-details-head explain-video">Video</h2>
                  <div className="explain-video-bar">
                    <div className="explain-video-bar-w"></div>
                  </div>
                  <span className="explain-details-desc icocolor">Click through the video to navigate to a specific timeline.</span>
                </div>
              </div>
              <button onClick={setNull} className="howto-close" ref={closeOverlayRef}>Got it</button>
            </div>
      
          </div> }
          <div className="comments-container" style={{zIndex:"4"}} ref={commentsContainerRef}>
            <div className="comments-head">
              <span className="comments-head-label" ref={commentsCountRef}></span>
              <span onClick={deactivateComments} className="comments-head-close" ref={closeCommentsRef}>
                &#10005;
              </span>
            </div>
<div className="comments-list"> 


  <span ref={commentsCountRef}>Comments: {props.comments && props.comments.length}</span>
  <div ref={commentsListRef}>
  {props.comments && props.comments.reverse().map((comment) => (
      <div key={comment.id} className="comments-item">
        <span className="comment-top">
          <span className="comment-top-logo" style={{ backgroundImage: `url(${comment.profilePhoto})` }}></span>
          <span className="comment-top-details">
            <div style={{ display: "flex", flexDirection: "column" }}>
        {/*  <Avatar image={comment.profilePhoto} className="flex align-items-center bg-transparent justify-content-center mr-2" shape="circle" />   */}     
              <span className="user-name">{comment.userName && comment.userName}</span>
            </div>

            <span style={{ fontSize: "0.80rem" }} className="user-time ">{comment.timePosted && comment.timePosted}</span>
            <span className="user-comment">{comment.comment && comment.comment}</span>
          </span>
        </span>
      </div>
    ))}
  </div>

 </div>


            <div style={{ position:"relative",height: "fit-content", width:"fit-content"}}>
            <InputTextarea
            style={{width:"100%"}}
  value={value.comment}
  onChange={(e) => setValue(prevValue => ({ ...prevValue, comment: e.target.value }))}
  rows={3}
  cols={70}
/>

<button onClick={() => Comment(props.id)} style={{position:"absolute", bottom:"0", right:"0"}}>comment</button>
</div>
          </div>
          <video
            src={videos}
            className="video"
            style={{position:"relative"}}
            playsInline
            loop
           onClick={togglePlay}
            ref={videoRef}

            onMouseOver={() => toggleVisibility(props.id, true)}
            onMouseLeave={() => toggleVisibility(props.id, false)}
          >
            </video>
        
         
        
            <div className="icons">
            
            <div className="right">

            <div  onClick={() => updateLikes(props.id)} className="icons-item right-icon">
              <span className="icon">
                <img src="https://assets.codepen.io/2629920/heart.png" alt="" id="likes-icon" ref={likesIconRef} />
              </span>
              <span className="icon-label likes right-label" data-likes={props.likes && props.likes.length} ref={likesRef}>{props.likes && props.likes.length}</span>
            </div>

            <div  onClick={activateComments} className="icons-item right-icon">
              <span className="icon">
              <img src="https://assets.codepen.io/2629920/chat.png" alt="" id="comments-icon"/>
              </span>
              <span className="icon-label comments right-label">{props.comments && props.comments.length}</span>
            </div>
            <div className="icons-item right-icon">
              <span className="icon">
                <img src="https://assets.codepen.io/2629920/share.png" alt=""/>
              </span>
              <span className="icon-label shares right-label">4</span>
            </div> 
          </div>
          <div className="bottom">
            <span className="progress-duration" ref={durationRef}></span>
            <div className="progress-range" title="seek" ref={rangeRef} onClick={setProgress}>
              <div className="progress-bar" ref={barRef}></div>
            </div>
            
         
            </div>
          </div>
        </div>
        <div className="bottomTitle"  onClick={ () => navigate('/profileComponents/Myprofile')} 
 style={{display:"flex"}}>
      <span className="icon">
                <Avatar image={Image && Image} className="flex align-items-center bg-transparent  justify-content-center mr-2" size="small" shape="circle" />

                </span>
                <div style={{display:"flex", flexDirection: "column"}}>
<h3 >{Useris && Useris}</h3>

               <span style={{color:"gray",  marginTop:"13px", fontSize:"13px"}}>0 Views </span>   
                </div>


</div>


      </div>
    
      </div>
    );
  }
  
  export default VideoPlayer;
  
    

