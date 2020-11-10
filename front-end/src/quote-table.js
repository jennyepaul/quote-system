import React, { useState } from "react";

import "./Page1.css"

const _defaultCosts = [
  {
    name: " ",
    price: 0
  },
  {
    name: " ",
    price: 0
  }
];

const QuoteTable = () => {
  const [costs, setCosts] = useState(_defaultCosts);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };

  const addNewCost = () => {
    setCosts(prevCosts => [...prevCosts, { name: "", price: 0 }]);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  return (
    <div className="table">
      <div className="table-title">Enter a new sales quote...</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Item ID</div>
            </div>
            <div className="table-data">
              <div>Price</div>
            </div>
          </div>
        </div>
        <div className="table-body">
          {costs.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleCostsChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewCost}>+</button>
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Description</div>
            </div>
            <div className="table-data">
              <div>Secret Notes:</div>
            </div>
            <div className="table-data">
              <div>Customer Email:</div>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              <div>{getTotalCosts()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteTable;
