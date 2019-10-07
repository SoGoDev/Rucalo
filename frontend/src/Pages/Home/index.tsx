import * as React from 'react'
import Input from "@material-ui/core/TextField";
import BaseComponent from "../../Framework/Fundamental/Base/BaseComponent";
import {STORE_CONNECT} from "../../Framework/Store/Decorators";

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

  render() {
    return (
      <div className="home-page">
        <div className="auth-block">
          <Input
            id="login"
            label="Login"
            onChange={this.onValueChange("login")}
          />
          <Input
            id="password"
            label="Password"
            onChange={this.onValueChange("password")}
          />
        </div>
      </div>
    )
  }
}

