const mongoose = require('mongoose')
var Schema = mongoose.Schema

const geoSchema = new mongoose.Schema({
    lat: String,
    lng: String
})

const companySchema = new mongoose.Schema({
  street: String,
  suite: String,
  cite: String,
  zipcode: String,
  geo: { type: Schema.Types.ObjectId, ref: 'Geo'}
})

mongoose.model('Geo', geoSchema)
mongoose.model('Company', companySchema)
