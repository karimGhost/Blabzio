import React, {useEffect, useState, useRef} from 'react';
import { nanoid } from 'nanoid';
import VideoPlayer from './Videoplayer';
import VideoRecorder from './VideoRecorder';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../Accounts/useAuth';
import { propTypes } from 'react-bootstrap/esm/Image';
import im from "../../images/proxy.jpeg";



export default function TheWall() {
  const [stream, setStream] = useState(null);
  const liveVideoFeed = useRef(null);
  const [recordedVideos, setRecordedVideos] = useState([]);
  const [permission, setPermission] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const mediaRecorder = useRef(null);
const [showVid, setShowVid] = useState(false)
const [facingMode, setFacingMode] = useState("user");


useEffect(() =>{
console.log("these are the recorded videos ",recordedVideos)
}, [recordedVideos])

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



const stopCameraStream = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
    setPermission(false);
    setShowVid(false);
  }
};
  
      useEffect(() => {
          if (permission && liveVideoFeed.current && stream) {
              liveVideoFeed.current.srcObject = stream;
          }
      }, [permission, stream]);

const [Image, setImg] = useState(im);
const [Useris, setUser] = useState("");



  return (



  <main className={showVid && 'boxmain'} style={{marginTop:"150px"}} >  

    <Navbar  
    setImg = {setImg}
    setUser = {setUser}
    />

    <button onClick={getCameraPermission} style={{position:"fixed", top:"110px",zIndex:"5", margin:"0 20%", left:"0", right: "0", borderRadius:"15px" }} >Record Video +</button>
   
    
    { showVid &&
    <div style={{zIndex:"50", height:"100vh", width: "100vw", position:"absolute", top:"0", bottom:"0",left:"0", right:"0", background:"white"}}>
  <VideoRecorder 
   setShowVid = {setShowVid}
  recordedVideos = {recordedVideos}
   setRecordedVideos = {setRecordedVideos}
  getCameraPermission = {getCameraPermission}
 stream = {stream}
  setStream  = {setStream}
  showVid = {showVid}
 permission  = {permission}
  setPermission = {setPermission}
 recordedVideo = {recordedVideo }
 setRecordedVideo = {setRecordedVideo} 
 mediaRecorder =  {mediaRecorder}
 facingMode = {facingMode}
 setFacingMode = {setFacingMode}
 liveVideoFeed ={liveVideoFeed}
 stopCameraStream = {stopCameraStream}
 
 />
 
 
 </div>}
 
 {recordedVideos && recordedVideos.reverse().map(vid => (
  <div key={vid.id} className='mtop' >
    <VideoPlayer
     videoplay={ vid.recordedVideo && vid.recordedVideo }
     user={ vid.user && vid.user}
     setRecordedVideo = {setRecordedVideos}
     likes = {vid.likes}
     shares= {vid.shares}
     comments= {vid.comments}
     id={vid.id}
     recordedVideos = {recordedVideos} 
     setImg = {setImg}
setUser = {setUser}

Image ={Image}
 Useris ={Useris}
    />
  </div>
))}



    </main>

  )
}



export const Head = () => <title>TheWall</title>
