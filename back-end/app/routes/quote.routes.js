module.exports = app => {
  const quote = require("../controller/quote.controller.js");

  // Create a new quote
  app.post("/quote", quote.create);

  // Retrieve all quotes
  app.get("/quote", quote.findAll);

  // Retrieve a single quote with ID
  app.get("/quote/:quoteId", quote.findOne);

  // Update a quote with their ID
  app.put("/quote/:quoteId", quote.update);

  // Delete an quote with its ID
  app.delete("/quote/:quoteId", quote.delete);

  // Delete quotes
  app.delete("/quote", quote.deleteAll);

};
