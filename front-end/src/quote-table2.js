//created by Jennifer Paul:11/13/20
import React from "react";
import "./Page2.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import emailjs from "emailjs-com";

class QuoteTable2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote_name: " ",
      price: 0,
      discount: 0,
      description: "",
      secret_notes: "",
      customer_email: "",
      amount: 0,
      sanctioned_unresolved: "",
      final_price: 0,
      redirect: true,
    };
  }

  // handles the send email functionality
  sendEmail = (e) => {
    e.preventDefault();
  // calss the emailjs library 
    emailjs
      .sendForm(
        "service_600dn2o",
        "template_t2k8c7f",
        e.target,
        "user_QsIdHra0fgorqNc7Le7iG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
//handles submission of form
  handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:3001/quote/",      //posts data to quote table based on data
      data: {
        name: this.state.quote_name,
        secret_notes: this.state.secret_notes,
        customer_email: this.state.customer_email,
        discount: this.state.discount,
        price: this.state.price,
        sanctioned_unresolved: this.state.sanctioned_unresolved,
        final_price: this.state.final_price,
        description: this.state.description,
      },
    }).then(
      (response) => {
        console.log(response);
        window.location.reload();             //relaods page
      },
      (error) => {
        console.log(error);
      }
    );
  };
  handlePriceChange = (event) => {          //this handles the price change 
    this.setState(
      {
        price: event.target.value,
      },
      () => {
        this.setState({                     //sets the final amount 
          amount: this.state.price - this.state.discount,
        });
      }
    );
  };
  handleDiscountChange = (event) => {       //handles discount change 
    this.setState(
      {
        discount: event.target.value,
      },
      () => {
        this.setState({
          amount: this.state.price - this.state.discount,   //sets the final amount 
        });
      }
    );
  };

  render() {
    return (
      <div className="table">
        <form className="contact-form" onSubmit={this.sendEmail}>
          <div className="table-title">Edit & Finalize Quote...</div>   {/*banner*/}
          <div className="table-content">
            <div className="table-header">
              <div className="table-row">
                <div className="table-data">
                  <div>Add New Quote</div>              {/*add quote banner*/}
                </div>
              </div>
            </div>

            <div className="table-body">
              <div className="table-row">
                <div className="table-data">
                  <div>Quote Name</div>               {/*add quote name field*/}

                  <input
                    type="text"
                    name="quote_name"
                    value={this.state.quote_name}
                    onChange={(event) =>
                      this.setState({ quote_name: event.target.value })
                    }
                  />
                </div>
              </div>

              <div className="table-row">
                <div className="table-data">
                  <div>Discount:</div>           {/*add quote discount field*/}

                  <input
                    type="text"
                    name="discount"
                    value={this.state.discount}
                    onChange={this.handleDiscountChange}
                  />
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">
                  <div>Description:</div>        {/*add quote description field*/}

                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">
                  <div>Secret Notes:</div>         {/*add quote secret notes field*/}

                  <input
                    type="text"
                    name="secret_notes"
                    value={this.state.secret_notes}
                    onChange={(event) =>
                      this.setState({ secret_notes: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">
                  <div>Customer Email:</div>       {/*add quote customer email field*/}
                  <input
                    type="text"
                    name="customer_email"
                    value={this.state.customer_email}
                    onChange={(event) =>
                      this.setState({ customer_email: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">
                  <div>Price</div>                 {/*add quote price field*/}

                  <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                  />
                </div>
              </div>
            </div>
            <div className="table-footer">
              <div className="table-row">
                <div className="table-data">
                  <div>Total After Discount(Final Price):</div>   {/*banner*/}
                  <p>{this.state.amount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="table=row">
            <div className="floated">
              <div>                                         {/*button that sets add quote sanction field*/}
                <Button
                  variant="success"
                  onClick={(event) =>
                    this.setState({
                      sanctioned_unresolved: "SANCTIONED",
                      final_price: this.state.amount,
                    })
                  }
                >
                  SANCTIONED
                </Button>
              </div>
            </div>
            <div className="floated">
              <div>                                      {/*button that sets add quote unresolved field*/}
                <Button 
                  variant="danger"
                  onClick={(event) =>
                    this.setState({
                      sanctioned_unresolved: "UNRESOLVED",
                      final_price: this.state.amount,
                    })
                  }
                >
                  UNRESOLVED
                </Button>
              </div>
            </div>
          </div>
          <br /> <br /> <br />
          <div className="floated">
            <div>                                          {/*button that SENDS QUOTE TO customer*/}
              <Button 
              variant="warning" 
              type="submit"
              value={this.state.final_price}
              >
                Send Quote Email
              </Button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="floated">
            <div>
              <Button onClick={this.handleSubmit}>Add Quote</Button>     {/*button that posts quote*/}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuoteTable2;
