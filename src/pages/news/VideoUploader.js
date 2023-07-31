import React, { useState, useEffect, useRef } from 'react';
//import RecordRTC from 'recordrtc';
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
  firebase.initializeApp(firebaseConfig121212, 'app212121')

const database = firebase.app("app212121")



  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const recorderRef = useRef(null);
  const videoRef = useRef(null); // Add this line to reference the video element
  useEffect(() => {
    // Fetch comments from Firebase RTDB
    const commentsRef = database.ref('comments');
    commentsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setComments(commentsArray);
      }
    });

    // Cleanup the Firebase listener on unmount
    return () => commentsRef.off('value');
  }, [user, database]);
  

  const handleRecord = async () => {
   
  };

  const handlePublish = () => {
    if(!user){
      return;
    }
    // Save the recorded video and its metadata to Firebase RTDB
    const videoId = nanoid(); // Generate a unique ID for the video
    const userId = user.uid; // Get the user's ID from Firebase Auth

    // Save the video data to Firebase RTDB
    const videosRef = database.ref('videos');
    videosRef.child(videoId).set({
      videoUrl,
      userId,
      likes: 0,
      dislikes: 0,
      comments: [],
    });

    // Reset the video recorder state
    setIsRecording(false);
    setVideoUrl(null);
  };

  const handleAddComment = () => {

    if(!user){
      return;
    }

    if (newComment.trim() !== '') {
      const commentId = nanoid(); // Generate a unique ID for the comment
      const userId = user.uid; // Get the user's ID from Firebase Auth
      const commentData = {
        text: newComment,
        userId,
        likes: 0,
        dislikes: 0,
        replies: [],
      };
      const commentsRef = database.ref('comments');
      commentsRef.child(commentId).set(commentData);
      setNewComment('');
    }
  };
  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
    // Update the likes in the Firebase RTDB as well
    const commentsRef = database.ref('comments');
    commentsRef.child(commentId).update({ likes: firebase.database.ServerValue.increment(1) });
  };

  const handleDislikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, dislikes: comment.dislikes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
    // Update the dislikes in the Firebase RTDB as well
    const commentsRef = database.ref('comments');
    commentsRef.child(commentId).update({ dislikes: firebase.database.ServerValue.increment(1) });
  };

  // Implement reply functionality
  const handleAddReply = (commentId, newReply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, replies: [...comment.replies, { id: nanoid(), text: newReply }] };
      }
      return comment;
    });
    setComments(updatedComments);
    // Update the replies in the Firebase RTDB as well
    const commentsRef = database.ref('comments');
    commentsRef.child(commentId).child('replies').push({ id: nanoid(), text: newReply });
  };

  const handleToggleReplies = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, showReplies: !comment.showReplies };
      }
      return comment;
    });
    setComments(updatedComments);
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
          <div key={comment.id}>
            <p>{comment.text}</p>
            <div>
              <button onClick={() => handleLikeComment(comment.id)}>
                <FaThumbsUp /> {comment.likes}
              </button>
              <button onClick={() => handleDislikeComment(comment.id)}>
                <FaThumbsDown /> {comment.dislikes}
              </button>
              <button onClick={() => handleToggleReplies(comment.id)}>
                <FaReply /> {comment.replies.length} Replies
              </button>
            </div>
            {/* Implement rendering of replies */}
            {comment.replies.length > 0 && (
              <div>
                {comment.replies.map((reply) => (
                  <p key={reply.id}>{reply.text}</p>
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
                <button onClick={() => handleAddReply(comment.id, newComment)}>
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
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  </div>
  
                )
              };
              
export default VideoUploader;