//written by Jennifer Paul: 11/15/20

module.exports = app => {
  const customers = require("../controller/customer.controller.js");

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

};
