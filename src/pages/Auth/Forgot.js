import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Redirect, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

class Forgot extends Component {
  state = {
    load: true,
    loading: false,
    visible: false,
    auth: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false });
    }, 1000);
  }

  show = () => {
    this.setState({ visible: !this.state.visible });
  };

  submit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ auth: true });
    }, 3000);
  };

  render() {
    if (this.state.auth) {
      return <Redirect to="/" />;
    }

    return (
      <div className="__login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5" style={{ alignItems: "center" }}>
              <div>
                <div className="card-body px-lg-5 py-lg-5">
                  <FadeIn>
                    <div className="__logo mb-4">
                      <Link to="/">
                        <img src={logo} alt="..." />
                      </Link>
                    </div>
                    <div className="text-center text-white">
                      <h3>Forgot Password</h3>
                      <p>Please Enter The Email You Used When You Registered</p>
                    </div>
                    <form onSubmit={this.submit}>
                      <label className="text-white small bold">
                        Your Email
                      </label>
                      <div className="form-group mb-3">
                        <input
                          className="forms"
                          placeholder="e.g najib@mail.com"
                          type="email"
                        />
                      </div>

                      <div className="text-center">
                        <button
                          disabled={this.state.loading}
                          type="submit"
                          className="btn btn-block btn-warning my-4"
                        >
                          {this.state.loading && <div className="loader"></div>}
                          {!this.state.loading && <span>SUBMIT</span>}
                        </button>
                      </div>
                      <div className="text-center">
                        <Link to="/">
                          <button className="btn btn-link text-warning p-0">
                            <small className="bold">Back to Home</small>
                          </button>
                        </Link>
                      </div>
                    </form>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
