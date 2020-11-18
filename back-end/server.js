const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require('cors')
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to quote-system application." });
});

//add in access control
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

require("./app/routes/salesAssociate.routes.js")(app);
require("./app/routes/quote.routes.js")(app);
require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
