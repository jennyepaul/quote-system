import React from "react";
import "./Page4.css";
import axios from "axios";
import { Button,} from "react-bootstrap";

class QuoteTable extends React.Component {
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


handleAssociateIdChange = (event) => {
	this.setState({
		associate: { ...this.state.associate, id: event.target.value }

	})
}

handleQuoteIdChange = (event) => {
	this.setState({
		quote: { ...this.state.quote, id: event.target.value },
	})
}

getAssociateInfo = () => {
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
						Commission: {this.state.associate.commission}
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
				<Button style = {{ marginLeft: ".5em"  }} onClick={this.getQuote}>Get Associate Info</Button>
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
						Discount: {this.state.quote.discount}
					</div>
					<div className="col">
						Price: {this.state.quote.price}
					</div>
				</div>
				<div className="row">
					<div className="col">
						Sactioned/Unresolved: {this.state.quote.sanctioned_unresolved}
					</div>
					<div className="col">
						Final Price: {this.state.quote.final_price}
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
/*import React from "react";
import "./Page4.css";
import axios from "axios";
//import { Button } from "react-bootstrap";
//import emailjs from "emailjs-com";

class QuoteTable4 extends React.Component {
    state = {
      query: '',
    results: {},
    filteredDate: []	    
    };
 	
    handleInputChange = event => {
	    const query = event.target.value;

	    this.setState(prevState=> {
		    const filteredData = prevState.data.filter(element => {
			    return element.id.includes(query);
		    });

		    return {
			    query,
			    filteredData
 	 };
       });
    };

    getData = () => {
      fetch('http://localhost:3001/quote/')
	.then(response => console.log(response))
	.then(data => {
		const { query } = this.state;
		const filteredData = data.filter(element => {
			return element.id.includes(query);
		});

		this.setState({
			data,
			filteredData
		});
	});
    };
    
    componentWillMount() { 
   	   this.getData();
    }

render() {
	return (
	
	
	 	<div className ="table">
		 <div className="table-title">
		 Search Sales Associate and Quote Information
		 </div>
		  <div className="table-content">
		   <div className="table-header">
		    <div className="table-row">
		     <div className="table-data">
		      <div> 
		      Type Sales Associate ID to Retrieve Sales Associate Information
		      </div>
		     </div>
		     <div className="table-data">
                        <label className="search-label" htmlFor="search-input">

		        <input
		        	type="text"
		                value={this.state.query}
				id="search-input"
				placeholder="Search..."
				onChange={this.handleOnInputChange}
		       />
		       </label>
			 <div>{this.state.filteredData.map(i => <p>{i.id}</p>)}</div>		      
		     </div>
		    </div>
		    <div className="table-row">
		     <div className="table-data">
		      <div>
		      Type Quote ID to Retrieve Quote Information
		      </div>
		     </div>
		     <div className="table-data">
                        <label className="search-label" htmlFor="search-input">

		        <input
		        	type="text"
		                value=""
				id="search-input"
				placeholder="Search..."
				onChange={this.handleOnInputChange}
		       />
		       </label>
		     </div>
		    </div>
		   </div>
		  </div>
		 </div>
		     

	)
}
}
export default QuoteTable4; */
