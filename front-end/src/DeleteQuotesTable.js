import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function DeleteQuoteTable() {  //class that allows the deletion of quote table data
  const [id, setID] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "delete",
      url: "http://localhost:3001/quote/" + id,       //deletes data based on id
    }).then(
      (response) => {
        console.log(response);
        window.location.reload();                   //relaods page
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div className="table">
      <div className="table-title">
        &nbsp;</div>
        <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Delete Quote</div>             {/*banner*/}
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-data">
            <div>Quote ID</div>                 {/*quote id field*/}

            <input
              type="number"
              value={id}
              name="id"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
        </div>
        <div className="floated">
          <div> 
            <Button onClick={handleSubmit}>Delete Quote</Button>    {/*delete button*/}
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="float-right">
            <Button variant="secondary" style={{ float: 'right' }} href="./Page3">Next Page &#8594;</Button>  {/*next page button*/}
      </div>
    </div>
  );
}
