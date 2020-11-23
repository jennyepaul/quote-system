import React from "react";
import "./Page3.css";
import axios from "axios";
import { Button,} from "react-bootstrap";

class QuoteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    discount: 0,
    price: 0,
    finalprice: 0,
    quote_name: '',
    order: '',
    associate: '',
    custid: '',
    amount: 0,
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
    const id = {
        id: this.state.id
    }
    const discount = {
        discount: this.state.discount
    }
    const associate = {
        associate: this.state.associate
    }
    const custid = {
        custid: this.state.custid
    }
    const amount = {
        amount: this.state.amount
    }
    const order = {
        order: this.state.order
    }
    const price = {
        price: this.state.price
    }

  const finalDiscount = {
      finalDiscount: this.state.finalDiscount
  }
//handle final price
  const finalPrice = {
    finalPrice: this.state.finalPrice
  };
//handle quote name
  const quote_name = {
    quote_name: this.state.quote_name
  };
  //the following blocks of code handle the post/put requests
  axios({
    method: "put",
    url:    "http://localhost:3001/quote/" + id,
    data: {
         discount: discount,
         price: price,
         finalPrice: finalPrice,
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

  axios({
      method: "post",
      url: "http://blitz.cs.niu.edu/PurchaseOrder/",
      data: {
        order: order,
        associate: associate,
        custid: custid,
        amount: amount,
      }
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
          <Button
                onClick={this.handleSubmit}
                variant="danger" type="submit"
               >
                Purchase Order
         </Button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default QuoteTable;
