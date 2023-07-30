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
}


function VideoUploader() {


// Initialize Firebase
firebase.initializeApp(firebaseConfig121212, 'app121212');

const app4 = firebase.app('app121212');

  const database = app4.database(); 


  const [videos, setVideos] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaBlob, setMediaBlob] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [userComments, setUserComments] = useState({}); // Store comments for each video

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
          videoRef.current.src = URL.createObjectURL(new Blob(chunksRef.current, { type: 'video/webm' }));
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

  const handleLike = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, likes: video.likes + 1 } : video
      )
    );
  };

  const handleDislike = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, dislikes: video.dislikes + 1 } : video
      )
    );
  };

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleComment = (videoId) => {
    const comment = commentInput.trim();
    if (comment !== '') {
      const videoComments = userComments[videoId] || [];
      const commentData = { id: nanoid(), comment };
      videoComments.push(commentData);

      setUserComments((prevComments) => ({ ...prevComments, [videoId]: videoComments }));
      setCommentInput('');

      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, comments: videoComments } : video
        )
      );
    }
  };
  const handleDelete = (videoId) => {
    // Delete the video data from the database
    database.ref('videos/' + videoId).remove()
      .then(() => {
        // Once the data is deleted from the database, we can proceed to delete the video from storage
        const storageRef = firebase.storage().ref();
        const videoRef = storageRef.child('videos/' + videoId + '.webm');
        videoRef.delete()
          .then(() => {
            // If the video is successfully deleted from storage, we can update the state to remove the video from the UI
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
          })
          .catch((error) => {
            console.error('Error deleting video from storage:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting video data from database:', error);
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
              <div>
                {userComments[video.id]?.map((commentData) => (
                  <div key={commentData.id}>
                    <span>{commentData.comment}</span>
                  </div>
                ))}
                <div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentInput}
                    onChange={handleCommentChange}
                  />
                  <button onClick={() => handleComment(video.id)}>Add Comment</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoUploader;
