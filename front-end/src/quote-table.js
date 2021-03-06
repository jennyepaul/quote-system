//created by Jennifer Paul:11/9/20
//functionality & layout edited by Casey McDermott: 11/20/20
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

handleSubmit = (event) => {                        //sends quote information to quote database
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

handleCustomerIDChange = (event) => {             //handles input of id
  this.setState({
    customers: { ...this.state.customers, id: event.target.value }
  })
}

handleQuoteIdChange = (event) => {
  this.setState({
      quote: { ...this.state.quote, id: event.target.value }
  })
}

getQuote = () => {                            //retrieves the quote information 
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

       getEmail = () => {                       //retrieves the email from the customers database
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
      <div className="table-title"> Look Up Email</div>
      <div className="container" style={{marginTop: "1em,  marginBottom: 1em"}}>
      <div className="row">
        <div className="col">
          Enter your ID Below:
        </div>
      </div>
      <div className="row">
        <div className="col">
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
      <div className="row">
        <div className="col">
        Customer Contact: {this.state.customers.contact}
                <div><b>*If no email address associated, please enter one below*</b></div>
        </div>
      </div>
      <div className="row">
        ___________________________________________________________________________________________________________________________
      </div>

      <div className="row">
        <div className="col">
        Enter a New Sales Quote.....
        </div>
      </div>
      <div className="row">
        <div className="col">
        Quote Name
        </div>
        <div className="col">
        Price
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
                      type="text"
                      name="quote_name"
                      value={this.state.quote_name}
                      onChange={(event) => this.setState({quote_name: event.target.value})}
          />
        </div>
        <div className="col">
          <input
                      type="text"
                      name="price"
                      value={this.state.price}
                      onChange={(event) => this.setState({price: event.target.value})}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          Description:
        </div>
        <div className="col">
          Secret Notes:
        </div>
      </div>
      <div className="row">
        <div className="col">
        <input
                      type="text"
                      name="description"
                      value={this.state.description}
                      onChange={(event) => this.setState({description: event.target.value})}
                      />
        </div>
        <div className="col">
        <input
                  type="text"
                  name="secret_notes"
                  value={this.state.secret_notes}
                  onChange={(event) => this.setState({secret_notes: event.target.value})}
                  />
        </div>
      </div>
      <div className="row">
        <div className="col">
          Customer Email:
        </div>
      </div>
      <div className="row">
        <div className="col">
        <input
                        type="text"
                        name="customer_email"
                        value={this.state.customer_email}
                        onChange={(event) => this.setState({customer_email: event.target.value})}
                      />
        </div>
      </div>
      <div className="row">
        ___________________________________________________________________________________________________________________________
      </div>
      <div className="row">
        <div className="col">
        <div>
	                <Button variant="danger" onClick={this.handleSubmit}>Finalize Quote</Button>
	      </div>
        </div>
        <div className="col">
        <div>
	              <Button variant="secondary" href="./Page2">Next Page</Button>
	            </div>
        </div>
      </div>
      </div>
      </div>
  )
}
}
export default QuoteTable;
