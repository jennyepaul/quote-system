//written by Jennifer Paul: 11/15/20
const Parts = require("../models/parts.model.js");

// Create and Save a new part
exports.create = (req, res) => {
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a part
    const newPart = new Parts({
      number: req.body.number,
      description: req.body.description,
      price: req.body.price,
      weight: req.body.weight,
    });

    // Save part in the database
    Parts.create(newPart, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the part."
        });
      else res.send(data);
    });
  };

// Retrieve all parts from database
exports.findAll = (req, res) => {
  Parts.getAll((err, data) => {
   if (err)
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving parts."
     });
   else res.send(data);
 });
};

// Find a single part by part number
exports.findOne = (req, res) => {
    Parts.findByNumber(req.params.partNumber, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found part with number ${req.params.partNumber}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving part with id " + req.params.partNumber
          });
        }
      } else res.send(data);
    });
};

// Update a part identified by the number of the part
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Parts.updateByNumber(
    req.params.partNumber,
    new Parts(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
              message: `Not found part with number ${req.params.partNumber}.`
            });
        } else {
          res.status(500).send({
            message: "Error updating part with number " + req.params.partNumber
          });
        }
      } else res.send(data);
    }
  );

};
