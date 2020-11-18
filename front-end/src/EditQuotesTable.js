import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function EditQuoteTable() {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [secretnotes, setSecretNotes] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const [sanctioned_unresolved, setSanctioned_Unresolved] = useState("");
  const [finalprice, setFinalPrice] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "put",
      url: "http://localhost:3001/quote/" + id,
      data: {
       
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
        window.location.reload();
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
              <div>Edit Quote</div>
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="table-data">
            <div>Quote ID</div>

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
            <div>Quote Name</div>

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
            <div>Discount</div>

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
            <div>Description</div>

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
            <div>Secret Notes</div>

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
            <div>Customer Email</div>

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
            <div>Price</div>

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
            <div>Sanctioned or Unresolved</div>

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
            <div>Final Price</div>

            <input
              type="number"
              value={finalprice}
              name="finalprice"
              onChange={(e) => setFinalPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="floated">
          <div>
            <Button onClick={handleSubmit}>Edit Quote</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
