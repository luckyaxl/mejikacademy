/* eslint-disable no-unused-expressions */

/** Docs https://www.apollographql.com/docs/react/data/mutations/ */

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Splash from "../../components/Splash";
import logo from "../../assets/images/logo.svg";
import eyes from "../../assets/images/eyes.svg";
import eyesopn from "../../assets/images/eyesopn.svg";

import { Mutation } from "@apollo/react-components";
import { setToken } from "../../config";
import { validateEmail } from "../../utils/validate";

import gql from "graphql-tag";

const LOGIN = gql`
  mutation login($email: EmailAddress!, $password: String) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        role
      }
    }
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      loading: false,
      visible: false,
      auth: false,
      invalid: false,
      data: { email: "", password: "" }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false });
    }, 1000);
  }

  show = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSubmit = async (login, e) => {
    this.setState({ loading: true });
    e.preventDefault();

    try {
      const variables = this.state.data;

      if (validateEmail(variables.email)) {
        const data = await login({
          variables
        });
        const token = data.data.login.token;
        const role = data.data.login.user.role;
        setToken(token, role);
        this.props.history.replace("/");
      } else {
        console.log("invalid email");
      }
    } catch (error) {
      console.log("Not Authenticated");
      this.setState({ loading: false, invalid: true });
    }
  };

  handleChange = e => {
    const { data, invalid } = this.state;

    if (invalid) {
      this.setState({ invalid: false });
    }

    this.setState({ data: { ...data, [e.target.name]: e.target.value } });
  };

  render() {
    if (this.state.load) {
      return <Splash />;
    }

    const { state } = this;

    return (
      <div className="__login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5" style={{ alignItems: "center" }}>
              <div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="__logo mb-4">
                    <Link to="/">
                      <img src={logo} alt="..." />
                    </Link>
                  </div>
                  <div className="text-center text-white">
                    <h3>Login</h3>
                    <p>Login and start managing your learning process!</p>
                    {state.invalid ? (
                      <small className="text-warning">
                        Invalid Email or Password
                      </small>
                    ) : null}
                  </div>

                  <Mutation mutation={LOGIN}>
                    {login => (
                      <form onSubmit={event => this.handleSubmit(login, event)}>
                        <div className="form-group mb-3">
                          <label className="text-white small bold">Email</label>
                          <input
                            autoComplete="off"
                            className="forms"
                            placeholder="e.g najib@mail.com"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={state.data.email}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="text-white small bold">
                            Password
                          </label>
                          <img
                            onClick={this.show}
                            src={this.state.visible ? eyesopn : eyes}
                            alt="..."
                            className="errspan"
                          />
                          <input
                            autoComplete="off"
                            className="forms"
                            placeholder="Input your password"
                            type={this.state.visible ? "text" : "password"}
                            name="password"
                            onChange={this.handleChange}
                            value={state.data.password}
                          />
                        </div>

                        <div className="d-flex justify-content-between">
                          <div className="custom-control custom-checkbox mr-3">
                            <input
                              className="custom-control-input"
                              id="furnished"
                              type="checkbox"
                              value="Furnished"
                            />
                            <label
                              className="custom-control-label text-white"
                              htmlFor="furnished"
                            >
                              <small>Keep me signed in</small>
                            </label>
                          </div>
                          <Link to="/forgot-password">
                            <button
                              type="button"
                              className="btn btn-link small p-0 text-warning"
                            >
                              <small>Forgotten your password</small>
                            </button>
                          </Link>
                        </div>
                        <div className="text-center">
                          <button
                            disabled={this.state.loading}
                            type="submit"
                            className="btn btn-block btn-warning my-4"
                          >
                            {this.state.loading && (
                              <div className="loader"></div>
                            )}
                            {!this.state.loading && <span>Login</span>}
                          </button>
                        </div>
                        <div className="text-center">
                          <small className="text-warning">
                            Don't have an account yet?{" "}
                          </small>
                          <Link to="/register">
                            <button
                              type="button"
                              className="btn btn-link text-warning p-0"
                            >
                              <small className="bold">Register here</small>
                            </button>
                          </Link>
                        </div>
                      </form>
                    )}
                  </Mutation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
