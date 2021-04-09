const mongoose = require('mongoose')

const parking = mongoose.model(
  'Parking',
  {
    name: String,
    type: String,
    city: String,
    status: String,
    used: Boolean,
    phone: String,
    city: String,
  },
  'parkings'
)

module.exports = parking