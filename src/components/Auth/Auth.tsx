import React from "react";
import Login from "./Login/LogIn";
import SignUp from "./SignUp/SignUp";

export interface AuthProps {}

export interface AuthState {
  showLogin: boolean;
}

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = { showLogin: false };
  }

  handleToggle = (event: MouseEvent) => {
    if (this.state.showLogin === true) {
      return this.setState({ showLogin: false });
    }
    if (this.state.showLogin === false) {
      return this.setState({ showLogin: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.showLogin ? (
          <Login handleToggle={this.handleToggle} />
        ) : (
          <SignUp handleToggle={this.handleToggle} />
        )}
        {/* <SignUp handleToggle={this.handleToggle} /> */}
      </div>
    );
  }
}

export default Auth;
