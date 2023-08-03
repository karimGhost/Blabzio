import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const VideoUploader = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    facingMode: { exact: "environment" },
  });

  useEffect(() => {
    setIsBrowser(true);
    // Dynamically import the module when the component mounts
    import("react-media-recorder").then((module) => {
      setIsBrowser(false); // Set isBrowser back to false after the import is done
    });
  }, []);

  if (isBrowser && !window.Worker) {
    // Check if running in the browser and Web Workers are supported
    return <div>Web Workers are not supported in this browser.</div>;
  }

  if (isBrowser && !mediaBlobUrl) {
    // Handle the case when mediaBlobUrl is not available yet
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default VideoUploader;
