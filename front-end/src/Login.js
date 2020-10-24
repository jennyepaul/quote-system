import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (user === "admin" && password === "admin") {
      props.history.push("/Page1");
    } else {console.log("login failed");
        alert('Incorrect Username or Password');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="user" bsSize="large">
              <Form.Label>User</Form.Label>
              <Form.Control
                autoFocus
                type="user"
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
