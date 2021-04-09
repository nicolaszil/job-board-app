const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const handlebars = require('express-handlebars')

const mainRouter = require('./routes/main')
const parkingRouter = require('./routes/parking')
require('./db')()

const app = express()

const limiterConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many accounts created from this IP, please try again after a minute"
};

app.engine('handlebars', handlebars({ layoutsDir: './views/layouts' }))
app.set("view engine", "handlebars")

app.use(morgan("common"))
app.use(helmet())
app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(rateLimit(limiterConfig))

app.use(express.static('public'))
app.use(express.json());
app.use(mainRouter);
app.use(parkingRouter);

app.listen(3000, () => {
  console.log("Server is up on port 3000")
})
