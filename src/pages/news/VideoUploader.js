import React, { useState } from "react";
import RecordRTC from "recordrtc";

function VideoUploader() {
  const [recording, setRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setMediaStream(stream);

      const recorder = new RecordRTC(stream, { type: "video" });
      recorder.startRecording();
      setRecording(true);

      // Stop recording after 10 seconds (adjust as needed)
      setTimeout(() => {
        recorder.stopRecording(() => {
          setRecording(false);
          setRecordedBlob(recorder.getBlob());
          stream.getTracks().forEach(track => track.stop());
        });
      }, 40000);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const playRecordedBlob = () => {
    if (recordedBlob) {
      const videoElement = document.getElementById("recorded-video");
      videoElement.src = URL.createObjectURL(recordedBlob);
      videoElement.play();
    }
  };

  return (
    <div>
      <h2>Video Recorder with RecordRTC</h2>
      {recording ? (
        <p>Recording...</p>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}

      {mediaStream && (
        <video src={URL.createObjectURL(mediaStream)} autoPlay muted />
      )}

      {recordedBlob && (
        <div>
          <button onClick={playRecordedBlob}>Play Recorded Video</button>
          <video id="recorded-video" controls />
        </div>
      )}
    </div>
  );
}

export default VideoUploader;
