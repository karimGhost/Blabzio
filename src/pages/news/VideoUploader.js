import React, { useState, useRef } from 'react';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { nanoid } from 'nanoid';
import RecordRTC from 'recordrtc';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../Accounts/useAuth';
const firebaseConfig3333 = {
  apiKey: "AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",

  authDomain: "thewall-10a4a.firebaseapp.com",

  databaseURL: "https://thewall-10a4a-default-rtdb.firebaseio.com",

  projectId: "thewall-10a4a",

  storageBucket: "thewall-10a4a.appspot.com",

  messagingSenderId: "221023885061",

  appId: "1:221023885061:web:bc550d03edd2fbf60e496c",

  measurementId: "G-7V80059NF7"
}


function VideoUploader(){


firebase.initializeApp(firebaseConfig3333, 'app3333');
const { user,setUser, loading,signOut } = useAuth();
const app3333 = firebase.app('app3333');

const database = app3333.database();

  const [videos, setVideos] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const videoRef = useRef(null);
  const recorderRef = useRef(null);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Video Recorder</h1>
      <div>
        {recording ? (
          <button className="btn btn-danger mr-2" >
            Stop Recording
          </button>
        ) : (
          <button className="btn btn-primary mr-2" >
            Start Recording
          </button>
        )}
        {recording ? null : (
          <button
            className="btn btn-success mr-2"
          >
            Upload
          </button>
        )}
      </div>
      <video
        ref={videoRef}
        src={""}
        style={{ width: '100%', marginBottom: '10px' }}
        autoPlay
        controls
      />
      <hr />
  
        <div className="card mb-3">
          <div className="card-body">
            <video
              src={""}
              controls
              style={{ width: '100%', cursor: 'pointer' }}
           
            />
            <div className="text-muted mt-2">
            </div>
            <div className="my-3">
              <button className="btn btn-sm btn-primary mr-2">
                Like
              </button>
              <button className="btn btn-sm btn-danger" >
                Dislike
              </button>
            </div>
            <div>
              <h5>Comments:</h5>
              <ul className="list-unstyled">
              
              </ul>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  aria-label="Add a comment"
                  aria-describedby="button-addon2"
               
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default VideoUploader;
