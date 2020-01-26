/* eslint-env mocha */
const should = require('should')
const request = require('supertest')
const server = require('../server/server')

describe('Users API', () => {
  let app = null
  let testUsers = require('../mock/users')

  let testRepo = {
    getAllUsers () {
      return Promise.resolve(testUsers).catch(err => err)
    },
    getUserById (id) {
      return Promise.resolve(testUsers.find(user => user.id === id)).catch(err => err)
    }
  }

  beforeEach(() => {
    return server.start({
      port: 3000,
      repo: testRepo
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('can return all users', (done) => {
    request(app)
      .get('/users')
      .expect((res) => {
        res.body.should.be.Array
      })
      .expect(200, done)
  })

  it('returns 200 for an known user', (done) => {
    request(app)
      .get('/users/1')
      .expect((res) => {
        res.body.should.Object
      })
      .expect(200, done)
  })
})
