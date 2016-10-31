import React, { Component } from 'react';
import { Col, Label, Button } from 'reactstrap';
import './register.scss';

class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render = () => {
    return (
      <section className="register">
        <Col className="logo-container">
          <span className="auth-logo">Foodgram</span>
        </Col>
        <Col xs={{ size: 10, offset: 1}} id="form">
          <span>Sign up to add photos and comment from your favourite restaurant.</span>
          <hr />
          <form ref="registerForm" onSubmit={this.handleSubmit} className="form-inline">
            <Label hidden>Email</Label>
            <input type="email" ref="email" placeholder="Email" className="form-control auth-input"/>
            <Label hidden>Restaurant Name</Label>
            <input type="text" ref="username" placeholder="Username" className="form-control auth-input"/>
            <Label hidden>Login</Label>
            <input type="text" ref="login" placeholder="Login" className="form-control auth-input"/>
            <Label hidden>Password</Label>
            <input type="password" ref="password" placeholder="Password" className="form-control auth-input"/>
            <Button type="submit" className="auth-button">Sign up</Button>
          </form>
          <Col id="rules">
            By signing up, you agree to our Terms & Privacy Policy.
          </Col>
        </Col>
      </section>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const username = this.refs.username.value;
    const login = this.refs.login.value;
    const password = this.refs.password.value;
    this.props.register(email, username, login, password);
    this.refs.registerForm.reset();
  }
}

Register.propTypes = {
  register: React.PropTypes.func,
};

export default Register;