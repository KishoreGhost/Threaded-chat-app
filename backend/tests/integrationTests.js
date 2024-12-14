const request = require('supertest');
const app = require('../server');

describe('Integration Tests', () => {
  it('should save and retrieve a message', async () => {
    const saveResponse = await request(app)
      .post('/api/message')
      .send({ message: 'Test Message', sender: 'User1', receiver: 'User2' });

    expect(saveResponse.status).toBe(201);

    const getResponse = await request(app).get('/api/messages');
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.messages[0].message).toBe('Test Message');
  });
});
