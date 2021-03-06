import React from "react";
import "./Page4.css";
import axios from "axios";
import { Button,} from "react-bootstrap";

class QuoteTable extends React.Component {			//constructor for associate and quote
	constructor(props) {
		super(props);
		this.state = {
		associate: {
			id:0,
			name:'',
			password:'',
			commission:0,
			address:''
		},
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
		}	
		};
	}


handleAssociateIdChange = (event) => {					//handles input id of associate
	this.setState({
		associate: { ...this.state.associate, id: event.target.value }

	})
}

handleQuoteIdChange = (event) => {						//handles input id of quote 
	this.setState({
		quote: { ...this.state.quote, id: event.target.value },
	})
}

getAssociateInfo = () => {								//retrieves the associate info from associate database
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
					address: response.data.address,
				},
			})
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);
}

getQuote = () => {										//retrieves quote information from quote database
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

render () {
	return (
		<div className="table">
			<div className="table-title">Look up Sales Associate and Quote Info by ID Number</div>
			<div className="row">
				<div className="col">
					Enter Associate ID
				</div>
				</div>
				<div className="row">
					<div className="col">
				<input 
					type="number"
					value={this.state.associate.id}
					name="Associate ID"
					onChange={this.handleAssociateIdChange}
				/>
				<Button style = {{ marginLeft: ".5em"  }} onClick={this.getAssociateInfo}>Get Associate Info</Button>
				<div><b>*If no information shown, there is no Associate found. Please enter another ID.*</b></div>
				</div>
				</div>
			<div className="container" style={{marginTop: "1em, marginBottom: 1em"}}>
				<div className="row">
					<div className="col">
						Associate Name:	{this.state.associate.name}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Password: {this.state.associate.password}
					</div>
					<div className="col">
						Commission: ${this.state.associate.commission}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Address: {this.state.associate.address}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					Enter Quote ID
				</div>
				</div>
				<div className="row">
					<div className="col">
				<input 
					type="number"
					value={this.state.quote.id}
					name="Quote ID"
					onChange={this.handleQuoteIdChange}
				/>
				<Button style = {{ marginLeft: ".5em"  }} onClick={this.getQuote}>Get Quote Info</Button>
				<div><b>*If no information shown, there is no Quote found. Please enter another ID.*</b></div>
				</div>
				</div>
			<div className="container" style={{marginTop: "1em, marginBottom: 1em"}}>
				<div className="row">
					<div className="col">
						Quote Name:	{this.state.quote.name}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Secret Notes: {this.state.quote.secret_notes}
					</div>
					<div className="col">
						Customer Email: {this.state.quote.customer_email}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Discount: ${this.state.quote.discount}
					</div>
					<div className="col">
						Price: ${this.state.quote.price}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Sactioned/Unresolved: {this.state.quote.sanctioned_unresolved}
					</div>
					<div className="col">
						Final Price: ${this.state.quote.final_price}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Description: {this.state.quote.description}
					</div>
				</div>
			</div>
		</div>
	)
}
}
export default QuoteTable;
