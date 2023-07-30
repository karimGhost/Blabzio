import React from 'react';
import 'firebase/database'; 
import { nanoid } from 'nanoid';
import firebase from 'firebase/compat/app';
// Initialize Firebase
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
firebase.initializeApp(firebaseConfig121212);
  const database = firebase.database(); 


  
class VideoUploader extends React.Component {

  
  state = {
    videoFile: null,
    isRecording: false,
    recordedVideo: null,
    videos: [],
  };

  componentDidMount() {
    this.loadVideos();
  }

  loadVideos = () => {
    const videosRef = database.ref('videos');
    videosRef.on('value', (snapshot) => {
      const videos = [];
      snapshot.forEach((childSnapshot) => {
        const video = {
          id: childSnapshot.key,
          ...childSnapshot.val(),
        };
        videos.push(video);
      });
      this.setState({ videos });
    });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 5000000) { // Maximum allowed file size is 5MB
      this.setState({ videoFile: file });
    } else {
      alert('Please select a short video file (less than 5MB).');
    }
  };
  handleRecordClick = () => {
    if (!this.state.isRecording) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          const chunks = [];
  
          mediaRecorder.addEventListener('dataavailable', (event) => {
            chunks.push(event.data);
          });
  
          mediaRecorder.addEventListener('stop', () => {
            const recordedBlob = new Blob(chunks, { type: 'video/webm' });
            this.setState({ recordedVideo: recordedBlob });
          });
  
          mediaRecorder.start();
          this.setState({ isRecording: true, mediaRecorder, recordedChunks: chunks });
        })
        .catch((error) => {
          console.error('Error accessing video stream:', error);
        });
    } else {
      this.state.mediaRecorder.stop();
      this.setState({ isRecording: false });
    }
  };
  
  handleUploadClick = () => {
    const { videoFile, recordedVideo } = this.state;
  
    if (videoFile || recordedVideo) {
      const storageRef = firebase.storage().ref();
      const videoRef = storageRef.child(videoFile ? videoFile.name : 'recorded_video.webm');
      const uploadTask = videoRef.put(videoFile || recordedVideo);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress updates
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
          // Update progress in UI 
        },
        (error) => {
          // Handle upload error
          console.error('Upload error:', error);
          // Display error message or perform error handling in UI
        },
        () => {
          // Upload complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // Save the video details in the database
            const videoId = nanoid(); // Generate a unique ID for the video
            database.ref('videos/' + videoId).set({
              url: downloadURL,
              likes: 0,
              dislikes: 0,
              comments: [],
            });
          });
        }
      );
    }
  };
  
  handleLike = (videoId) => {
    database.ref('videos/' + videoId).transaction((video) => {
      if (video) {
        video.likes = (video.likes || 0) + 1;
      }
      return video;
    });
  };

  handleDislike = (videoId) => {
    database.ref('videos/' + videoId).transaction((video) => {
      if (video) {
        video.dislikes = (video.dislikes || 0) + 1;
      }
      return video;
    });
  };

  handleComment = (videoId, comment) => {
    const newComment = {
      id: nanoid(),
      text: comment,
    };

    database.ref('videos/' + videoId + '/comments').push(newComment);
  };

  handleDelete = (videoId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      database.ref('videos/' + videoId).remove();
    }
  };

  render() {
    const { videos } = this.state;

    return (
      <div className="container">
        <h1>Video Uploader</h1>
        <div className="form-group">
          <input type="file" accept="video/*" onChange={this.handleFileChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.handleRecordClick}>
            {this.state.isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.handleUploadClick}>
            Upload
          </button>
        </div>
        <hr />
        {videos.map((video) => (
          <div key={video.id} className="card mb-3">
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
                <button className="btn btn-sm btn-primary mr-2" onClick={() => this.handleLike(video.id)}>
                  Like
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => this.handleDislike(video.id)}>
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
                    onChange={(e) => this.setState({ commentInput: e.target.value })}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={() => this.handleComment(video.id, this.state.commentInput)}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(video.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoUploader;
