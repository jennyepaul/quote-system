import React, { useState } from "react";
import "./Page1.css";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";

const _defaultQuote = [
  {
    item_id: " ",
    price: 0,
    discount: 0,
    description: " "
  }
];

const QuoteTable = () => {
  const [costs, setCosts] = useState(_defaultQuote);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
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
              <div>Quote Name</div>
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
                  value={item.item_id}
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
              <div>Discount:</div>
              <input
                name="discount"
                type="text"
              />
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Description:</div>
              <input
                name="description"
                type="text"
              />
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Secret Notes:</div>
              <input
                name="secret-notes"
                type="text"
              />
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Customer Email:</div>
              <input
                id="customer-email"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total After Discount:</div>
            </div>
          </div>
        </div>
      </div>
      <div className="table=row">
        <div align="centered">
          <Button variant="danger">Finalize Quote</Button>
        </div>
      </div>
    </div>
    );
};

export default QuoteTable;
