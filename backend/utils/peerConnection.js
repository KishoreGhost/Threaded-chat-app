const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    {
      urls: 'turn:TURN_SERVER_URL',
      username: process.env.TURN_USERNAME,
      credential: process.env.TURN_PASSWORD,
    },
  ],
  iceTransportPolicy: 'relay', // Force TURN relay for added security
};

module.exports = configuration;
