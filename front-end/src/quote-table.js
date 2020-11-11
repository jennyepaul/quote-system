import React from 'react';
import "./Page1.css";
import axios from "axios";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";

//const _defaultQuote = [
  //{
    //quote_name: " ",
//    discount: 0,
  //  description: " ",
    //secret_note: " ",
  //  customer_email: " "
//  }
//];

export default class QuoteTable extends React.Component {
  state = {
    quote_name: " ",
    price: 0,
    discount: 0,
    description: "default",
    secret_notes: "default",
    customer_email: "default"
  }

handleChange = event => {
  event.preventDefault();

//handle quote_name
  const quote_name = {
    quote_name: this.state.quote_name
  };
//handle quote price
  const price = {
    price: this.state.price
  };

//handle quote discount
  const discount = {
    price: this.state.price
  };

//handle quote description
  const description = {
      price: this.state.description
    };

//handle quote secret note
  const secret_notes = {
      price: this.state.secret_notes
    };

//handle customer email attached to quote
  const customer_email = {
      price: this.state.customer_email
    };

//the following blocks of code handle the post requests
  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {quote_name})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {price})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {discount})
    .then(res => {
    console.log(res);
    console.log(res.data);
    })

  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {description})
    .then(res => {
    console.log(res);
    console.log(res.data);
    })

  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {secret_notes})
    .then(res => {
    console.log(res);
    console.log(res.data);
    })

  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {customer_email})
    .then(res => {
    console.log(res);
    console.log(res.data);
    })
}

render() {
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
            <div className="table-row">
              <div className="table-data">
                <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="quote_name"
                  onChange={this.handleChange}
                />
                </form>
              </div>
              <div className="table-data">
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="price"
                onChange={this.handleChange}
              />
              </form>
              </div>
            </div>
          <div className="table-row">
            <div className="table-data">
              <div>Discount:</div>
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="discount"
                onChange={this.handleChange}
              />
              </form>
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Description:</div>
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="description"
                onChange={this.handleChange}
              />
              </form>
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Secret Notes:</div>
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="secret_notes"
                onChange={this.handleChange}
              />
              </form>
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
              <div>Customer Email:</div>
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="customer_email"
                onChange={this.handleChange}
              />
              </form>
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
    )
  }
}
