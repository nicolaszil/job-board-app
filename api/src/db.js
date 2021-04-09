const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/mongo-learning',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

db = mongoose.connection;
db.on('error', console.error.bind(console, "Unable to connect to database !"));
db.once('open', () => { console.log("Connected to MongoDB (via Mongoose)"); });
