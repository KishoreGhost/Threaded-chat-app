const request = require('supertest');
const app = require('../server');

describe('Chat API Tests', () => {
  it('should save an encrypted message', async () => {
    const response = await request(app)
      .post('/api/message')
      .send({ message: 'Hello World', sender: 'User1', receiver: 'User2' });

    expect(response.status).toBe(201);
    expect(response.body.data.message).toBeDefined();
  });

  it('should retrieve decrypted messages', async () => {
    const response = await request(app).get('/api/messages');
    expect(response.status).toBe(200);
    expect(response.body.messages[0].message).toBe('Hello World');
  });
});
