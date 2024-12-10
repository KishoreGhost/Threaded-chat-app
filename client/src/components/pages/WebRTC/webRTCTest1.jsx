import React, { useRef, useState } from "react";
import SimplePeer from "simple-peer";
import io from "socket.io-client";

// Replace with your backend URL if hosted elsewhere
const socket = io("http://localhost:5000");

const WebRTCTest1 = () => {
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  // Get User Media (Access Camera)
  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      })
      .catch((error) => console.error("Error accessing media devices", error));
  };

  // Handle Call Button
  const callUser = (id) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", { userToCall: id, signalData: data });
    });

    peer.on("stream", (userStream) => {
      userVideo.current.srcObject = userStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  // Handle Receiving Call
  socket.on("callUser", (data) => {
    setReceivingCall(true);
    setCallerSignal(data.signal);
  });

  const acceptCall = () => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      socket.emit("acceptCall", { signal: data });
    });

    peer.on("stream", (userStream) => {
      userVideo.current.srcObject = userStream;
    });

    peer.signal(callerSignal);
    setCallAccepted(true);
    connectionRef.current = peer;
  };

  return (
    <div>
      <button onClick={startStream}>Start Camera</button>
      <div>
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          style={{ width: "300px" }}
        />
        {callAccepted && (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            style={{ width: "300px" }}
          />
        )}
      </div>
      <div>
        <button onClick={() => callUser("another-user-id")}>Call User</button>
        {receivingCall && <button onClick={acceptCall}>Accept Call</button>}
      </div>
    </div>
  );
};

export default WebRTCTest1;
