'use strict'

const repository = (db) => {
  const collection = db.collection('users')

  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      const users = []
      const cursor = collection.find({})
      const addUser = (user) => {
        users.push(user)
      }
      const sendUsers = (err) => {
        if (err) {
          reject(new Error('An error occured fetching all users, err:' + err))
        }
        resolve(users.slice())
      }
      cursor.forEach(addUser, sendUsers)
    })
  }

  const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      const sendUser = (err, user) => {
        if (err) {
          reject(new Error(`An error occured fetching a user with id: ${id}, err: ${err}`))
        }
        resolve(user)
      }
      if (typeof Number(id) === 'number') {
        collection.findOne({ id: Number(id) }, { _id: 0 }, sendUser)
      } else {
        reject(new Error('An error occurred fetching a user. This should be an id of type number'))
      }
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getAllUsers,
    getUserById,
    disconnect
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
