import React from "react";
import APIURL from "../../../helpers/environment";

const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

interface LogInProps {
  adminLogin: Function;
  updateToken: Function;
  handleToggle: Function;
  name?: any;
  value?: any;
}

interface LogInState {
  email: string;
  password: string;
  errors: {
    username: string;
    email: string;
    password: string;
  };
}

export class LogIn extends React.Component<LogInProps, LogInState> {
  constructor(props: LogInProps) {
    super(props);
    const initialState = {
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }
  // Does this go here?
  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = Regex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be eight characters long!" : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (validity == true) {
      // THIS IS WHERE THE ENDPOINT FETCH GOES
      fetch(`${APIURL}/user/login`, {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.sessionToken);
          this.props.updateToken(data.sessionToken);
          this.props.adminLogin(data.role);
          let checkToken = data.sessionToken;
          if (checkToken === undefined) {
            alert("Please try again");
            return;
          } else {
            alert("You have successfully logged in!");
          }
        });
    } else {
      alert("Your password is incorrect");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div>
          <h1 className="heroTitle">The White Elephant</h1>
          <h4 className="subtitle">
            Find a home for that <span id="subUnderline">special</span> gift
            you’ve never wanted!
          </h4>
        </div>

        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />

              {errors.email.length > 0 && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />

              {errors.password.length > 0 && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Log In</button>
            </div>
          </form>
          <button onClick={(event) => this.props.handleToggle(event)}>
            Go back and register
          </button>
        </div>
      </div>
    );
  }
}

export default LogIn;
