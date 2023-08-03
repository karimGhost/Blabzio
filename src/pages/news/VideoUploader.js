import React, { useState, useEffect } from "react";

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

  // Once the module is loaded, continue with the rest of your code
  // (the code from your original implementation)
  const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
  };
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
