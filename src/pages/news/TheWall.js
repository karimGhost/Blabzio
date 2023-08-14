import React, {useEffect, useState, useRef} from 'react';

import VideoPlayer from './Videoplayer';
import VideoRecorder from './VideoRecorder';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

export default function TheWall() {
  const [stream, setStream] = useState(null);
  const liveVideoFeed = useRef(null);

  const [permission, setPermission] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const mediaRecorder = useRef(null);

const [showVid, setShowVid] = useState(false)
const [facingMode, setFacingMode] = useState("user");

  const getCameraPermission = async () => {
    setRecordedVideo(null);
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: true,
          video: {
            facingMode: facingMode, // Use the current facingMode state here
          },
        };
        const audioConstraints = { audio: true };
        // create audio and video streams separately
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        setPermission(true);
        // combine both audio and video streams
        const combinedStream = new MediaStream([
         ...audioStream.getAudioTracks(),
            ...videoStream.getVideoTracks()
       
        ]);
        setStream(combinedStream);
        setShowVid(true);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
      setShowVid(false)
    }
  };
  
  
      useEffect(() => {
          if (permission && liveVideoFeed.current && stream) {
              liveVideoFeed.current.srcObject = stream;
          }
      }, [permission, stream]);

  return (


  <main style={{marginTop:"150px"}}>
    <Navbar />
    
    <button onClick={getCameraPermission} style={{position:"fixed", top:"110px",zIndex:"5", margin:"0 20%", left:"0", right: "0", borderRadius:"15px" }} >Record Video +</button>
  { showVid &&
  <VideoRecorder 
 stream = {stream}
  setStream  = {setStream}

 permission  = {permission}
  setPermission = {setPermission}
 recordedVideo = {recordedVideo }
 setRecordedVideo = {setRecordedVideo} 
 mediaRecorder =  {mediaRecorder}
 facingMode = {facingMode}
 setFacingMode = {setFacingMode}
 liveVideoFeed ={liveVideoFeed}
 /> }
    <div className='mtop width:"fit-content ", height:"fit-content ", marginTop:"50px"'>
        <VideoPlayer  />

    </div>

    </main>

  )
}



export const Head = () => <title>TheWall</title>
