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

describe('POST /games', () => {
  it('required fields must be included in body to post, less recieve a 422', async () => {
    let game = {
      genre: 'Mideval Lawn',
      releaseYear: 1427
    }
    const response = await request(server)
      .post('/games')
      .send(game)
    
    expect(response.status).toEqual(422);
  })

  it('required fields must be included in body to post', async () => {
    let game = {
      title: 'Poke the Possibly Plauge-Riddled Dead Rat',
      genre: 'Mideval Lawn',
      releaseYear: 1427
    }
    const response = await request(server)
      .post('/games')
      .send(game);
    
    expect(response.status).toEqual(200);
  })
})