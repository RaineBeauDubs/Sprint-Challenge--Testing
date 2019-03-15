const request = require('supertest');
const server = require('./server.js');


describe("GET /games", () => {
  it("should return status code 200", async () => {
    const response = await request(server).get("/games");

    expect(response.status).toBe(200);
  });

  it('should return an array, even if there are no games', async () => {
    const expected = [];
    const response = await request(server).get('/games');

    expect(response.body.games).toEqual(expect.arrayContaining(expected));
  })
});