import request from "supertest"
import {app, server} from "../index"

function generateRandomAlphanumeric(length:number) {
  const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
    result += alphanumericCharacters.charAt(randomIndex);
  }

  return result;
}

describe('Battery API', () => {
  describe('POST /api/battery', () => {
    it('should create a new battery', async () => {
      try {
        const response = await request(app)
            .post('/api/battery')
            .send({
              name: 'TestBattery',
              postcode: generateRandomAlphanumeric(5),
              wattCapacity: 200,
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'TestBattery');
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    });

    it('should handle validation errors', async () => {
      const response = await request(app)
        .post('/api/battery')
        .send({
        });

      expect(response.status).toBe(422);
    });
  });


  describe('GET /api/battery', () => {
    it('should get all batteries with additional information', async () => {
      const response = await request(app).get('/api/battery');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('batteries');
      expect(response.body).toHaveProperty('totalWattCapacity');
      expect(response.body).toHaveProperty('averageWattCapacity');
    });
  });

  afterAll((done) => {
    server.close(done);
  });

});
