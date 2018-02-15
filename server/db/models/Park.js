require('../db_connections')();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  parkName: String,
  parkDesc: String,
  parkCoordinates: { lat: Number, lang: Number },
  rating: Number,
  wazeLink: String,
  tags: Array,
  picturesUrl: { small: Array, big: String }
});

module.exports = mongoose.model('Park', ParkSchema);
