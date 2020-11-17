//written by Jennifer Paul: 11/16/20
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

  // Delete an associate with ID
  app.delete("/associate/:associateId", associate.delete);

  // Delete associates
  app.delete("/associate", associate.deleteAll);

};
