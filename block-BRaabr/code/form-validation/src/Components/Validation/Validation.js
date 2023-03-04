import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      consfirmPassword: "",
      error: {
        password: "",
        email: "",
        consfirmPassword: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    let errorState = this.state.error;
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
      if (!this.validateEmail(event.target.value)) {
        errorState["email"] = "Fuck You";
        // this.s else {
      } else {
        errorState["email"] = "";
      }
    }
    if (event.target.name === "password") {
      console.log(event.target.value.length);
      this.setState({ password: event.target.value });
      if (event.target.value.length < 5) {
        errorState["password"] = "Fuck You Again";
      } else {
        errorState["password"] = "";
      }
    }
    if (event.target.name === "confirm-password") {
      console.log(event.target.value.length);
      this.setState({ consfirmPassword: event.target.value });
      if (event.target.value !== this.state.password) {
        errorState["consfirmPassword"] = "Fuck You Again";
      } else {
        errorState["consfirmPassword"] = "";
      }
    }
  };

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    return (
      <>
        <form>
          <div className="form-item">
            <label htmlFor="username" />
            Username
            <input
              type="text"
              id="username"
              name="username"
              onChange={(event) => {
                this.handleChange(event);
              }}
              value={this.state.username}
            />
          </div>

          <div className="form-item">
            <label htmlFor="email" />
            Email
            <input
              className={this.state.error.email ? `error` : ""}
              type="email"
              id="email"
              name="email"
              onChange={(event) => {
                event.preventDefault();
                this.handleChange(event);
              }}
              value={this.state.email}
            />
            <span>
              {this.state.error.email ? `${this.state.error.email}` : ""}
            </span>
          </div>

          <div className="form-item">
            <label htmlFor="password" />
            Password
            <input
              className={this.state.error.password ? `error` : ""}
              type="password"
              id="password"
              name="password"
              onChange={(event) => {
                this.handleChange(event);
              }}
              value={this.state.password}
            />
            <span>
              {this.state.error.password ? `${this.state.error.password}` : ""}
            </span>
          </div>

          <div className="form-item">
            <label htmlFor="confirm-password" />
            Confirm Password
            <input
              className={this.state.error.consfirmPassword ? `error` : ``}
              type="password"
              id="confirm-password"
              name="confirm-password"
              onChange={(event) => {
                this.handleChange(event);
              }}
              value={this.state.consfirmPassword}
            />
            <span>
              {this.state.error.consfirmPassword
                ? `${this.state.error.consfirmPassword}`
                : ""}
            </span>
          </div>
        </form>
      </>
    );
  }
}

export default Validation;
