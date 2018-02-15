require('../db_connections')();
const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkSchema = new Schema({
  parkName: String,
  parkDesc: String,
  parkCoordinates: { lat: Number, lang: Number },
  raiting: Number,
  wazeLink: String,
  tags: Array,
  picturesUrl: { small: Array, big: String }
});

module.exports = mongoose.model('ParkSchema', parkSchema);
