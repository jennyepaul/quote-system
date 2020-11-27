import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function EditQuoteTable() {  //class that allows the editing of quote table data
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [secretnotes, setSecretNotes] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const [sanctioned_unresolved, setSanctioned_Unresolved] = useState("");
  const [finalprice, setFinalPrice] = useState(0);

  function handleSubmit(event) {  //handles submission
    event.preventDefault();
    axios({
      method: "put",
      url: "http://localhost:3001/quote/" + id,   //changes data based on id
      data: {                                     // data that's being put
        name: name,
        secret_notes: secretnotes,
        customer_email: email,
        discount: discount,
        price: price,
        sanctioned_unresolved: sanctioned_unresolved,
        final_price: finalprice,
        description: description,
      },
    }).then(
      (response) => {
        console.log(response);
        window.location.reload();                 // reloads page
      },  
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div className="table">
      <div className="table-title">&nbsp;</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Edit Quote</div>             {/*banner*/}
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Quote ID</div>                  {/*edit id field*/}

            <input
              type="number"
              value={id}
              name="id"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Quote Name</div>           {/*edit quote name field*/}

            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Discount</div>           {/*edit discount field*/}

            <input
              type="number"
              value={discount}
              name="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Description</div>        {/*edit description field*/}

            <input
              type="text"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Secret Notes</div>       {/*edit secret notes field*/}

            <input
              type="text"
              value={secretnotes}
              name="secretnotes"
              onChange={(e) => setSecretNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Customer Email</div>     {/*edit customer field field*/}

            <input
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Price</div>            {/*edit price field*/}

            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Sanctioned or Unresolved</div>   {/*edit sanc or unsanc field*/}

            <input
              type="text"
              value={sanctioned_unresolved}
              name="sanctioned_unresolved"
              onChange={(e) => setSanctioned_Unresolved(e.target.value)}
            />
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Final Price</div>            {/*edit final price field*/}

            <input
              type="number"
              value={finalprice}
              name="finalprice"
              onChange={(e) => setFinalPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="floated">             {/*button that sends data*/}
          <div>
            <Button onClick={handleSubmit}>Edit Quote</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
