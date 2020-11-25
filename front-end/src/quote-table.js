//created by Jennifer Paul:11/9/20
import React from "react";
import "./Page1.css";
import axios from "axios";
import { Button,} from "react-bootstrap";
//import { makeStyles } from "@material-ui/core";

class QuoteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: {
      quote_name: ' ',
      price: 0,
      description: '',
      secret_notes: '',
      customer_email: '',
  },
    customers: {
      id:0,
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

handleEmailChange = (event) => {
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
        console.log(this.state.customers.contact)
        axios({
            method: "get",
            url: "http://blitz.cs.niu.edu/customers" + this.state.customers.contact,

        }).then(
            (response) => {
                this.setState({
                    quote: {
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

 /*   getAssociate = () => {
        console.log(this.state.associate.id)
        axios({
            method: "get",
            url: "http://localhost:3001/associate/" + this.state.associate.id,

        }).then(
            (response) => {
                this.setState({
                    associate: {
                      id: this.state.associate.id,
                      name: response.data.name,
                      password: response.data.password,
                      commission: response.data.commission,
                      address: response.data.address
                    },
                })
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }*/

/*get the info/data from api
componentDidMount = event => {
axios.get('http://blitz.cs.niu.edu/PurchaseOrder/')
   .then(response => {
      console.log(response.data);
  })
    .catch(error => {
      console.log(error);
  });
}

handleSubmit = event => {
    event.preventDefault();
//handle quote_name
  const quote_name = {
    quote_name: this.state.quote_name
  };
//handle quote price
  const price = {
    price: this.state.price
  };

//handle quote description
  const description = {
      description: this.state.description
    };

//handle quote secret note
  const secret_notes = {
      secret_notes: this.state.secret_notes
    };

//handle customer email attached to quote
  const customer_email = {
      customer_email: this.state.customer_email
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
handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    },() =>{
    this.setState({
      amount: this.state.price - this.state.discount
    });
    });
  }
  handleDiscountChange = (event) => {
      this.setState({
        discount: event.target.value
      },() => {
      this.setState({
        amount: this.state.price - this.state.discount
      });
      });
    }*/

render() {
  return (
    <div className="table">
      <div className="table-title">Look Up Email</div>
        <div className="row">
          <div className="table-data">Enter ID below
            <div>
              <input
                type="number"
                value={this.state.quote.id}
                name="Quote Id"
                onChange={this.handleQuoteIDChange}
                />
                <Button style={{marginLeft: ".5em"}} onClick={this.getEmail}>Get Email</Button>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop: "1em", marginBottom:"1em"}}>
          <div className="row">
            <div className="col">
              Customer Email: {this.state.customers.contact}
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
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
}

  export default QuoteTable;
/*    <div className="table">
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
                  onChange={this.handlePriceChange}
                   />


              </div>
            </div>
          <div className="table-row">
            <div className="table-data">
              <div>Description:</div>

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
	  <div align ="left">
	   <div>
	    <Button variant="danger" onClick={this.handleSubmit}>Finalize Quote</Button>
	   </div>
	  <div align="right">
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
export default QuoteTable;*/
//        <div align="centered">
//          <div>
//              <Button
//                variant="danger"
//                href="./Page2"
//               >
//                Finalize Quote
//              </Button>
//          </div>
//        </div>
//      </div>
//    </div>
//  )
//}
//
//export default QuoteTable;
