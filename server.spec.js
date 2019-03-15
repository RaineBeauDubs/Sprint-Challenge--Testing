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
  });

  it('should return as JSON', async () => {
    const response = await request(server).get('/games');

    expect(response.type).toBe('application/json');
  });
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

  it('should return a status 200 when all required fields are filled out', async () => {
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

  it('should post as JSON', async () => {
    const response = await request(server).post('/games');

    expect(response.type).toBe('application/json');
  });



  // it('should post when required fields are filled out', async () => {
  //   let game = {
  //     title: 'Poke the Possibly Plauge-Riddled Dead Rat',
  //     genre: 'Mideval Lawn',
  //     releaseYear: 1427
  //   }
  //   const response = await request(server)
  //     .post('/games')
  //     .send(game);
    

  //   expect(response.body.games).toEqual(expect.objectContaining(game));
  // })
})