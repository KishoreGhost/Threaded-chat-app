const configuration = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'turn:TURN_SERVER_URL', username: 'USERNAME', credential: 'PASSWORD' },
    ],
  };
  
  const createPeerConnection = () => {
    return new RTCPeerConnection(configuration);
  };
  
  module.exports = createPeerConnection;
  