admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "shishir",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("shishir", "password" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "password",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
