//written by Jennifer Paul: 11/16/20
const sql = require("./db.js");

// constructor
const Associate = function(associate) {
  this.id = associate.id;
  this.name = associate.name;
  this.password = associate.password;
  this.commission = associate.commission;
  this.address = associate.address;
};

//create a new associate
Associate.create = (newAssociate, result) => {
  sql.query("INSERT INTO salesAssociate SET ?", newAssociate, (err, res)  =>{
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created associate: ", { id: res.insertId, ...newAssociate });
    result(null, { id: res.insertId, ...newAssociate });
  });

};

//find an associated by their id
Associate.findById = (associateId, result) => {
  sql.query(`SELECT * FROM salesAssociate WHERE id = ${associateId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found associate: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found associate with the id
    result({ kind: "not_found" }, null);
  });
};

//get all the associates in the database
Associate.getAll = result => {
  sql.query("SELECT * FROM salesAssociate", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sales associates: ", res);
    result(null, res);
  });
};

//update an associate found by their id
Associate.updateById = (id, associate, result) => {
  sql.query(
    "UPDATE salesAssociate SET name = ?, password = ?, commission = ?, address = ? WHERE id = ?",
    [associate.name, associate.password, associate.commission, associate.address, id],
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

      console.log("updated associate: ", { id: id, ...associate });
      result(null, { id: id, ...associate });
    }
  );
};

//remove just one associate
Associate.remove = (id, result) => {
  sql.query("DELETE FROM salesAssociate WHERE id = ?", id, (err, res) => {
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

    console.log("deleted associate with id: ", id);
    result(null, res);
  });
};

//remove all associates in the table
Associate.removeAll = result => {
  sql.query("DELETE FROM salesAssociate", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} associate`);
    result(null, res);
  });
};
module.exports = Associate;
