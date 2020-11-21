//created by Jennifer Paul:11/9/20
import React from "react";
import "./Page1.css";
import axios from "axios";
import { Button,} from "react-bootstrap";
//import emailjs from "emailjs-com";

class QuoteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    quote_name: ' ',
    price: 0,
    description: '',
    secret_notes: '',
    customer_email: '',
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
	
handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    },() =>{
    this.setState({
      amount: this.state.price - this.state.discount
    });
    });
  }



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
                  value={this.state.quote_name}
                  onChange={(event) => this.setState({quote_name: event.target.value})}
                />
                <button type="submit">Confirm</button>
              </form>
              </div>
              <div className="table-data">
               <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  />
                  <button type="submit">Confirm</button>
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
                  value={this.state.description}
                  onChange={(event) => this.setState({description: event.target.value})}
                  />
                  <button type="submit">Confirm</button>
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
                  value={this.state.secret_notes}
                  onChange={(event) => this.setState({secret_notes: event.target.value})}
                  />
                  <button type="submit">Confirm</button>
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
                  value={this.state.customer_email}
                  onChange={(event) => this.setState({customer_email: event.target.value})}
                  />
                  <button type="submit">Confirm</button>
                </form>
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
export default QuoteTable;
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
