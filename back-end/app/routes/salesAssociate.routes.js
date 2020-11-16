module.exports = app => {
  const associate = require("../controller/salesAssociate.controller.js");

  // Create a new sales asssociate
  app.post("/associate", associate.create);

  // Retrieve all associates
  app.get("/associate", associate.findAll);

  // Retrieve a single associate with ID
  app.get("/associate/:associateId", associate.findOne);

  // Update an associate with their ID
  app.put("/associate/:associateId", associate.update);

};
