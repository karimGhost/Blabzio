import React, { useEffect, useState, useRef } from "react";

const VideoRecorder = () => {
    const mimeType = "video/webm";
    
const [permission, setPermission] = useState(false);
const mediaRecorder = useRef(null);
const liveVideoFeed = useRef(null);
const [recordingStatus, setRecordingStatus] = useState("inactive");
const [stream, setStream] = useState(null);
const [videoChunks, setVideoChunks] = useState([]);
const [recordedVideo, setRecordedVideo] = useState(null);
  
const [currentCamera, setCurrentCamera] = useState('front');

const switchCamera = async () => {
    const newCamera = currentCamera === 'front' ? 'back' : 'front';
    setCurrentCamera(newCamera);

    try {
        const newStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: newCamera,
            },
        });
        // Update the video track of the existing combinedStream
        const newVideoTrack = newStream.getVideoTracks()[0];
        const existingAudioTracks = stream.getAudioTracks();
        const combinedStream = new MediaStream([newVideoTrack, ...existingAudioTracks]);
        setStream(combinedStream);
    } catch (err) {
        console.error('Error switching camera:', err);
    }
};

    
const getCameraPermission = async () => {
        setRecordedVideo(null);
        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
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
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);
                setStream(combinedStream);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    useEffect(() => {
        if (permission && liveVideoFeed.current && stream) {
            liveVideoFeed.current.srcObject = stream;
        }
    }, [permission, stream]);

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
    <h2>Audio Recorder</h2>
    <main>
        <div className="video-controls">
            {!permission ? (
            <button onClick={getCameraPermission} type="button">
                Get video
            </button>
            ) : null}
            
        </div>

                {permission && liveVideoFeed ? (
    <div style={{position:'relative' }}  className="video-player">
        {  recordingStatus === 'recording' &&  <span style={{color:'red'}} > <ul><li style={{color:'red', position:'absolute',zIndex:'20'}} className='recordmode'>{recordingStatus}</li></ul></span>}

    
    
    <video  className='live-player' ref={liveVideoFeed} autoPlay playsInline>
    
    
    </video>
    {permission && recordingStatus === "inactive" ? (
            <button style={{zIndex:'20', position:'absolute', bottom:'0', color:'red' ,borderRadius:'50%',width:'1.5rem',height:'1.5rem', background:'transparent',border:'2px solid green'}} onClick={startRecording} type="button">
               <i style={{ width:'1.2rem', height:'1.2rem',padding:'4px',background:'green',borderRadius:'50%'> start </i>
            </button>
            ) : null}
            {recordingStatus === "recording" ? (
            <button style={{zIndex:'20', position:'absolute', bottom:'0', color:'red' ,borderRadius:'50%',width:'1.5rem',height:'1.5rem', background:'transparent',border:'2px solid red'}} onClick={stopRecording} type="button">
                <i style={{ width:'1.2rem', height:'1.2rem',padding:'4px',background:'green',borderRadius:'50%'>    Stop Recording </i>
            </button>
            ) : null}
{ recordingStatus === "inactive"  && <button style={{position:'absolute',zIndex:'20', top:'0', right:'0'}} type='button' onClick={{switchCamera}}> switchcam </button> }
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
