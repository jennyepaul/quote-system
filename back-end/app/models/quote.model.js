//written by Jennifer Paul: 11/16/20
const sql = require("./db.js");

// constructor
const Quote = function(quote) {
  this.id = quote.id;
  this.name = quote.name;
  this.secret_notes = quote.secret_notes;
  this.customer_email = quote.customer_email;
  this.discount = quote.discount;
  this.price = quote.price;
  this.sanctioned_unresolved = quote.sanctioned_unresolved;
  this.final_price = quote.final_price;
};

//create a new quote
Quote.create = (newQuote, result) => {
  sql.query("INSERT INTO quote SET ?", newQuote, (err, res)  =>{
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created quote: ", { id: res.insertId, ...newQuote });
    result(null, { id: res.insertId, ...newQuote });
  });

};

//find an quote by its id
Quote.findById = (quoteId, result) => {
  sql.query(`SELECT * FROM quote WHERE id = ${quoteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found quote: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found associate with the id
    result({ kind: "not_found" }, null);
  });
};

//get all the quotes in the database
Quote.getAll = result => {
  sql.query("SELECT * FROM quote", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("quotes: ", res);
    result(null, res);
  });
};

//update a quote found by their id
Quote.updateById = (id, quote, result) => {
  sql.query(
    "UPDATE quote SET name = ?, secret_notes = ?, customer_email = ?, discount = ?, price = ?, sanctioned_unresolved = ?, final_price = ? WHERE id = ?",
    [quote.name, quote.secret_notes, quote.customer_email, quote.discount, quote.price, quote.sanctioned_unresolved,quote.final_price ,id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found associate with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated quote: ", { id: id, ...quote });
      result(null, { id: id, ...quote });
    }
  );
};

//remove just one quote
Quote.remove = (id, result) => {
  sql.query("DELETE FROM quote WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found quotes with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted quote with id: ", id);
    result(null, res);
  });
};

//remove all quotes in the table
Quote.removeAll = result => {
  sql.query("DELETE FROM quote", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} quotes`);
    result(null, res);
  });
};
module.exports = Quote;
