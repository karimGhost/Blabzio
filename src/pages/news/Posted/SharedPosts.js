import React, { useRef, useState, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

export default function SharedPosts() {
  const [enable, setEnable] = useState(false); // Set to 'false' initially

  useEffect(() => {
    setEnable(true); // Set 'enable' to 'true' on the client-side
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>
        <ReactMediaRecorder
          // Other props...
          render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => {
            console.log(previewStream);
            const isRecording = status === 'recording';

            return (
              <div>
                <p>{status}</p>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
                <button
                  onClick={() => {
                    startRecording();
                    setTimeout(() => {
                      stopRecording();
                      setEnable(false);
                    }, 2000);
                  }}
                >
                  togglestreaming
                </button>
                {isRecording && <video src={mediaBlobUrl} controls autoPlay loop />}
                {isRecording && <VideoPreview stream={previewStream} />}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
