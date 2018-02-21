require('../db_connections')();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  parkName: String,
  parkDesc: String,
  parkCoordinates: { lat: Number, lng: Number },
  rating: Number,
  views: Number,
  city: String,
  tags: Array,
  picturesUrl: { small: Array, big: String }
});

module.exports = mongoose.model('Park', ParkSchema);
