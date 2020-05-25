import React, { Component } from "react";
import TextInput from "../toolbox/TextInput";

import {
  Form,
  FormGroup,
  Label, 
  Button,
  Row,
  Col,
} from "reactstrap";
import "../../Style/App.css";
import { withRouter } from "react-router-dom";

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    let path = "/product"; 
    this.props.history.push(path);
  };

  render() {
    return (
      <Row>
        <Col xs="4"></Col>
        <Col xs="4">
          <Label for="uyeGiris" className="App">
            Üye Giriş
          </Label>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <TextInput
                type="email"
                name="email"
                label="Email"
                id="exampleEmail"
                placeHolder="Email with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                type="password"
                label="Password"
                name="password"
                id="examplePassword"
                placeHolder="password placeholder"
              />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Col>
        <Col xs="4"></Col>
      </Row>
    );
  }
}

export default withRouter(Login);
