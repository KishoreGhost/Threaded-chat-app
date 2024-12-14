import React from 'react';

const reactions = ['👍', '❤️', '😂', '😮', '😢'];

const MessageReactions = ({ messageId, onReact }) => {
  return (
    <div className="flex gap-2">
      {reactions.map((reaction) => (
        <button
          key={reaction}
          onClick={() => onReact(messageId, reaction)}
          className="text-lg"
        >
          {reaction}
        </button>
      ))}
    </div>
  );
};

export default MessageReactions;
