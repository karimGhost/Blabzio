import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { nanoid } from 'nanoid';
import videojs from 'video.js';
import RecordRTC from 'recordrtc';
import { useAuth } from '../../Accounts/useAuth';
import { Button } from 'primereact/button';

const firebaseConfig212121 = {
  apiKey: "AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",

  authDomain: "thewall-10a4a.firebaseapp.com",

  databaseURL: "https://thewall-10a4a-default-rtdb.firebaseio.com",

  projectId: "thewall-10a4a",

  storageBucket: "thewall-10a4a.appspot.com",

  messagingSenderId: "221023885061",

  appId: "1:221023885061:web:bc550d03edd2fbf60e496c",

  measurementId: "G-7V80059NF7"
};

function VideoUploader() {
  firebase.initializeApp(firebaseConfig212121, 'app212121');
  const hhh = firebase.app('app212121').database();
  const { user } = useAuth();

  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const recorderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Fetch comments from Firebase RTDB
    const commentsRef = hhh.ref('comments');
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
  }, [user, hhh]);

  useEffect(() => {
    // Initialize video.js player on videoRef
    const player = videojs(videoRef.current, {}, () => {
      // Player is ready
    });

    // Cleanup video.js player on unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

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
    // Save the recorded video and its metadata to Firebase RTDB
    const videoId = nanoid(); // Generate a unique ID for the video
    const userId = user?.uid; // Get the user's ID from Firebase Auth

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
    if (!user) {
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
    const commentsRef = hhh.ref('comments');
    commentsRef.child(commentId).update({ dislikes: firebase.database.ServerValue.increment(1) });
  };

  // Rest of the comment, replies, and replies handling logic

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Video Recorder</h1>
      <div className="mb-4">
        <video
          ref={videoRef}
          className="video-js vjs-default-skin"
          style={{ width: '100%', marginBottom: '10px' }}
          controls
        >
          <source src={videoUrl} type="video/webm" />
        </video>
        <div>
          <Button variant="danger" className="mr-2" onClick={handleRecord}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Button>
          {videoUrl && (
            <Button variant="success" onClick={handlePublish}>
              Publish Video
            </Button>
          )}
        </div>
      </div>

      {/* Placeholder for comments, likes, and replies UI */}
      <div className="comments-section">
        {/* Display the comments */}
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <div className="comment-actions">
              <Button variant="outline-primary" onClick={() => handleLikeComment(comment.id)}>
                Like ({comment.likes})
              </Button>
              <Button variant="outline-danger" onClick={() => handleDislikeComment(comment.id)}>
                Dislike ({comment.dislikes})
              </Button>
            </div>

            {/* Display the replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <p>{reply.text}</p>
                    {/* Add like/dislike functionality for replies if needed */}
                  </div>
                ))}
              </div>
            )}

            {/* Add reply functionality */}
            <div className="add-reply">
              <input
                type="text"
                placeholder="Add a reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <Button variant="outline-primary" onClick={() => handleAddReply(comment.id, newReply)}>
                Add Reply
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoUploader;
