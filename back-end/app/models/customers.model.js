//created by Jennifer Paul:11/15/20
const sql = require("./blitzdb.js");

// constructor
const Customer = function(customer) {
  this.id = customer.id;
  this.name = customer.name;
  this.city = customer.city;
  this.street = customer.street;
  this.contact = customer.contact;
};

//find customer in database
Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

//get all the customers in the table
Customer.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = Customer;
