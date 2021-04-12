const Candidate = require('../src/models/candidate')
const MockData = require('../mocks/candidates.json');

Candidate.insertMany(
  MockData,
  (error, result) => {
    if (error) return console.log("Unable to insert candidates: ", error);
    console.log("result", result);
  },
);
