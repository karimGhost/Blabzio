import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import video from "../../images/anim.mp4";
import * as Video from "../../styles/Video.scss";
import '../../styles/Video.scss';


  function VideoPlayer() {
    const [comments, setComments] = useState([
      {	
        userName: "Mescudi",
        timePosted: "Just now",
        profilePhoto: "https://media.timeout.com/images/105653190/image.jpg",
        comment: "It's a Akrapovic exhaust!!! Follow them for info 😎"
      },
      {
        userName: "Wes",
        timePosted: "3 mins ago",
        profilePhoto:
          "https://yeezymafia.com/content/images/2019/08/Kanye-West-adidas-Yeezy-Basketball-Shoe-YZY-BSKTBL.png",
        comment: "Love the color, whats the color code!"
      },
      {
        userName: "traviScott",
        timePosted: "48 mins ago",
        profilePhoto:
          "https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ.jpg",
        comment: "💘💗💚💕🖤"
      },
      {
        userName: "mr305",
        timePosted: "2hrs ago",
        profilePhoto:
          "https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",
        comment: "I need one right now"
      },
      {
        userName: "its50",
        timePosted: "Just now",
        profilePhoto:
          "https://media.npr.org/assets/music/sotd/2009/11/50cent-606653ff4067b3c2488559211d4adddf497a103b-s800-c85.jpg",
        comment: "What wheels are those?"
      },
      {
        userName: "ciciFlores",
        timePosted: "12 mins ago",
        profilePhoto:
          "https://post.healthline.com/wp-content/uploads/2021/06/1336289-The-10-Best-Self-Help-Books-for-Women-in-2021-732x549-Feature.jpg",
        comment: "WOW love the wheel set up"
      },
      {
        userName: "boldJet",
        timePosted: "1 day ago",
        profilePhoto:
          "https://worldarchery.sport/sites/default/files/styles/header_desktop/https/photos.smugmug.com/OLYMPIC-GAMES/TOKYO-2020/23-JULY-QUALIFICATION/i-K2L7PfT/0/125fcb9f/X3/X21_7255-X3.jpg?h=2e8ccfe0&itok=fkr_S58k",
        comment: "Nice !!!"
      }
    ]);
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
  
    useEffect(() => {
      loadComments();
    }, []);
  
    const displayTime = (time) => {
      const mins = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      seconds = seconds <= 9 ? `0${seconds}` : seconds;
      return `${mins}:${seconds}`;
    };
  


    const updateProgress = () => {
      if (videoRef.current && barRef.current && durationRef.current) {
        barRef.current.style.width = `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%`;
        durationRef.current.textContent = `${displayTime(videoRef.current.currentTime)} : ${displayTime(videoRef.current.duration)}`;
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
  
    const loadComments = () => {
      commentsListRef.current.innerHTML = "";
      commentsCountRef.current.textContent = `${comments.length} comments`;
      commentsCount2Ref.current.textContent = `${comments.length}`;
      comments.forEach((comment) => {
        const html = `
          <div className="comments-item">
            <span className="comment-top">
              <span className="comment-top-logo" style={{ backgroundImage: "url(" + comment.profilePhoto + ")" }}></span>
              <span className="comment-top-details">
                <span className="user-name">${comment.userName}</span>
                <span className="user-time">${comment.timePosted}</span>
                <span className="user-comment">${comment.comment}</span>
              </span>
            </span>
          </div>`;
        commentsListRef.current.insertAdjacentHTML("afterbegin", html);
      });
      setLikesAmount(Number(likesRef.current.dataset.likes));
    };
  
    const updateLikes = () => {
      if (likesAmount >= 1000) return;
      likesIconRef.current.src = `https://assets.codepen.io/2629920/heart+%281%29.png`;
      setLikesAmount(likesAmount + 1);
      likesRef.current.textContent = `${likesAmount === 1000 ? "1K" : likesAmount}`;
    };
  
    return (
      <div className="ConBod">
        <div className="container">
          <div className="overlay" ref={overlayRef}>
            <div className="howto">
              <div className="explain">
                <ul className="explain-list">
                  <li className="explain-details">
                    <h2 className="explain-details-head">Likes</h2>
                    <span className="explain-details-desc">Click the <span className="icon">
                      <img src="https://assets.codepen.io/2629920/heart.png" alt=""/>
                    </span> to set a like on the video.</span>
                  </li>
                  <li className="explain-details">
                    <h2 className="explain-details-head">Comments</h2>
                    <span className="explain-details-desc">Click the <span className="icon">
                      <img src="https://assets.codepen.io/2629920/chat.png" alt=""/>
                    </span>view comments.</span>
                  </li>
                </ul>
                <div className="explain-video">
                  <h2 className="explain-details-head explain-video">Video</h2>
                  <div className="explain-video-bar">
                    <div className="explain-video-bar-w"></div>
                  </div>
                  <span className="explain-details-desc">Click through the video to navigate to a specific timeline.</span>
                </div>
              </div>
              <button className="howto-close" ref={closeOverlayRef}>Got it</button>
            </div>
          </div>
          <div className="comments-container" ref={commentsContainerRef}>
            <div className="comments-head">
              <span className="comments-head-label" ref={commentsCountRef}></span>
              <span className="comments-head-close" ref={closeCommentsRef}>
                &#10005;
              </span>
            </div>
            <div className="comments-list" ref={commentsListRef}></div>
          </div>
          <video
            src="https://assets.codepen.io/2629920/gt3.mp4"
            className="video"
            playsInline
            autoPlay
            loop
            muted
            ref={videoRef}
          ></video>
  
          <div className="top">
            <span className="label label-main">Following</span>
            <span className="label label-active">For You</span>
          </div>
          <div className="right">
            <div className="icons-item right-icon">
              <span className="icon">
                <img src="https://assets.codepen.io/2629920/heart.png" alt="" id="likes-icon" ref={likesIconRef} />
              </span>
              <span className="icon-label likes right-label" data-likes='999' ref={likesRef}>999</span>
            </div>
            <div className="icons-item right-icon">
              <span className="icon">
                <img src="https://assets.codepen.io/2629920/chat.png" alt="" id="comments-icon"/>
              </span>
              <span className="icon-label comments right-label"></span>
            </div>
            <div className="icons-item right-icon">
              <span className="icon">
                <img src="https://assets.codepen.io/2629920/share.png" alt=""/>
              </span>
              <span className="icon-label shares right-label">94</span>
            </div>
          </div>
          <div className="bottom">
            <span className="progress-duration" ref={durationRef}></span>
            <div className="progress-range" title="seek" ref={rangeRef} onClick={setProgress}>
              <div className="progress-bar" ref={barRef}></div>
            </div>
            <div className="icons">
              <div className="icons-item">
                <span className="icon">
                  <img src="https://assets.codepen.io/2629920/home.png" alt=""/>
                </span>
                <span className="icon-label">Home</span>
              </div>
              <div className="icons-item">
                <span className="icon">
                  <img src="https://assets.codepen.io/2629920/search_1.png" alt=""/>
                </span>
                <span className="icon-label">Discover</span>
              </div>
              <div className="icons-item">
                <div className="icons-item-add">
                  <span className="icon" style={{ display: "flex" }}>
                    <img src="https://assets.codepen.io/2629920/add.png" alt=""/>
                  </span>
                </div>
              </div>
              <div className="icons-item">
                <span className="icon">
                  <img src="https://assets.codepen.io/2629920/comment.png" alt=""/>
                </span>
                <span className="icon-label">Inbox</span>
              </div>
              <div className="icons-item">
                <span className="icon">
                  <img src="https://assets.codepen.io/2629920/user+%281%29.png" alt=""/>
                </span>
                <span className="icon-label">Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoPlayer;
  
    

