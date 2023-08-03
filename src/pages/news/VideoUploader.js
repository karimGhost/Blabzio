import React, { useState, useEffect } from "react";
import { MediaRecorder } from "mediarecorder";

const VideoUploader = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const recorder = new MediaRecorder();

  useEffect(() => {
    // Start recording when the button is clicked
    const startRecording = () => {
      recorder.start();
    };

    // Stop recording when the button is clicked
    const stopRecording = () => {
      recorder.stop();
    };

    // Handle the recording state
    const handleRecordingState = (event) => {
      setIsRecording(event.state === "recording");
    };

    // Handle the media blob URL
    const handleMediaBlobUrl = (event) => {
      setMediaBlobUrl(event.dataUrl);
    };

    // Bind the event handlers
    recorder.onstart = startRecording;
    recorder.onstop = stopRecording;
    recorder.ondataavailable = handleMediaBlobUrl;

    return () => {
      // Clean up the recorder when the component unmounts
      recorder.stop();
    };
  }, []);

  return (
    <div>
      <p>{isRecording ? "Recording..." : "Not recording..."}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default VideoUploader;
