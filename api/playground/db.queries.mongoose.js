module.exports = function() {
  const parking = require('./models/parking');

  parking.find({ type: 'AIRPORT' }, { _id: 0, __v: 0 }, (error, result) => {
    if (error) return console.log("Unable to find parkings: ", error);
    console.log("find", result);
  });

  parking.findOne({ name: "Parking 1" }, (error, result) => {
    if (error) return console.log("Unable to find parking: ", error);
    console.log("findOne", result);
  });

  parking.create(
    {
      name: `Parking ${Math.floor(Math.random() * 5) + 1}`,
      type: "STATION",
      city: "Toulouse",
    },
    (error, result) => {
      if (error) return console.log("Unable to save parking: ", error);
      console.log("insertOne", result);
    },
  );

  parking.insertMany(
    [
      {
          "name":"Parking 1",
          "type": "AIRPORT",
          "city": "ROISSY EN FRANCE"
      },
      {
          "name":"Parking 2",
          "type": "AIRPORT",
          "city": "BEAUVAIS"
      },
      {
          "name":"Parking 3",
          "type": "AIRPORT",
          "city": "ORLY"
      },
      {
          "name":"Parking 4",
          "type": "AIRPORT",
          "city": "NICE"
      },
      {
          "name":"Parking 5",
          "type": "AIRPORT",
          "city": "LILLE"
      },
      {
          "name":"Parking A",
          "type": "OTHER",
          "city": "BORDEAUX"
      },
      {
          "name":"Parking B",
          "type": "OTHER",
          "city": "RENNES"
      },
      {
          "name":"Parking C",
          "type": "OTHER",
          "city": "NANTES"
      }
    ],
    (error, result) => {
      if (error) return console.log("Unable to insert parkings: ", error);
      console.log("insertMany", result);
    },
  );

  parking.updateOne(
    { name: "Parking 5" },
    { $set: { status: "open", used: false } },
    (error, result) => {
      if (error) return console.log("Unable to update parking: ", error);
      console.log("updateOne", result.ok);
    },
  );

  parking.updateMany(
    { type: "STATION" },
    [
      { $set: { status: "open", used: false } },
      { $set: { phone: "0712345678", city: "Strasbourg" } },
    ],
    (error, result) => {
      if (error) return console.log("Unable to update parkings: ", error);
      console.log("updateMany", result.ok);
    },
  );

  parking.deleteOne(
    { city: "Toulouse" },
    (error, result) => {
      if (error) return console.log("Unable to delete parking: ", error);
      console.log("deleteOne", result.ok);
    },
  );

  parking.deleteMany(
    { type: "OTHER" },
    (error, result) => {
      if (error) return console.log("Unable to delete parkings: ", error);
      console.log("deleteMany", result.ok);
    },
  );
}