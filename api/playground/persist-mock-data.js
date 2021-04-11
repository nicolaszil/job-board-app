const Parking = require('../src/models/parking')
const MockData = require('../mocks/parkings.json');

Parking.insertMany(
  MockData,
  (error, result) => {
    if (error) return console.log("Unable to insert parkings: ", error);
    console.log("insertMany", result);
  },
);
