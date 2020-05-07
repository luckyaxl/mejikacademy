import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Splash from "../../components/Splash";
import logo from "../../assets/images/logo.svg";
import eyes from "../../assets/images/eyes.svg";
import eyesopn from "../../assets/images/eyesopn.svg";

import { Mutation } from "@apollo/react-components";
import { setToken } from "../../config";
import { validateEmail } from "../../utils/validate";
import gql from "graphql-tag";

const REGISTER = gql`
  mutation register(
    $email: EmailAddress!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phoneNumber: PhoneNumber!
  ) {
    register(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
      }
    ) {
      token
      user {
        role
      }
    }
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: true,
      loading: false,
      visible: false,
      auth: false,
      data: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      }
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

  handleSubmit = async (register, e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const variables = this.state.data;

      if (validateEmail(variables.email)) {
        const data = await register({
          variables
        });
        const token = data.data.register.token;
        const role = data.data.register.user.role;
        setToken(token, role);
        this.props.history.replace("/");
      } else {
        console.log("Invalid Email");
      }
    } catch (error) {
      console.log("Not Authenticated");
      this.setState({ loading: false, invalid: true });
    }
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  render() {
    if (this.state.load) {
      return <Splash />;
    }

    if (this.state.auth) {
      return <Redirect to="/" />;
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
                    <h3>Register</h3>
                    <p>
                      Let's Create Your Account And Feel Our Premium Service
                    </p>
                  </div>

                  <Mutation mutation={REGISTER}>
                    {register => (
                      <form
                        onSubmit={event => this.handleSubmit(register, event)}
                      >
                        <div className="form-group mb-3">
                          <label className="text-white small bold">
                            First Name
                          </label>
                          <input
                            name="firstName"
                            className="forms"
                            onChange={this.handleChange}
                            value={state.firstName}
                            placeholder="e.g Lucky Kusuma"
                            type="text"
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="text-white small bold">
                            Last Name
                          </label>
                          <input
                            name="lastName"
                            className="forms"
                            onChange={this.handleChange}
                            value={state.lastName}
                            placeholder="e.g Lucky Kusuma"
                            type="text"
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="text-white small bold">Email</label>
                          <input
                            name="email"
                            onChange={this.handleChange}
                            value={state.email}
                            className="forms"
                            placeholder="e.g najib@mail.com"
                            type="email"
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
                            onChange={this.handleChange}
                            value={state.password}
                            name="password"
                            autoComplete="off"
                            className="forms"
                            placeholder="Input your password"
                            type={this.state.visible ? "text" : "password"}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="text-white small bold">Phone</label>
                          <input
                            name="phoneNumber"
                            onChange={this.handleChange}
                            value={state.phoneNumber}
                            className="forms"
                            placeholder="e.g 087826123***"
                            type="tel"
                          />
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
                            {!this.state.loading && <span>Register</span>}
                          </button>
                        </div>
                        <div className="text-center">
                          <small className="text-warning">
                            Already have an account?{" "}
                          </small>
                          <Link to="/login">
                            <button className="btn btn-link text-warning p-0">
                              <small className="bold">SignIn here</small>
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

export default Register;
