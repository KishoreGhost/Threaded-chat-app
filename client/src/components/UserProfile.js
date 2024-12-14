import React, { useState } from 'react';

const UserProfile = ({ user, onUpdate }) => {
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');

  const handleSave = () => {
    onUpdate({ displayName, profilePicture });
  };

  return (
    <div className="p-4 border rounded">
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
        className="block p-2 border mb-2"
      />
      <input
        type="url"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
        placeholder="Profile Picture URL"
        className="block p-2 border mb-2"
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default UserProfile;
