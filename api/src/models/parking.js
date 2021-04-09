const mongoose = require('mongoose')

const modelName = 'Parking'
const collectionName = 'parkings'
const schema = {
  name: String,
  type: String,
  city: String,
  status: String,
  used: Boolean,
  phone: String,
  city: String,
}

module.exports = mongoose.model(modelName, schema, collectionName)