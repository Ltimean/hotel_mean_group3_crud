var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
  hotelId: String,
  hotelName: String,
  city: String,
  description: String,
  hotelAddress: String,
  contact: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hotel', HotelSchema);
