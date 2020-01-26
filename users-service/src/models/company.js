const mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

mongoose.model('Company', companySchema);
