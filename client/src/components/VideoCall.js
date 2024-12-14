import React, { useRef, useEffect } from 'react';

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let peerConnection;

  useEffect(() => {
    const startCall = async () => {
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = localStream;

      peerConnection = new RTCPeerConnection();
      localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

      peerConnection.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // For testing, create a mock connection
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
    };

    startCall();
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
    </div>
  );
};

export default VideoCall;
