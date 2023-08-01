import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { nanoid } from 'nanoid';
import videojs from 'video.js';
import RecordRTC from 'recordrtc';
import { useAuth } from '../../../Accounts/useAuth';

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

function VideoUploader() {
  firebase.initializeApp(firebaseConfig121212, 'app212121');
  const hhh = firebase.app('app212121').database();
  const { user,setUser, loading,signOut } = useAuth();

  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const recorderRef = useRef(null);
  const videoRef = useRef(null); // Add this line to reference the video element

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

  // Rest of the comment, likes, and replies handling logic

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
          <button className="btn btn-danger mr-2" onClick={handleRecord}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
          {videoUrl && (
            <button className="btn btn-success" onClick={handlePublish}>
              Publish Video
            </button>
          )}
        </div>
      </div>
      {/* Rest of the comments, likes, and replies UI and implementation */}
    </div>
  );
}

export default VideoUploader;
