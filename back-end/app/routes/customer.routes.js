//written by Jennifer Paul: 11/15/20

module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Retrieve all Customers
  app.get("/customers", customers.getAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findById);

};
