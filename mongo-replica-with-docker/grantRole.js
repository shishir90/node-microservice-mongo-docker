admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "shishir", [ "root" , { role: "root", db: "admin" } ] )
