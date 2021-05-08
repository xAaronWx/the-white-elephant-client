import userEvent from "@testing-library/user-event";
import React from "react";
import APIURL from "../../../helpers/environment";

const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

interface SignUpProps {
  adminLogin: Function;
  updateToken: Function;
  handleToggle: Function;
  name?: any;
  value?: any;
}

interface SignUpState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  errors: {
    username: string;
    email: string;
    password: string;
  };
}

export class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
      firstName: "",
      lastName: "",
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
      fetch(`${APIURL}/user/create`, {
        method: "POST",
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
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
          let checkToken = data.sessionToken;
          if (checkToken === undefined) {
            alert("Please try again");
            return;
          } else {
            alert("You have successfully signed up!");
          }
        });
    } else {
      alert("Password is not allowed");
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
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
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
              <button>Register Me</button>
            </div>
          </form>
          <button onClick={(event) => this.props.handleToggle(event)}>
            Already have an account?
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
