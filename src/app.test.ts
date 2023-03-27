import request from 'supertest';
import app from './app';

describe('POST /ping', () => {
  it('should return "ping" when a POST request is received', async () => {
    const response = await request(app).post('/ping').send({});
    expect(response.status).toBe(200);
    expect(response.text).toBe('ping');
  });
});
