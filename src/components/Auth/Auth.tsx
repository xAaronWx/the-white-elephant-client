import React from "react";
import Login from "./Login/LogIn";
import SignUp from "./SignUp/SignUp";

export interface AuthProps {
  updateToken: Function;
  adminLogin: Function;
}

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
          <Login
            adminLogin={this.props.adminLogin}
            handleToggle={this.handleToggle}
            updateToken={this.props.updateToken}
          />
        ) : (
          <SignUp
            adminLogin={this.props.adminLogin}
            handleToggle={this.handleToggle}
            updateToken={this.props.updateToken}
          />
        )}
        {/* <SignUp handleToggle={this.handleToggle} /> */}
      </div>
    );
  }
}

export default Auth;
