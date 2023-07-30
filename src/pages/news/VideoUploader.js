import React, { useState, useRef } from 'react';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { nanoid } from 'nanoid';
import RecordRTC from 'recordrtc';
const firebaseConfig121212 = {
  apiKey: "AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",

  authDomain: "thewall-10a4a.firebaseapp.com",

  databaseURL: "https://thewall-10a4a-default-rtdb.firebaseio.com",

  projectId: "thewall-10a4a",

  storageBucket: "thewall-10a4a.appspot.com",

  messagingSenderId: "221023885061",

  appId: "1:221023885061:web:bc550d03edd2fbf60e496c",

  measurementId: "G-7V80059NF7"
}
firebase.initializeApp(firebaseConfig121212, 'app121212');

const app4 = firebase.app('app121212');

  const database = app4.database(); 


const VideoRecorder = () => {
  const [videos, setVideos] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState('');
  const videoRef = useRef(null);
  const recorderRef = useRef(null);

  const handleStartRecording = () => {
    setRecording(true);
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      recorderRef.current = RecordRTC(stream, { type: 'video' });
      recorderRef.current.startRecording();
    });
  };

  const handleStopRecording = () => {
    setRecording(false);
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const videoId = nanoid();
      const storageRef = firebase.storage().ref();
      const videoRef = storageRef.child('videos/' + videoId + '.webm');
      videoRef.put(blob).then(() => {
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
        });
      });
    });
  };

  const handleDelete = (videoId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      database.ref('videos/' + videoId).remove();
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
    }
  };

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
            onClick={() => setVideos((prevVideos) => [...prevVideos, mediaBlobUrl])}
            disabled={!mediaBlobUrl}
          >
            Upload
          </button>
        )}
      </div>
      <video
        ref={videoRef}
        src={mediaBlobUrl}
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

export default VideoRecorder;
