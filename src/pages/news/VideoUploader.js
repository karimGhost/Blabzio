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
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        setMediaBlob(blob);
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

  // Rest of the code for handling likes, dislikes, comments, and deletions

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Video Recorder</h1>
      <div>
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
          <button
            className="btn btn-success mr-2"
            onClick={() => setVideos((prevVideos) => [...prevVideos, mediaBlob])}
            disabled={!mediaBlob}
          >
            Upload
          </button>
        )}
      </div>
      <video
        ref={videoRef}
        src={mediaBlob}
        style={{ width: '100%', marginBottom: '10px' }}
        autoPlay
        controls
      />
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
                Like
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDislike(video.id)}>
                Dislike
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
                    Post
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(video.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default  VideoUploader;
