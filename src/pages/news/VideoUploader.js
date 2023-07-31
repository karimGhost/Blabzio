import React, { useState, useEffect, useRef } from 'react';
import RecordRTC from 'recordrtc';
    import firebase from 'firebase/compat/app';
import { nanoid } from 'nanoid';
import { FaPlay, FaStop, FaCheck, FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import { useAuth } from '../../Accounts/useAuth';
const firebaseConfig121212 = {
  // Your Firebase configuration object
  apiKey: "AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",

  authDomain: "thewall-10a4a.firebaseapp.com",

  databaseURL: "https://thewall-10a4a-default-rtdb.firebaseio.com",

  projectId: "thewall-10a4a",

  storageBucket: "thewall-10a4a.appspot.com",

  messagingSenderId: "221023885061",

  appId: "1:221023885061:web:bc550d03edd2fbf60e496c",

  measurementId: "G-7V80059NF7"
};








const VideoUploader = () => {

  const { user,setUser, loading,signOut } = useAuth();


  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const recorderRef = useRef(null);
  const videoRef = useRef(null); // Add this line to reference the video element
 

  const handleRecord = async () => {
   
  };

  const handlePublish = () => {
    
  };

  const handleAddComment = () => {

  };
  const handleLikeComment = (commentId) => {
   
  };

  const handleDislikeComment = (commentId) => {
   
  };

  // Implement reply functionality
  const handleAddReply = (commentId, newReply) => {
   
  };

  const handleToggleReplies = (commentId) => {
   
  };

  return (
    <div className="container mt-4">


      <h1> welll should iot function fnfnkingr</h1>
    {/* Video recorder UI */}
    <video className="video-player" ref={videoRef} src={videoUrl} controls />
    <div>
      <button onClick={handleRecord} className="btn btn-primary mr-2">
        {isRecording ? <FaStop /> : <FaPlay />}
      </button>
      {videoUrl && (
        <button onClick={handlePublish} className="btn btn-success">
          <FaCheck /> Publish
        </button>
      )}
    </div>
  
    {/* Comment section UI */}
    <div>
      <h2>Comments</h2>
      {/* Implement comment rendering, likes, dislikes, and replies */}
      <div className="comment-section">
        {comments.map((comment) => (
          <div key={comment.id && comment.id}>
            <p>{comment.text && comment.text}</p>
            <div>
              <button onClick={() => handleLikeComment(comment.id)}>
                <FaThumbsUp /> {comment.likes && comment.likes}
              </button>
              <button onClick={() => handleDislikeComment(comment.id)}>
                <FaThumbsDown /> {comment.dislikes && comment.dislikes}
              </button>
              <button onClick={() => handleToggleReplies(comment.id)}>
                <FaReply /> {comment.replies && comment.replies.length} Replies
              </button>
            </div>
            {/* Implement rendering of replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div>
                {comment.replies.map((reply) => (
                  <p key={reply.id && reply.id}>{reply.text && reply.text}</p>
                ))}
              </div>
            )}
            {/* Implement reply input for new replies */}
            {comment.showReplies && (
              <div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Reply to this comment"
                />
                <button >
                  <FaReply /> Reply
                </button>
              </div>
            )}
          </div>
        ))}
        {/* Implement comment input for new comments */}
        <div>
          <input
            type="text"
            value={newComment}
            placeholder="Add a comment"
          />
          <button >Add Comment</button>
        </div>
      </div>
    </div>
  </div>
  
                )
              };
              
export default VideoUploader;