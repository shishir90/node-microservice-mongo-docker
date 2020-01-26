#  Node Microservice

Quick mock up of a Node microservice, following a simple swagger schema for a user model.



**Requires**
> Docker for Mac 

### Start Mongo Replication Cluster with Docker
```
$ bash < start.sh
```

### Running local API
```
$ cd user-service && npm start
```

#### /v1.0/users
```
$ curl -X GET -H "Content-type: application/json" localhost:3000/users
```

#### /v1.0/users/{id}
```
$ curl -X GET -H "Content-type: application/json" localhost:3000/users/1
```

### Tests
```
$ cd user-service && npm run test
```

### Notes
*   User Service API for information about user(s).
*   Mongo DB instance for storing information.
*   Docker Integration for deploying.
*   Docker swarm for scalability and fault tolerance.
*   Swagger for API specification.
*   Data Model using mongoose.
*   Mocha for integration testing.
*   Security using SSL.
*   mock data for testing.
*   javascript frameworks express, morgan for api and config.

