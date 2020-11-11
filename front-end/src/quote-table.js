import React from "react";
import "./Page1.css";
import axios from "axios";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";

export default class QuoteTable extends React.Component {
  state = {
    quote_name: " ",
    price: 0,
    discount: 0,
    description: "",
    secret_notes: "",
    customer_email: "",
    total:0
  }

handleInChange = event => {
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
    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {quote_name})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {price})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {discount})
      .then(res => {
      console.log(res);
      console.log(res.data);
      })

    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {description})
      .then(res => {
      console.log(res);
      console.log(res.data);
      })

    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {secret_notes})
      .then(res => {
      console.log(res);
      console.log(res.data);
      })

    axios.put("http://blitz.cs.niu.edu/PurchaseOrder/", {customer_email})
      .then(res => {
      console.log(res);
      console.log(res.data);
      })
}

handleOutChange= (event) => {
  this.setState({
    total: this.state.price - this.state.discount
  });
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
                  onChange={this.handleInChange}
                />
              </form>
              </div>
              <div className="table-data">
               <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="price"
                  onChange={this.handleInChange}
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
                  onChange={this.handleInChange}
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
                  onChange={this.handleInChange}
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
                  onChange={this.handleInChange}
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
                  onChange={this.handleInChange}
                  />
                </form>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total After Discount:</div>
                <form onChange = {this.handleOutChange}>
                </form>
                  <p>{this.state.total}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table=row">
        <div align="centered">
          <form onSubmit={this.handleSubmit}>
            <Button
               variant="danger"
               type="submit">
               Finalize Quote
            </Button>
          </form>
        </div>
      </div>
    </div>
    )
  }

}
