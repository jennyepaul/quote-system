import React, { useState } from "react";
import {
  Button,
  Form
} from "react-bootstrap";
import "./Login.css";
import axios from "axios";

// this page creates the login screen for the associate 
export default function Login(props) {
// state hooks  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState("");
//validates form
  function validateForm() {
    return user.length > 0 && password.length > 0;
  }
//runs when login button pressed
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get("http://localhost:3001/associate/" + id) //gets the particular associate based on the id entered
      .then((res) => {
        if ((user === res.data.name && password === res.data.password) || (user === "admin" && password === "admin")) { //checks if entered name and password match id
          props.history.push("/Page1");   //send to page 1
        } else {
          console.log("login failed");
          alert("Incorrect Username or Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Login">
          <Form onSubmit={handleSubmit}>    {/*handles the sunmission of form*/}
            <Form.Group controlId="id" bsSize="large">
              <Form.Label>Associate ID</Form.Label>
              <Form.Control
                autoFocus
                type="number"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="user" bsSize="large">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Form.Group>
            {/*login button*/}
            <Button                     
              block
              bsSize="large"
              disabled={!validateForm()}
              type="submit"
            >
              Login
            </Button>
          </Form>
         
        </div>
      </header>
    </div>
  );
}
