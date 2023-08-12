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
    <div className="video-container">
      <video
        src={video}
        controls={playing}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onEnded={() => setPlaying(false)}
        autoPlay
      ></video>

      {showControls && (
        <div className="custom-controls">
          {playing ? (
            <FaPause onClick={togglePlay} />
          ) : (
            <FaPlay onClick={togglePlay} />
          )}
          <FaThumbsUp onClick={handleLike} />
          <span>{likes}</span>
          <FaThumbsDown onClick={handleDislike} />
          <span>{dislikes}</span>
          <FaComment />
          <input
            type="text"
            placeholder="Add a comment..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleComment(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <FaShare />
        </div>
      )}

      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <FaThumbsUp onClick={() => {}} />
            <span>{comment.likes}</span>
            <FaThumbsDown onClick={() => {}} />
            <span>{comment.dislikes}</span>
            <FaReply onClick={() => {}} />
            <FaShare />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videoplayer;
    
