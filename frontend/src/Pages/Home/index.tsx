import * as React from 'react'
import BaseComponent from "../../Framework/Fundamental/Base/BaseComponent";
import {STORE_CONNECT} from "../../Framework/Store/Decorators";
import {Paper, Button, TextField} from "@material-ui/core";

// @ts-ignore
@STORE_CONNECT([], [])
export default class Home extends BaseComponent {

  state = {
    login: "",
    password: ""
  };


  login() {
    fetch(
      "http://localhost:8000/authorize",
      {
        method: "POST",
        mode:'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }
    )
  }

  onValueChange(field) {
    return function (value) {
      this.setState({[field]: value.target.value})
    }.bind(this)
  }

  renderButtons() {
    return (
      <div className="control-buttons">
        <Button
          variant="contained"
          className="button-contained"
          onClick={this.login.bind(this)}
        >
          SignIn
        </Button>
        <Button>
          No registration yet?
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div className="home-page">
        <div className="auth-block">
          <TextField
            id="login"
            label="Login"
            className="auth-input"
            onChange={this.onValueChange("login")}
          />
          <TextField
            id="password"
            label="Password"
            className="auth-input"
            onChange={this.onValueChange("password")}
          />
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

