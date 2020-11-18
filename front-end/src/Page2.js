//created by Jennifer Paul: 11/13/20
import React from "react";
import QuoteTable2 from "./quote-table2.js";
import "./Page2.css";
import QuotesTable from './GetQuotesTable.js';
import EditQuoteTable from './EditQuotesTable.js';
import DeleteQuoteTable from './DeleteQuotesTable.js';

function App() {
  return (
    <div className="Title">
      <h1>ABC PLANT PARTS</h1>
      <div className="Page">
        <QuoteTable2 />
        <EditQuoteTable/>
        <DeleteQuoteTable/>
        <QuotesTable/>
      </div>
    </div>
  );
}
export default App;
