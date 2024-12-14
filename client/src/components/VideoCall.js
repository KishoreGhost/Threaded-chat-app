import React, { useRef, useEffect } from 'react';

const VideoCall = () => {
    const localVideoRef = useRef(null);
    let localStream;
  
    useEffect(() => {
      const startCall = async () => {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = localStream;
      };
  
      startCall();
    }, []);
  
    const toggleVideo = () => {
      localStream.getVideoTracks()[0].enabled = !localStream.getVideoTracks()[0].enabled;
    };
  
    const toggleAudio = () => {
      localStream.getAudioTracks()[0].enabled = !localStream.getAudioTracks()[0].enabled;
    };
  
    return (
      <div>
        <video ref={localVideoRef} autoPlay muted />
        <CallControls onToggleVideo={toggleVideo} onToggleAudio={toggleAudio} />
      </div>
    );
  };
  

export default VideoCall;
