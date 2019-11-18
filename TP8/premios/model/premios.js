const mongoose = require('mongoose')

var laureatesSchema = new mongoose.Schema({
    _id: String,
    firstname: String,
    surname: String,
    motivation: String,
    share: Number
})

var premioSchema = new mongoose.Schema({
    year: String,
    category: String,
    overallMotivation: String,
    laureates: [laureatesSchema]
  });

module.exports = mongoose.model('premio', premioSchema)
