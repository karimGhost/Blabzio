import React, { useState, useRef } from 'react';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { nanoid } from 'nanoid';
import RecordRTC from 'recordrtc';
import firebase from 'firebase/compat/app';
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

const app004 = firebase.app('app121212');

const database = app004.database();

function VideoUploader() {
  const [videos, setVideos] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState('');
  const [commentInput, setCommentInput] = useState('');

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
      const storageRef = database.ref();
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

  const handleLike = (videoId) => {
    database
      .ref('videos/' + videoId)
      .transaction((video) => {
        if (video) {
          video.likes = (video.likes || 0) + 1;
        }
        return video;
      });
  };

  const handleDislike = (videoId) => {
    database
      .ref('videos/' + videoId)
      .transaction((video) => {
        if (video) {
          video.dislikes = (video.dislikes || 0) + 1;
        }
        return video;
      });
  };

  const handleComment = (videoId) => {
    if (commentInput.trim() === '') {
      return;
    }

    const newComment = {
      id: nanoid(),
      text: commentInput.trim(),
    };

    database.ref('videos/' + videoId + '/comments').push(newComment);
    setCommentInput('');
  };

  const handleDelete = (videoId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      database.ref('videos/' + videoId).remove();
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
    }
  };

  return (
 <div>
  </div>
  );
}

export default VideoUploader;
