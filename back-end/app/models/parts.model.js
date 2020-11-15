//created by Jennifer Paul:11/15/20
const sql = require("./db.js");

// constructor
const Parts = function(parts) {
  this.number = parts.number;
  this.description = parts.description;
  this.price = parts.price;
  this.weight = parts.weight;
};

//insert new part into DB
Parts.create = (newPart, result) => {
  sql.query("INSERT INTO parts SET ?", newPart, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created part: ", { number: res.insertNumber, ...newPart });
    result(null, { number: res.insertNumber, ...newPart });
  });
};

//find specific part in DB
Parts.findByNumber = (partNumber, result) => {
  sql.query(`SELECT * FROM parts WHERE number = ${partNumber}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found part: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found part with the number
    result({ kind: "not_found" }, null);
  });
};

//get all the parts in the DB
Parts.getAll = result => {
  sql.query("SELECT * FROM parts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("parts: ", res);
    result(null, res);
  });
};

//update part
Parts.updateByNumber = (number, parts, result) => {
  sql.query(
    "UPDATE parts SET description = ?, price = ?, weight = ? WHERE number = ?",
    [parts.description, parts.price, parts.weight, number],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated part: ", { number: number, ...parts });
      result(null, { number: number, ...parts });
    }
  );
};

module.exports = Parts;
