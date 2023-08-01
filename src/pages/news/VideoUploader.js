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
  firebase.initializeApp(firebaseConfig121212, 'app212121')

const hhh = firebase.app("app212121")


  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const recorderRef = useRef(null);
  const videoRef = useRef(null); // Add this line to reference the video element

 
  
const handleRecord = async () => {
  if (isRecording) {
    // Stop recording
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    });
    setIsRecording(false);
  } else {
    // Start recording
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const recorder = new RecordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
    });
    recorderRef.current = recorder;
    recorder.startRecording();

    // Continuously update the video element's srcObject while recording is in progress
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.getVideoTracks()[0]);
    mediaStream.addTrack(stream.getAudioTracks()[0]);
    videoRef.current.srcObject = mediaStream;

    setIsRecording(true);
  }
};

  const handlePublish = () => {
    if(!user){
      return;
    }
    // Save the recorded video and its metadata to Firebase RTDB
    const videoId = nanoid(); // Generate a unique ID for the video
    const userId = user.uid; // Get the user's ID from Firebase Auth

    // Save the video data to Firebase RTDB
    const videosRef = hhh.ref('videos');
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
        replies: [],database
      };
      const commentsRef = hhh.ref('comments');
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
    const commentsRef = hhh.ref('comments');
    commentsRef.child(commentId).update({ likes: firebase.hhh.ServerValue.increment(1) });
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
    const commentsRef = hhh.ref('comments');
    commentsRef.child(commentId).update({ dislikes: firebase.hhh.ServerValue.increment(1) });
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
    const commentsRef = hhh.ref('comments');
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
  const isCommentsEmpty = comments.length === 0;

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