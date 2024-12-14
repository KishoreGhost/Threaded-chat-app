const scheduleCall = async (req, res) => {
    const { dateTime, participants } = req.body;
  
    // Mock saving scheduled calls to the database
    console.log('Scheduled Call:', { dateTime, participants });
  
    // Trigger reminders 5 minutes before the call
    const reminderTime = new Date(dateTime).getTime() - 5 * 60 * 1000;
    setTimeout(() => {
      console.log('Sending reminder for call:', { dateTime, participants });
    }, reminderTime - Date.now());
  
    res.status(200).json({ message: 'Call scheduled successfully!' });
  };
  
  module.exports = { scheduleCall };
  