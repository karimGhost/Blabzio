import React, { useState, useRef } from "react";

const VideoRecorder = () => {
    const mimeType = "video/webm";
    
const [permission, setPermission] = useState(false);
const mediaRecorder = useRef(null);
const liveVideoFeed = useRef(null);
const [recordingStatus, setRecordingStatus] = useState("inactive");
const [stream, setStream] = useState(null);
const [videoChunks, setVideoChunks] = useState([]);
const [recordedVideo, setRecordedVideo] = useState(null);
  

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
            //combine both audio and video streams
            const combinedStream = new MediaStream([
                ...videoStream.getVideoTracks(),
                ...audioStream.getAudioTracks(),
            ]);
            setStream(combinedStream);
            //set videostream to live feed player
            liveVideoFeed.current.srcObject = combinedStream;
        } catch (err) {
            alert(err.message);
        }
    } else {
        alert("The MediaRecorder API is not supported in your browser.");
    }
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
    <h2>Audio Recorder</h2>
    <main>
        <div className="video-controls">
            {!permission ? (
            <button onClick={getCameraPermission} type="button">
                Get video
            </button>
            ) : null}
            {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
                Start Recording
            </button>
            ) : null}
            {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
                Stop Recording
            </button>
            ) : null}
        </div>

                {permission && liveVideoFeed ? (
        <div className="video-player">
            <video src={liveVideoFeed} ></video>  


        </div>
                    ) : null }
                    
                { !permission && recordedVideo ? (
        <div className="video-player">
            <video src={recordedVideo} ></video>
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
