const axios = require('axios');

const loadTest = async () => {
  const promises = [];
  for (let i = 0; i < 100; i++) {
    promises.push(
      axios.post('http://localhost:5000/api/message/send', { message: `Message ${i}` })
    );
  }
  const results = await Promise.all(promises);
  console.log(`Completed ${results.length} requests`);
};

loadTest();
