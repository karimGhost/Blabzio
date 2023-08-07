import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

function VideoUploader() {
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const handleRecordingStart = () => {
    setRecording(true);
    setRecordedBlob(null);
  };

  const handleRecordingStop = (blobUrl) => {
    setRecording(false);
    setRecordedBlob(blobUrl);
  };

  return (
    <div>
      <h2>Video Recorder</h2>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            {status === "idle" ? (
              <button onClick={startRecording} disabled={recording}>
                Start Recording
              </button>
            ) : (
              <button onClick={stopRecording} disabled={!recording}>
                Stop Recording
              </button>
            )}

            {/* Show the real-time recording preview */}
            {status === "recording" && <video src={mediaBlobUrl} autoPlay loop />}

            {/* Show the recorded video after recording */}
            {recordedBlob && (
              <div>
                <video src={recordedBlob} controls />
              </div>
            )}
          </div>
        )}
        onStart={handleRecordingStart}
        onStop={handleRecordingStop}
      />
    </div>
  );
}

export default VideoUploader;
