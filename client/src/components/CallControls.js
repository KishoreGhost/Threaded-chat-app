import React from 'react';

const CallControls = ({ onToggleVideo, onToggleAudio }) => {
  return (
    <div className="flex gap-4">
      <button onClick={onToggleVideo} className="bg-blue-500 text-white p-2 rounded">
        Toggle Video
      </button>
      <button onClick={onToggleAudio} className="bg-blue-500 text-white p-2 rounded">
        Toggle Audio
      </button>
    </div>
  );
};

export default CallControls;
