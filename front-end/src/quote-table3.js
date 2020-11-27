import React from "react";
import "./Page3.css";
import axios from "axios";
import { Button, } from "react-bootstrap";

class QuoteTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addDiscount: 0,
            firstDiscount: 0,
            finalPrice: 0,
            id: '',
            quote: {
                id: 0,
                name: '',
                secret_notes: '',
                customer_email: '',
                discount: 0,
                price: 0,
                sanctioned_unresolved: '',
                final_price: 0,
                description: ''
            },
            quote_name: '',
            purchase: {
                order: '',
                associate: '',
                custid: 0,
                amount: 0,
            },
            associate: {
                id: 0,
                name: '',
                password: '',
                commission: '',
                address: ''
            },
            purchaseResponse: {
                order: '',
                associate: '',
                custid: '',
                amount: '',
                name: '',
                processDay: '',
                commission: '',
                timeStamp: '',
                _id: '',
            },
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

        //the following blocks of code handle the post/put requests
        axios.put(
            "http://localhost:3001/quote/" + this.state.quote.id,
            this.state.quote
        ).then(
            (response) => {
                console.log(response);
                //window.location.reload();
            },
            (error) => {
                console.log(error);
            }
        );

        axios.post(
            "http://blitz.cs.niu.edu/PurchaseOrder/",

            {
                order: this.state.purchase.order,
                associate: this.state.associate.name,
                custid: this.state.quote.id,
                amount: this.state.quote.final_price
            }
        ).then(
            (response) => {
                this.setState({
                    purchaseResponse: {
                        order: response.data.order,
                        associate: response.data.associate,
                        custid: response.data.custid,
                        amount: response.data.amount,
                        name: response.data.name,
                        processDay: response.data.processDay,
                        commission: response.data.commission,
                        timeStamp: response.data.timeStamp,
                        _id: response.data._id
                    },
                })
                console.log(response);
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    handleDiscountChange = (event) => {
        this.setState({
            addDiscount: event.target.value
        })

    }

    handleQuoteIdChange = (event) => {
        this.setState({
            quote: { ...this.state.quote, id: event.target.value },
            custid: { ...this.state.custid, id: event.target.value },
            purchase: { ...this.state.purchase, custid: event.target.value }
        })
    }

    handleOrder = (event) => {
        this.setState({
            purchase: { ...this.state.quote, order: event.target.value }
        })
    }

    handleAssociateChange = (event) => {
        this.setState({
            associate: { ...this.state.associate, id: event.target.value },
            purchase: { ...this.state.purchase, associate: event.target.value }
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

    getAssociate = () => {
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
    }

    addDiscount = () => {
        let final_discount = Number(this.state.addDiscount) + Number(this.state.quote.discount)
        this.setState({
            quote: { ...this.state.quote, discount: final_discount, final_price: this.state.quote.price - final_discount }
        })

    }

    getCustid = () => {
        let custid = (this.state.quote.id)
        this.setState({
            purchase: { ...this.state.purchase, custid: this.state.purchase.custid = this.state.quote.id }
        })

    }

    getAmount = () => {
        let amount = Number(this.state.quote.final_price)
        this.setState({
            purchase: { ...this.state.purchase, amount: this.state.purchase.amount = this.state.quote.final_price }
        })
    }
    render() {
        return (
            <div className="table" >
                <div className="table-title">Finalize Quote & Convert to Purchase Order</div>
                <div className="row">
                    <div className="table-data">
                        <div>Enter Quote ID</div>
                    </div>
                    <div className="table-data">
                    </div>
                </div>
                <div className="row">
                    <div className="table-data">
                        <input
                            type="number"
                            value={this.state.quote.id}
                            name="Quote ID"
                            onChange={this.handleQuoteIdChange}
                        />
                        <Button style={{ marginLeft: ".5em" }} onClick={this.getQuote}>Get Quote</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-data">
                        <div>Enter Order Number</div>
                        <input
                            type="text"
                            value={this.state.purchase.order}
                            name="Order"
                            onChange={this.handleOrder}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="table-data">Enter Associate ID
                    <div>
                            <input
                                type="number"
                                value={this.state.associate.id}
                                name="Associate ID"
                                onChange={this.handleAssociateChange}
                            />
                            <Button style={{ marginLeft: ".5em" }} onClick={this.getAssociate}>Get Associate</Button>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "1em", marginBottom: "1em" }}>
                    <div className="row">
                        <div className="col">
                            Customer Name: {this.state.quote.name}
                        </div>
                        <div className="col">
                            Customer Email: {this.state.quote.customer_email}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Description: {this.state.quote.description}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Discount: ${this.state.firstDiscount}
                        </div>
                        <div className="col">
                            Price: ${this.state.quote.price}
                        </div>
                    </div>
                </div>
                <div className="table-content">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-data">
                                Add Discount
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                        <div className="table-row">
                            <div className="table-data">
                                <input
                                    type="number"
                                    value={this.state.addDiscount}
                                    name="discount"
                                    onChange={this.handleDiscountChange}
                                />
                                <Button style={{ marginLeft: ".5em" }} onClick={this.addDiscount}>Confirm</Button>

                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-data">
                                <div>Added Discount: ${this.state.addDiscount}</div>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-data">
                                Final Discount: ${this.state.quote.discount}
                            </div>
                            <div className="table-data">
                                Final Price: ${this.state.quote.final_price}
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="table=row">
                    <h4>Purchase Order Processed</h4>
                </div>

                <div className="table-data"> Order: {this.state.purchaseResponse.order}</div>
                <div className="table-data"> Associate: {this.state.purchaseResponse.associate}</div>
                <div className="table-data"> Customer ID: {this.state.purchaseResponse.custid}</div>
                <div className="table-data"> Amount: {this.state.purchaseResponse.amount}</div>
                <div className="table-data"> Name: {this.state.purchaseResponse.name}</div>
                <div className="table-data"> Process Day: {this.state.purchaseResponse.processDay}</div>
                <div className="table-data"> Commission: {this.state.purchaseResponse.commission}</div>
                <div className="table-data"> Time Stamp: {this.state.purchaseResponse.timeStamp}</div>
                <div className="table-data"> ID: {this.state.purchaseResponse._id}</div>
            </div>
        )
    }
}

export default QuoteTable;
