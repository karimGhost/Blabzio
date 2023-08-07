import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const VideoUploader = () => {
  const [status, setStatus] = useState("idle");
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const onStartRecording = () => {
    setStatus("recording");
    setMediaBlobUrl(null); // Reset the mediaBlobUrl
  };

  const onStopRecording = (blobUrl) => {
    setStatus("stopped");
    setMediaBlobUrl(blobUrl); // Save the blobUrl to state
  };

  const onSaveRecording = () => {
    setStatus("idle");
    // Perform any actions needed with the saved mediaBlobUrl, like uploading to a server.
  };

  const onDiscardRecording = () => {
    setStatus("idle");
    // Discard the recording by setting mediaBlobUrl to null
    setMediaBlobUrl(null);
  };

  return (
    <div>
      <p>{status}</p>
      {/* Pass the onStopRecording callback to handle blobUrl */}
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording }) => (
          <div>
            {status === "idle" ? (
              <button onClick={startRecording}>Start Recording</button>
            ) : (
              <button onClick={stopRecording}>Stop Recording</button>
            )}
            {status === "recording" && (
              <video src={mediaBlobUrl} controls autoPlay loop />
            )}
          </div>
        )}
        onStop={onStopRecording}
      />
      {status === "stopped" && (
        <div>
          <video src={mediaBlobUrl} controls autoPlay loop />
          <button onClick={onSaveRecording}>Save</button>
          <button onClick={onDiscardRecording}>Discard</button>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
          
