const mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address'},
  phone: String,
  website: String,
  company: { type: Schema.Types.ObjectId, ref: 'Company'}
});

mongoose.model('User', userSchema);