import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = data => {
    return this.props
      .login(data)
      .then(() => this.props.history.push("/dashboard"));
  };

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit={this.submit} />

        <Link to="/forgot_password">Forgot Password</Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
