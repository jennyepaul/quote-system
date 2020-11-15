//written by Jennifer Paul: 11/15/20

module.exports = app => {
  const parts = require("../controllers/parts.controller.js");

  //Create a new part
  app.post("/parts", parts.create);

  // Retrieve all parts
  app.get("/parts", parts.getAll);

  // Retrieve a single part with number
  app.get("/parts/:partNumber", parts.findByNumber);

  // Update a part with a number
  app.put("/parts/:partNumber", parts.updateByNumber);

};
