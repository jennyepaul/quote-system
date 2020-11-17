const Quote = require("../models/quote.model.js");

// Create and Save a new quote
exports.create = (req, res) => {
  // Validate request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }

   // Create a quote
   const quote = new Quote({
     id: req.body.id,
     name: req.body.name,
     secret_notes: req.body.secret_notes,
     customer_email: req.body.customer_email,
     discount: req.body.discount,
     price: req.body.price,
     sanctioned_unresolved: req.body.sanctioned_unresolved
   });

   // Save quotes in the database
   Quote.create(quote, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the quote."
       });
     //else res.send(data);
     else res.send(data);
   });
};

// Retrieve all quotes from the database.
exports.findAll = (req, res) => {
  Quote.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quotes."
      });
    else res.send(data);
  });
};

// Find a single quote with an ID
exports.findOne = (req, res) => {
  Quote.findById(req.params.quoteId, (err, data) => {
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not found quote with id ${req.params.quoteId}.`
         });
       } else {
         res.status(500).send({
           message: "Error retrieving quote with id " + req.params.quoteId
         });
       }
     } else res.send(data);
   });
};

// Update an quote identified by the Id in the request
exports.update = (req, res) => {
  // Validate Request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }

   Quote.updateById(
     req.params.quoteId,
     new Quote(req.body),
     (err, data) => {
       if (err) {
         if (err.kind === "not_found") {
           res.status(404).send({
             message: `Not found quote with id ${req.params.quoteId}.`
           });
         } else {
           res.status(500).send({
             message: "Error updating quote with id " + req.params.quoteId
           });
         }
       } else res.send(data);
     }
   );
};

//delete quote based on id
exports.delete = (req, res) => {
  Quote.remove(req.params.quoteId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found quote with id ${req.params.quoteId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete quote with id " + req.params.quoteId
        });
      }
    } else res.send({ message: `Quote was deleted successfully!` });
  });
};

//delete all the quotes
exports.deleteAll = (req, res) => {
  Quote.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all quotes."
      });
    else res.send({ message: `All quotes were deleted successfully!` });
  });
};
