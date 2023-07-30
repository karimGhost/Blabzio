import React, { useState, useRef } from 'react';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { nanoid } from 'nanoid';
import firebase from 'firebase/compat/app';
import { FaThumbsUp, FaThumbsDown, FaTrashAlt, FaComment } from 'react-icons/fa';

import videojs from 'video.js';

const firebaseConfig121212 = {
  apiKey: "AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",

  authDomain: "thewall-10a4a.firebaseapp.com",

  databaseURL: "https://thewall-10a4a-default-rtdb.firebaseio.com",

  projectId: "thewall-10a4a",

  storageBucket: "thewall-10a4a.appspot.com",

  messagingSenderId: "221023885061",

  appId: "1:221023885061:web:bc550d03edd2fbf60e496c",

  measurementId: "G-7V80059NF7"

};


function VideoUploader(){
firebase.initializeApp(firebaseConfig121212);
const database = firebase.database();
  const [videos, setVideos] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [mediaBlob, setMediaBlob] = useState(null);
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  const handleUploadVideo = () => {
    if (!mediaBlob) {
      return;
    }

    const videoId = nanoid();
    const storageRef = firebase.storage().ref();
    const videoRef = storageRef.child('videos/' + videoId + '.webm');

    videoRef.put(mediaBlob).then(() => {
      videoRef.getDownloadURL().then((downloadURL) => {
        const videoData = {
          id: videoId,
          url: downloadURL,
          likes: 0,
          dislikes: 0,
          comments: [],
        };
        database.ref('videos/' + videoId).set(videoData);
        setVideos((prevVideos) => [...prevVideos, videoData]);
        setMediaBlob(null);
      });
    });
  };

  const handleLike = (videoId) => {
    database.ref('videos/' + videoId + '/likes').transaction((currentLikes) => (currentLikes || 0) + 1);
  };

  const handleDislike = (videoId) => {
    database.ref('videos/' + videoId + '/dislikes').transaction((currentDislikes) => (currentDislikes || 0) + 1);
  };

  const handleComment = (videoId) => {
    if (commentInput.trim() === '') {
      return;
    }

    database.ref('videos/' + videoId + '/comments').push({
      userId: 'users', // Replace 'users' with the actual user ID if available
      comment: commentInput.trim(),
    });

    setCommentInput('');
  };

  const handleDelete = (videoId) => {
    const storageRef = firebase.storage().ref();
    const videoStorageRef = storageRef.child('videos/' + videoId + '.webm');

    // Delete video data from the database
    database.ref('videos/' + videoId).remove();

    // Delete video file from storage
    videoStorageRef.delete().catch((error) => {
      console.error('Error deleting video:', error);
    });
  };

  // Set up video player using videojs
  const options = {
    controls: true,
    width: 640,
    height: 480,
    fluid: false,
    plugins: {
      record: {
        audio: true,
        video: true,
        maxLength: 10,
        displayMilliseconds: false,
        debug: true,
      },
    },
  };

  const handleStartRecording = () => {
    if (playerRef.current) {
      const player = videojs(playerRef.current);
      player.record().start();
    }
  };

  const handleStopRecording = () => {
    if (playerRef.current) {
      const player = videojs(playerRef.current);
      player.record().stop();
    }
  };

  const handleCompleteRecording = (data) => {
    setMediaBlob(new Blob([data], { type: 'video/webm' }));
  };

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
          <source src={mediaBlob && URL.createObjectURL(mediaBlob)} type="video/webm" />
        </video>
        <div>
          <button className="btn btn-danger mr-2" onClick={handleStopRecording}>
            Stop Recording
          </button>
          <button className="btn btn-primary mr-2" onClick={handleStartRecording}>
            Start Recording
          </button>
          <button className="btn btn-success" onClick={handleUploadVideo} disabled={!mediaBlob}>
            Upload Video
          </button>
        </div>
      </div>
      <hr />
      {videos.map((video, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <video
              src={video.url}
              controls
              style={{ width: '100%', cursor: 'pointer' }}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            <div className="text-muted mt-2">
              Likes: {video.likes || 0} | Dislikes: {video.dislikes || 0}
            </div>
            <div className="my-3">
              <button className="btn btn-sm btn-primary mr-2" onClick={() => handleLike(video.id)}>
                <FaThumbsUp /> Like
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDislike(video.id)}>
                <FaThumbsDown /> Dislike
              </button>
            </div>
            <div>
              <h5>Comments:</h5>
              <ul className="list-unstyled">
                {Object.values(video.comments || []).map((comment) => (
                  <li key={comment.id}>{comment.text}</li>
                ))}
              </ul>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  aria-label="Add a comment"
                  aria-describedby="button-addon2"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => handleComment(video.id)}
                  >
                    <FaComment /> Post
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(video.id)}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoUploader;
