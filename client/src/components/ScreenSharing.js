import React, { useRef } from 'react';

const ScreenSharing = ({ onShare }) => {
  const screenVideoRef = useRef(null);

  const startScreenShare = async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    screenVideoRef.current.srcObject = screenStream;
    onShare(screenStream);
  };

  return (
    <div>
      <button onClick={startScreenShare} className="bg-purple-500 text-white p-2 rounded">
        Share Screen
      </button>
      <video ref={screenVideoRef} autoPlay />
    </div>
  );
};

export default ScreenSharing;
