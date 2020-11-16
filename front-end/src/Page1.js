//created by Jennifer Paul: 11/9/20
import React, { useState } from "react";
import QuoteTable from "./quote-table.js";
import "./Page1.css";

function App() {
  return (
    <div className="Title">
      <h1>ABC PLANT PARTS</h1>
      <div className="Page">
        <QuoteTable />
      </div>
    </div>
  );
}
export default App;
