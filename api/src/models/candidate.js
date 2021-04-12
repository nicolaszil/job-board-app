const mongoose = require('mongoose')

const modelName = 'Candidate'
const collectionName = 'candidates'
const schema = {
  jobTitle: String,
  jobStatus: String,
  companyName: String,
  startDate: Date,
  endDate: Date,
  isCurrent: Boolean,
  location: String,
  project: String,
  techStack: String,
  project: String,
  tasks: [String],
}

module.exports = mongoose.model(modelName, schema, collectionName)