const request = require('supertest');
const app = require('../../backend/server');

describe('Chat Flow Integration Test', () => {
  it('Should send and receive encrypted messages', async () => {
    const sendResponse = await request(app)
      .post('/api/message/send')
      .send({ message: 'Hello World' });
    expect(sendResponse.statusCode).toBe(200);

    const encryptedMessage = sendResponse.body.encryptedMessage;

    const receiveResponse = await request(app)
      .post('/api/message/receive')
      .send({ encryptedMessage });
    expect(receiveResponse.body.decryptedMessage).toBe('Hello World');
  });
});
