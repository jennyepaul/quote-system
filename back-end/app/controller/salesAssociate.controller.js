const Associate = require("../models/salesAssociate.model.js");

// Create and Save a new associate
exports.create = (req, res) => {
  // Validate request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }

   // Create an associate
   const associate = new Associate({
     id: req.body.id,
     name: req.body.name,
     password: req.body.password,
     commission: req.body.commission,
     address: req.body.address
   });

   // Save associate in the database
   Associate.create(associate, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the associate."
       });
     //else res.send(data);
     else res.send(data);
   });
};

// Retrieve all associate from the database.
exports.findAll = (req, res) => {
  Associate.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving associates."
      });
    else res.send(data);
  });
};

// Find a single associate with an ID
exports.findOne = (req, res) => {
  Associate.findById(req.params.associateId, (err, data) => {
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not found associate with id ${req.params.associateId}.`
         });
       } else {
         res.status(500).send({
           message: "Error retrieving associate with id " + req.params.associateId
         });
       }
     } else res.send(data);
   });
};

// Update an associate identified by the Id in the request
exports.update = (req, res) => {
  // Validate Request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }

   Associate.updateById(
     req.params.associateId,
     new Associate(req.body),
     (err, data) => {
       if (err) {
         if (err.kind === "not_found") {
           res.status(404).send({
             message: `Not found associate with id ${req.params.associateId}.`
           });
         } else {
           res.status(500).send({
             message: "Error updating associate with id " + req.params.associateId
           });
         }
       } else res.send(data);
     }
   );
};
