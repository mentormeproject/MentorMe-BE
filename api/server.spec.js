const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
  describe('GET /', () => {
    it('should return status 200', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
})
