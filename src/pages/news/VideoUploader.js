import { ReactMediaRecorder, useMediaRecorder } from "react-media-recorder";

import React from 'react'
export default function VideoUploader(){

 const { status, startRecording, stopRecording, mediaBlobUrl } = useMediaRecorder({video:true})
  return (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
)
}
