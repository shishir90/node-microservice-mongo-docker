/* eslint-env mocha */
const supertest = require('supertest')

describe('node-service', () => {
  const api = supertest('http://192.168.99.100:3000')
  it('returns a 200 for a known user', (done) => {
    api.get('/users/1')
      .expect(200, done)
  })
})
