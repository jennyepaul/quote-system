import React from "react";
import "./Page3.css";
import axios from "axios";
import { Button,} from "react-bootstrap";

class QuoteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    finalDiscount: 0,
    finalprice: 0,
    quote_name: '',
  };
}

//get the info/data from api
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
//handle final discount
const finalDiscount = {
    finalDiscount: this.state.finalDiscount
  };
//handle final price
  const finalPrice = {
    finalPrice: this.state.finallPrice
  };
//handle quote name
  const quote_name = {
    quote_name: this.state.quote_name
  };
  //the following blocks of code handle the post requests
  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {finalDiscount})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {finalPrice})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  axios.post('http://blitz.cs.niu.edu/PurchaseOrder/', {finalDiscount, finalPrice, quote_name})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
handlePriceChange = (event) => {
    this.setState({
      finalPrice: event.target.value
    },() =>{
    this.setState({
      amount: this.state.finalPrice - this.state.finalDiscount
    });
    });
  }
  handleDiscountChange = (event) => {
      this.setState({
        finalDiscount: event.target.value
      },() => {
      this.setState({
        amount: this.state.finalPrice - this.state.finalDiscount
      });
      });
    }

render() {
  return (
    <div className="table">
      <div className="table-title">Finalize Quote</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Final Discount</div>
            </div>
            <div className="table-data">
              <div>Final Price</div>
            </div>
          </div>
        </div>
        <div className="table-body">
            <div className="table-row">
              <div className="table-data">
               <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="finalDiscount"
                  value={this.state.finalDiscount}
                  onChange={(event) => this.setState({finalDiscount: event.target.value})}
                />
                <button type="submit">Confirm</button>
              </form>
              </div>
              <div className="table-data">
               <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="finalPrice"
                  value={this.state.finalPrice}
                  onChange={this.handlePriceChange}
                  />
                  <button type="submit">Confirm</button>
                </form>
              </div>
            </div>
          <div className="table-row">
            <div className="table-data">
                <div>Quote Name</div>
            </div>
            <script>
            console.log(quote_name);
            </script>
          </div>
          <div className="table-row">
            <div className="table-data">
            </div>
          </div>
          <div className="table-row">
            <div className="table-data">
            </div>
          </div>
        </div>
      </div>
      <div className="table=row">
        <div align="centered">
          <div>
          <form onSubmit={this.handleSubmit}>
          <Button
                variant="danger" type="submit"
               >
                Purchase Order
              </Button>
          </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default QuoteTable;
