import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import video from "../../images/anim.mp4";
import Video from "../../styles/Video.scss";
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
  	<div className={Video.container}>
		<div className={Video.overlay}>
			<div className={Video.howto}>
				<div className={Video.explain}>
					<ul className={Video['explain-list']}>
						<li className={Video['explain-details']}>
							<h2 className={Video['explain-details-head']}>Likes</h2>
							<span className={Video['explain-details-desc']}>Click the <span className={Video.icon}>
									<img src="https://assets.codepen.io/2629920/heart.png" alt=""/>
								</span> to set a like on the video.</span>
						</li>
						<li className={Video['explain-details']}>
							<h2 className={Video['explain-details-head']}>Comments</h2>
							<span className={Video['explain-details-desc']}>Click the <span className={Video.icon}>
									<img src="https://assets.codepen.io/2629920/chat.png" alt=""/>
								</span>view comments.</span>
						</li>
					</ul>
					<div className={Video['explain-video']}>
						<h2 className={`${Video['explain-details-head']} ${Video.explain-video}`}>Video</h2>
						<div className={Video['explain-video-bar']}>
							<div className={Video['explain-video-bar-w']}></div>
						</div>
						<span className={Video['explain-details-desc']}>Click through the video to navigate to specific time line.</span>
					</div>
				</div>
				<button className={Video['howto-close']}>Got it</button>
			</div>
		</div>
		<div className={Video['comments-container']}>
			<div className={Video['comments-head']}>
				<span className={Video['comments-head-label']}></span>
				<span className={Video['comments-head-close']}>
					&#10005;
				</span>
			</div>
			<div className={Video['comments-list']}>
			</div>
		</div>
		<video src="https://assets.codepen.io/2629920/gt3.mp4" className={Video.video} playsinline autoplay loop muted></video>

		{/* 	top labels	*/}
		<div className={Video.top}>
			<span className={`${Video['label']} ${Video['label-main']}`}>Following</span>
			<span className={`${Video['label']} ${Video['label-active']}`}>For You</span>
		</div>

		{/* right labels	*/ }
		<div className={Video['right']}>
			<div className={`${Video['icons-item']} ${Video['right-icon']}`}>
				<span className={Video['icon']}>
					<img src="https://assets.codepen.io/2629920/heart.png" alt="" id="likes-icon"/>
				</span>
				<span className={`${Video['icon-label']} ${Video['right-label']}`} data-likes='999'>999</span>
			</div>
			<div className={`${Video['icons-item']} ${Video['right-icon']}`}>
				<span className={Video['icon']}>
					<img src="https://assets.codepen.io/2629920/chat.png" alt="" id="comments-icon"/>
				</span>
				<span className={`${Video['icon-label']} ${Video['comments']} ${Video['right-label']}`}></span>
			</div>
			<div className={`${Video['icons-item']} ${Video['right-icon']}`}>
				<span className={Video['icon']}>
					<img src="https://assets.codepen.io/2629920/share.png" alt=""/>
				</span>
				<span className={`${Video['icon-label']} ${Video.shares} ${Video['right-label']}`}>94</span>
			</div>

		</div>

		{/* 	bottom labels	*/}
		<div className={Video.bottom}>
			<span className={Video['progress-duration']}></span>
			<div className={Video['progress-range']} title="seek">
				<div className={Video['progress-bar']}></div>
			</div>
			<div className={Video['icons']}>
				<div className={Video['icons-item']}>
					<span className={Video['icon']}>
						<img src="https://assets.codepen.io/2629920/home.png" alt=""/>
					</span>
					<span className={Video['icon-label']}>Home</span>
				</div>
				<div className={Video['icons-item']}>
					<span className={Video['icon']}>
						<img src="https://assets.codepen.io/2629920/search_1.png" alt=""/>
					</span>
					<span className={Video['icon-label']}>Discover</span>
				</div>
				<div className={Video['icons-item']}>
					<div className={Video['icons-item-add']}>
						<span className={Video['icon']} style="display: flex;">
							<img src=" https://assets.codepen.io/2629920/add.png" alt=""/>
						</span>
					</div>
				</div>
				<div className={Video['icons-item']}>
					<span className={Video['icon']}>
						<img src="https://assets.codepen.io/2629920/comment.png" alt=""/>
					</span>
					<span className={Video['icon-label']}>Inbox</span>
				</div>
				<div className={Video['icons-item']}>
					<span className={Video['icon']}>
						<img src="https://assets.codepen.io/2629920/user+%281%29.png" alt=""/>
					</span>
					<span className={Video['icon-label']}>Me</span>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Videoplayer;
    
