import React from 'react';

const ManageRoles = ({ members, onRoleChange, onRemove }) => {
  return (
    <div>
      {members.map((member) => (
        <div key={member.userId} className="flex items-center gap-4">
          <p>{member.username}</p>
          <select value={member.role} onChange={(e) => onRoleChange(member.userId, e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button onClick={() => onRemove(member.userId)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ManageRoles;
