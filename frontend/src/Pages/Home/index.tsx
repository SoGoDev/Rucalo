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


  onValueChange(field) {
    return function (value) {
      this.setState({[field]: value})
    }.bind(this)
  }

  renderButtons() {
    return (
      <div className="control-buttons">
        <Button
          variant="contained"
          className="button-contained"
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

