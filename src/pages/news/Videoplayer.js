import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import video from "../../images/anim.mp4";
import * as Video from "../../styles/Video.scss";
import '../../styles/Video.scss';

const Videoplayer = () => {

  const [playing, setPlaying] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
 // const [comments, setComments] = useState([]);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => setPlaying(!playing);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
/*
  const handleComment = (comment) => {
    const newComment = {
      id: nanoid(),
      text: comment,
      likes: 0,
      dislikes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

*/

  const comments = [
    // ... your comment objects here
  ];
  const [likesAmount, setLikesAmount] = useState(0);

  const [video, setVideo] = useState(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const videoElement = document.querySelector('.video');
    setVideo(videoElement);
  }, []);

  const displayTime = (time) => {
    const mins = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds <= 9 ? `0${seconds}` : seconds;
    return `${mins}:${seconds}`;
  };

  const updateProgress = () => {
    if (video) {
      const currentTime = video.currentTime;
      const videoDuration = video.duration;
      setBarWidth((currentTime / videoDuration) * 100);
    }
  };

  const setProgress = (e) => {
    if (video) {
      const range = document.querySelector('.progress-range');
      if (range) {
        const time = e.nativeEvent.offsetX / range.offsetWidth;
        video.currentTime = time * video.duration;
      }
    }
  };

  const activateComments = () => {
    const commentsContainer = document.querySelector('.comments-container');
    if (video && commentsContainer) {
      commentsContainer.classList.add('comments-active');
      video.pause();
    }
  };

  const deactivateComments = () => {
    const commentsContainer = document.querySelector('.comments-container');
    if (video && commentsContainer) {
      commentsContainer.classList.remove('comments-active');
      video.play();
    }
  };

  const loadComments = () => {
    if(!comments){return;}
    const commentsList = comments.map((comment) => {
      const commentStyle = {
        backgroundImage: `url(${comment.profilePhoto})`,
      };

      return (
        <div className="comments-item" key={comment.userName}>
          <span className="comment-top">
            <span className="comment-top-logo" style={commentStyle}></span>
            <span className="comment-top-details">
              <span className="user-name">{comment.userName}</span>
              <span className="user-time">{comment.timePosted}</span>
              <span className="user-comment">{comment.comment}</span>
            </span>
          </span>
        </div>
      );
    });

    setLikesAmount(Number(likes.dataset.likes));
    return commentsList;
  };
  const updateLikes = () => {
    const likes = document.querySelector('.likes');
    const likesIcon = document.getElementById('likes-icon');

    if (likesAmount >= 1000) return;
    likesIcon.src = 'https://assets.codepen.io/2629920/heart+%281%29.png';
    likesAmount = likesAmount + 1;
    likes.textContent = `${likesAmount === 1000 ? '1K' : likesAmount}`;
  };

  useEffect(() => {
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('canplay', updateProgress);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('canplay', updateProgress);
      }
    };
  }, [video]);

  useEffect(() => {
    updateProgress();
  }, [video]);

  return (
  	<div className="container">
		<div className="overlay">
			<div className="howto">
				<div className='explain'>
					<ul className='explain-list'>
						<li className='explain-details'>
							<h2 className='explain-details-head'>Likes</h2>
							<span className='explain-details-desc'>Click the <span className='icon'>
									<img src="https://assets.codepen.io/2629920/heart.png" alt=""/>
								</span> to set a like on the video.</span>
						</li>
						<li className='explain-details'>
							<h2 className='explain-details-head'>Comments</h2>
							<span className='explain-details-desc'>Click the <span className='icon'>
									<img src="https://assets.codepen.io/2629920/chat.png" alt=""/>
								</span>view comments.</span>
						</li>
					</ul>
					<div className='explain-video'>
						<h2 className='explain-details-head explain-video'>Video</h2>
						<div className='explain-video-bar'>
							<div className='explain-video-bar-w'></div>
						</div>
						<span className='explain-details-desc'>Click through the video to navigate to specific time line.</span>
					</div>
				</div>
				<button className='howto-close'>Got it</button>
			</div>
		</div>
		<div className='comments-container'>
			<div className='comments-head'>
				<span className='comments-head-label'></span>
				<span className='comments-head-close'>
					&#10005;
				</span>
			</div>
			<div className='comments-list'>
			</div>
		</div>
		<video src="https://assets.codepen.io/2629920/gt3.mp4" className='video' playsinline autoplay loop muted></video>

		{/* 	top labels	*/}
		<div className='top'>
			<span className='label label-main'>Following</span>
			<span className='label label-active'>For You</span>
		</div>

		{/* right labels	*/ }
		<div className='right'>
			<div className='icons-item right-icon'>
				<span className='icon'>
					<img src="https://assets.codepen.io/2629920/heart.png" alt="" id="likes-icon"/>
				</span>
				<span className='icon-label right-label' data-likes='999'>999</span>
			</div>
			<div className='icons-item right-icon'>
				<span className='icon'>
					<img src="https://assets.codepen.io/2629920/chat.png" alt="" id="comments-icon"/>
				</span>
				<span className='icon-label comments right-label'></span>
			</div>
			<div className='icons-item right-icon'>
				<span className='icon'>
					<img src="https://assets.codepen.io/2629920/share.png" alt=""/>
				</span>
				<span className='icon-label shares right-label'>94</span>
			</div>

		</div>

		{/* 	bottom labels	*/}
		<div className='bottom'>
			<span className='progress-duration'></span>
			<div className='progress-range' title="seek">
				<div className='progress-bar'></div>
			</div>
			<div className='icons'>
				<div className='icons-item'>
					<span className='icon'>
						<img src="https://assets.codepen.io/2629920/home.png" alt=""/>
					</span>
					<span className='icon-label'>Home</span>
				</div>
				<div className='icons-item'>
					<span className='icon'>
						<img src="https://assets.codepen.io/2629920/search_1.png" alt=""/>
					</span>
					<span className='icon-label'>Discover</span>
				</div>
				<div className='icons-item'>
					<div className='icons-item-add'>
						<span className='icon' style={{display: "flex"}}>
							<img src=" https://assets.codepen.io/2629920/add.png" alt=""/>
						</span>
					</div>
				</div>
				<div className='icons-item'>
					<span className='icon'>
						<img src="https://assets.codepen.io/2629920/comment.png" alt=""/>
					</span>
					<span className='icon-label'>Inbox</span>
				</div>
				<div className='icons-item'>
					<span className='icon'>
						<img src="https://assets.codepen.io/2629920/user+%281%29.png" alt=""/>
					</span>
					<span className='icon-label'>Me</span>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Videoplayer;
    
