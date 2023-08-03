import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder"; 

const VideoUploader = () => {
  const [useReactMediaRecorder, setUseReactMediaRecorder] = useState(null);

  useEffect(() => {
    // Dynamically import the module when the component mounts
    import("react-media-recorder").then((module) => {
      setUseReactMediaRecorder(module.useReactMediaRecorder);
    });
  }, []);

  if (!useReactMediaRecorder) {
    return <div>Loading...</div>; // Or any placeholder while loading the module
  }

  const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
  };

  // Web Worker setup wrapped in a browser check
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create the Web Worker only in the browser environment
      const worker = new Worker("your-worker-file.js");
      // Use the worker as needed...
    }
  }, []);

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    facingMode: { exact: "environment" },
  });

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
