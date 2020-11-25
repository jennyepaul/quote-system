//created by Jennifer Paul:11/9/20
//functionality edited by Casey McDermott: 11/20/20
import React from "react";
import "./Page1.css";
import axios from "axios";
import { Button,} from "react-bootstrap";

class QuoteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: {
      id: 0,
      quote_name: ' ',
      secret_notes: '',
      discount:0,
      price: 0,
      sanctioned_unresolved:'',
      description: '',
      secret_notes: '',
      customer_email: '',
  },
    customers: {
      id: 0,
      name:'',
      city: '',
      street: '',
      contact: ''
    }
  };
}

handleSubmit = (event) => {
	event.preventDefault();
	axios ({
	  method: "post",
	  url: "http://localhost:3001/quote/",
	  data: {
             name: this.state.quote_name,
             description: this.state.description,
             secret_notes: this.state.secret_notes,
             customer_email: this.state.customer_email,
             price: this.state.price,
	  },
	}).then(
	  (response) => {
		  console.log(response);
		  window.location.reload();
	  },
	  (error) => {
		  console.log(error);
	  }
	);
       };

handleCustomerIDChange = (event) => {
  this.setState({
    customers: { ...this.state.customers, id: event.target.value }
  })
}

handleQuoteIdChange = (event) => {
  this.setState({
      quote: { ...this.state.quote, id: event.target.value }
  })
}

getQuote = () => {
  console.log(this.state.quote.id)
  axios({
      method: "get",
      url: "http://localhost:3001/quote/" + this.state.quote.id,

  }).then(
      (response) => {
          this.setState({
              quote: {
                  id: this.state.quote.id,
                  name: response.data.name,
                  secret_notes: response.data.secret_notes,
                  customer_email: response.data.customer_email,
                  discount: response.data.discount,
                  price: response.data.price,
                  sanctioned_unresolved: response.data.sanctioned_unresolved,
                  final_price: response.data.final_price,
                  description: response.data.description
              },
              firstDiscount: response.data.discount
          })
          console.log(response);
      },
      (error) => {
          console.log(error);
      }
  );
}

       getEmail = () => {
        console.log(this.state.customers.id)
        axios({
            method: "get",
            url: "http://localhost:3001/customers/" + this.state.customers.id,

        }).then(
            (response) => {
                this.setState({
                    customers: {
                        id: this.state.customers.id,
                        name: response.data.name,
                        city: response.data.city,
                        street: response.data.street,
                        contact: response.data.contact,
                    },
                })
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }

render() {
  return (
    <div className="table">
      <div className="table-title">Look Up Email</div>
        <div className="row">
          <div className="table-data">Enter ID below
            <div>
              <input
                type="number"
                value={this.state.customers.id}
                name="Customer Id"
                onChange={this.handleCustomerIDChange}
                />
                <Button style={{marginLeft: ".5em"}} onClick={this.getEmail}>Get Email</Button>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop: "1em", marginBottom:"1em"}}>
          <div className="row">
            <div className="col">
              Customer Contact: {this.state.customers.contact}
                <div><b>*If no email address associated, please enter one below*</b></div>
            </div>
          </div>
          <div className="table">
            <div className="table-title">Enter a new sales quote...</div>
              <div class-Name="table-content">
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

                    <input
                      type="text"
                      name="quote_name"
                      value={this.state.quote_name}
                      onChange={(event) => this.setState({quote_name: event.target.value})}
                    />
                  </div>
                  <div className="table-data">
                    <input
                      type="text"
                      name="price"
                      value={this.state.price}
                      onChange={(event) => this.handlePriceChange}
                    />
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-data">
                    <div>Description</div>

                    <input
                      type="text"
                      name="description"
                      value={this.state.description}
                      onChange={(event) => this.setState({description: event.target.value})}
                      />
                  </div>
                </div>
                <div className="table-row">
            <div className="table-data">
              <div>Secret Notes:</div>

                  <input
                  type="text"
                  name="secret_notes"
                  value={this.state.secret_notes}
                  onChange={(event) => this.setState({secret_notes: event.target.value})}
                  />


            </div>
              </div>
                <div className="table-row">
                  <div className="table-data">
                    <div>Customer Email:</div>

                      <input
                        type="text"
                        name="customer_email"
                        value={this.state.customer_email}
                        onChange={(event) => this.setState({customer_email: event.target.value})}
                      />


                    </div>
                </div>
              </div>
            </div>
            <div className="table=row">
            <div className="table-data">
	            <div align ="left">
	              <div>
	                <Button variant="danger" onClick={this.handleSubmit}>Finalize Quote</Button>
	              </div>
                </div>
              <div className="table-data">
	              <div align="right">
	            <div>
	              <Button variant="secondary" href="./Page2">Next Page</Button>
	            </div>
	            </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
}

  export default QuoteTable;
