import React, { useEffect, useState, useRef } from "react";

const VideoRecorder = (props) => {
    const mimeType = "video/webm";
    
const [recordingStatus, setRecordingStatus] = useState("inactive");
const [videoChunks, setVideoChunks] = useState([]);
  
const facingMode = props.facingMode;
const setFacingMode = props.setFacingMode;

const stream = props.stream;
const  setStream  = props.setStream;
const liveVideoFeed = props.liveVideoFeed;
const permission  = props.permission;
const  setPermission = props.setPermission;
const recordedVideo = props.recordedVideo ;
const setRecordedVideo = props.setRecordedVideo;

const mediaRecorder =  props.mediaRecorder ;









  


    useEffect(() => {
        if (permission && liveVideoFeed.current && stream) {
            liveVideoFeed.current.srcObject = stream;
        }
    }, [permission, stream]);
    
const switchCamera = async () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    const newFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacingMode);

    await getCameraPermission();
  };

const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localVideoChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localVideoChunks.push(event.data);
    };
    setVideoChunks(localVideoChunks);
};

const stopRecording = () => {
    setPermission(false);
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
        const videoBlob = new Blob(videoChunks, { type: mimeType });
        const videoUrl = URL.createObjectURL(videoBlob);
        setRecordedVideo(videoUrl);
        setVideoChunks([]);
    };
};
    
    return (
        <div>
   
    <main className= { props.showVid &&' boxmain'}>
        <div className="video-controls">
            { /*!permission ? (
            <button onClic={getCameraPermission} type="button">
               open camera
            </button>
            ) : null */}
            
        </div>

                {permission && liveVideoFeed ? (
    <div style={{position:'relative' }}  className="video-player">
        {  recordingStatus === 'recording' &&  <span style={{color:'red'}} > <ul><li style={{color:'red', position:'absolute',zIndex:'20'}} className='recordmode'>{recordingStatus}</li></ul></span>}

    
    
    <video  className='live-player  m-50' ref={liveVideoFeed} autoPlay playsInline>
    
    
    </video>
    {permission && recordingStatus === "inactive" ? (
           <button style={{ zIndex: '20', position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', background: 'transparent', border: '2px solid green', borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={startRecording} type="button">
           <i style={{ display: 'block', width: '5rem', height: '5rem', padding: '4px', background: 'green', borderRadius: '50%', margin: '1px auto' }}>s</i>
       </button>
            ) : null}
            {recordingStatus === "recording" ? (
           <button style={{ zIndex: '20', position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', background: 'transparent', border: '2px solid red', borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={stopRecording} type="button">
           <i style={{ display: 'block', width: '5rem', height: '5rem', padding: '4px', background: 'green', borderRadius: '50%', margin: '1px auto' }}>p</i>
       </button>
       
            ) : null}
{ recordingStatus === "inactive"  && <button style={{position:'absolute',zIndex:'20', top:'0', right:'0'}} type='button' onClick={switchCamera}> switchcam </button> }
    </div>
) : null}
                    
                { !permission && recordedVideo ? (
        <div className="video-player">
            <video className='recorded-player' src={recordedVideo} controls autoPlay></video>
            <a download href={recordedVideo}>
                Download Recording
            </a>
        </div>
        ) : null}
    </main>
</div>

    );
};
export default VideoRecorder;
