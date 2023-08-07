import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
//import Worker from 'worker-loader/lib/worker';

const VideoUploader = () => {
  const [status, setStatus] = useState('');
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState('');

  const { startRecording, stopRecording } = useReactMediaRecorder({ video: true });

  const onRecord = () => {
    if (!recording) {
      startRecording();
      setStatus('Recording...');
    }
  };

  const onStop = () => {
    if (recording) {
      stopRecording();
      setStatus('Stopped recording');
      setMediaBlobUrl(useReactMediaRecorder.getBlobUrl());
    }
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={onRecord}>Start Recording</button>
      <button onClick={onStop}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default VideoUploader;
