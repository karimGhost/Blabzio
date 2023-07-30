import React, { useState, useRef } from 'react';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { nanoid } from 'nanoid';
import firebase from 'firebase/compat/app';
import { FaThumbsUp, FaThumbsDown, FaTrashAlt, FaComment } from 'react-icons/fa';
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
function VideoUploader() {

  firebase.initializeApp(firebaseConfig121212);
  const database = firebase.database(); 

  const [videos, setVideos] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaBlob, setMediaBlob] = useState(null);
  const [commentInput, setCommentInput] = useState('');

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handleStartRecording = () => {
    setRecording(true);
    chunksRef.current = [];
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
          setMediaBlob(new Blob(chunksRef.current, { type: 'video/webm' }));
        }
      };

      mediaRecorderRef.current.onstop = () => {
        chunksRef.current = [];
      };

      mediaRecorderRef.current.start();
    });
  };

  const handleStopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current.stop();
  };

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

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Video Recorder</h1>
      <div className="mb-2">
        {recording ? (
          <button className="btn btn-danger mr-2" onClick={handleStopRecording}>
            Stop Recording
          </button>
        ) : (
          <button className="btn btn-primary mr-2" onClick={handleStartRecording}>
            Start Recording
          </button>
        )}
        {recording ? null : (
          <button className="btn btn-success" onClick={handleUploadVideo} disabled={!mediaBlob}>
            Upload Video
          </button>
        )}
      </div>
      <div className="mb-4">
        {mediaBlob && (
          <video
            ref={videoRef}
            src={URL.createObjectURL(mediaBlob)}
            style={{ width: '100%', marginBottom: '10px' }}
            autoPlay
            controls
          />
        )}
      </div>
      <hr />
      <div>
        <h2>Videos</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <video src={video.url} style={{ width: '100px' }} controls />
              <div>
                <span>{`Likes: ${video.likes}`}</span>
                <span>{`Dislikes: ${video.dislikes}`}</span>
                <span>{`Comments: ${video.comments.length}`}</span>
              </div>
              <div>
                <button onClick={() => handleLike(video.id)}>
                  <FaThumbsUp />
                </button>
                <button onClick={() => handleDislike(video.id)}>
                  <FaThumbsDown />
                </button>
                <button onClick={() => handleComment(video.id)}>
                  <FaComment />
                </button>
                <button onClick={() => handleDelete(video.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoUploader;
