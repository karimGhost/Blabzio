import React, { useState } from 'react';
import { FaPlay, FaPause, FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import video from "../../images/anim.mp4";
const Videoplayer = () => {
  const [playing, setPlaying] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => setPlaying(!playing);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

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

  return (
  	<div class="container">
		<div class="overlay">
			<div class="howto">
				<div class="explain">
					<ul class="explain-list">
						<li class="explain-details">
							<h2 class="explain-details-head">Likes</h2>
							<span class="explain-details-desc">Click the <span class="icon">
									<img src="https://assets.codepen.io/2629920/heart.png" alt="">
								</span> to set a like on the video.</span>
						</li>
						<li class="explain-details">
							<h2 class="explain-details-head">Comments</h2>
							<span class="explain-details-desc">Click the <span class="icon">
									<img src="https://assets.codepen.io/2629920/chat.png" alt="">
								</span>view comments.</span>
						</li>
					</ul>
					<div class="explain-video">
						<h2 class="explain-details-head explain-video">Video</h2>
						<div class="explain-video-bar">
							<div class="explain-video-bar-w"></div>
						</div>
						<span class="explain-details-desc">Click through the video to navigate to specific time line.</span>
					</div>
				</div>
				<button class="howto-close">Got it</button>
			</div>
		</div>
		<div class="comments-container">
			<div class="comments-head">
				<span class="comments-head-label"></span>
				<span class="comments-head-close">
					&#10005;
				</span>
			</div>
			<div class="comments-list">
			</div>
		</div>
		<video src="https://assets.codepen.io/2629920/gt3.mp4" class="video" playsinline autoplay loop muted></video>

		<!-- 	top labels	 -->
		<div class="top">
			<span class="label label-main">Following</span>
			<span class="label label-active">For You</span>
		</div>

		<!-- right labels	 -->
		<div class="right">
			<div class="icons-item right-icon">
				<span class="icon">
					<img src="https://assets.codepen.io/2629920/heart.png" alt="" id="likes-icon">
				</span>
				<span class="icon-label likes right-label" data-likes='999'>999</span>
			</div>
			<div class="icons-item right-icon">
				<span class="icon">
					<img src="https://assets.codepen.io/2629920/chat.png" alt="" id="comments-icon">
				</span>
				<span class="icon-label comments right-label"></span>
			</div>
			<div class="icons-item right-icon">
				<span class="icon">
					<img src="https://assets.codepen.io/2629920/share.png" alt="">
				</span>
				<span class="icon-label shares right-label">94</span>
			</div>

		</div>

		<!-- 	bottom labels	 -->
		<div class="bottom">
			<span class="progress-duration"></span>
			<div class="progress-range" title="seek">
				<div class="progress-bar"></div>
			</div>
			<div class="icons">
				<div class="icons-item">
					<span class="icon">
						<img src="https://assets.codepen.io/2629920/home.png" alt="">
					</span>
					<span class="icon-label">Home</span>
				</div>
				<div class="icons-item">
					<span class="icon">
						<img src="https://assets.codepen.io/2629920/search_1.png" alt="">
					</span>
					<span class="icon-label">Discover</span>
				</div>
				<div class="icons-item">
					<div class="icons-item-add">
						<span class="icon" style="display: flex;">
							<img src=" https://assets.codepen.io/2629920/add.png" alt="">
						</span>
					</div>
				</div>
				<div class="icons-item">
					<span class="icon">
						<img src="https://assets.codepen.io/2629920/comment.png" alt="">
					</span>
					<span class="icon-label">Inbox</span>
				</div>
				<div class="icons-item">
					<span class="icon">
						<img src="https://assets.codepen.io/2629920/user+%281%29.png" alt="">
					</span>
					<span class="icon-label">Me</span>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Videoplayer;
    
