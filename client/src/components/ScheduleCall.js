import React, { useState } from 'react';

const ScheduleCall = ({ onSchedule }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSchedule = () => {
    const dateTime = new Date(`${date}T${time}`);
    onSchedule(dateTime);
  };

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="block p-2 border mb-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="block p-2 border mb-2"
      />
      <button onClick={handleSchedule} className="bg-green-500 text-white p-2 rounded">
        Schedule Call
      </button>
    </div>
  );
};

export default ScheduleCall;
