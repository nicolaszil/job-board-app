const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;

const connectURL = 'mongodb://127.0.0.1:27017'
const config = { useNewUrlParser: true };
const dbName = 'mongo-learning';

mongoClient.connect(connectURL, config, (error, client) => {
  if (error) return console.log("Unable to connect to database !")
  console.log("Connected to MongoDB");

  const db = client.db(dbName);
  const parkings = db.collection('parkings');

  parkings
    .find({ type: "AIRPORT" })
    .toArray((error, result) => {
      if (error) return console.log("Unable to find parkings: ", error);
      console.log("find", result);
    });

  parkings.findOne(
    { name: "Parking 3" },
    (error, result) => {
      if (error) return console.log("Unable to find parking: ", error);
      console.log("findOne", result);
    });

  parkings.insertOne(
    {
      name: `Parking ${Math.floor(Math.random() * 5) + 1}`,
      type: "STATION",
      city: "Toulouse",
    },
    (error, result) => {
      if (error) return console.log("Unable to insert parking: ", error);
      console.log("insertOne", result.insertedCount);
    },
  );

  parkings.insertMany(
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
      console.log("insertMany", result.insertedCount);
    },
  );

  parkings.updateOne(
    { name: "Parking 5" },
    { $set: { status: "open", used: false } },
    (error, result) => {
      if (error) return console.log("Unable to update parking: ", error);
      console.log("updateOne", result.result.ok);
    },
  );

  parkings.updateMany(
    { type: "STATION" },
    [
      { $set: { status: "open", used: false } },
      { $set: { phone: "0712345678", city: "Strasbourg" } },
    ],
    (error, result) => {
      if (error) return console.log("Unable to update parkings: ", error);
      console.log("updateMany", result.modifiedCount);
    },
  );

  parkings.deleteOne(
    { city: "Toulouse" },
    (error, result) => {
      if (error) return console.log("Unable to delete parking: ", error);
      console.log("deleteOne", result.deletedCount);
    },
  );

  parkings.deleteMany(
    {},
    (error, result) => {
      if (error) return console.log("Unable to delete parkings: ", error);
      console.log("deleteMany", result.deletedCount);
    },
  );
});
