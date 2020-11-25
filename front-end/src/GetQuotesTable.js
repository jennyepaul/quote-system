import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function QuotesTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [customerID, setCustomerID] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/quote/")
      .then((res) => {
        setRows(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("http://localhost:3001/customers/" + customerID)
      .then((res) => {
        console.log(res.data.contact);
        setContact(res.data.contact);
        //return(res.data.contact);
        
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log("got to button press");
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Secret Notes</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Sanctioned Unresolved</TableCell>
              <TableCell align="right">Final Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.discount}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.secret_notes}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.sanctioned_unresolved}</TableCell>
                <TableCell align="right">{row.final_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
              Please enter the ID of the customer you want the email from.
          </label>
          <br/>
          <input
            name="customer_id"
            type="number"
            value={customerID}
            onChange={(event) =>
              setCustomerID(event.target.value)
            }
          />
          <br/><br/>
          <Button type="submit">Get Customer Email</Button>
          <br/><br/>
          {contact}
        </form>
      </TableContainer>
    </div>
  );
}
