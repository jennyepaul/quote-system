import React from "react";
import "./Page4.css";
import axios from "axios";
//import { Button } from "react-bootstrap";
//import emailjs from "emailjs-com";

class QuoteTable4 extends React.Component {
  constructor(props) {
    super(props);
    state = {
      query: '',
    results: {},
    filteredDate: []	    
    };
	
    handleInputChange = event => {
	    const query = event.target.value;

	    this.setState(prevState=> {
		    const filteredData = prevState.data.filter(element => {
			    return element.name.toLowerCase().includes(query.toLowerCase());
		    });

		    return {
			    query,
			    filteredData
 	 };
       });
    };

    getData = () => {
      axios.get('http://localhost:3001/quote/')
	.then(res => //I dont know what to put here 
	.then(data => {
		const { query } = this.state;
		const filteredData = data.filter(element => {
			return element.name.toLowerCase().includes(query.toLowerCase());
		});

		this.setState({
			data,
			filteredData
		});
	});
    };
    
    componentWillMount() { //keep getting an error here saying it expected a ';'not sure if I can use this function
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
		       <div>{this.state.filteredData.map(i=> <p>{i.name}</p>)}</div>
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
export default QuoteTable4; 
