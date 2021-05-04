import React from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import MainPage from "./components/MainPage/MainPage";

export interface AppProps {}

export interface AppState {
  token: string;
  role: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: "", role: "" };
  }

  // logout = () => {
  //   localStorage.clear();
  //   this.setState({
  //     token: "",
  //   });
  // };

  updateToken = (token: string) => {
    localStorage.setItem("token", token);
    this.setState({ token: token });
    console.log(token);
  };

  adminLogin = (role: string) => {
    localStorage.setItem("role", role);
    this.setState({ role: role });
    console.log(role);
  };

  protectedViews = () => {
    return localStorage.getItem("token") ? (
      <MainPage token={this.state.token} role={this.state.role} />
    ) : (
      <Auth updateToken={this.updateToken} adminLogin={this.adminLogin} />
    );
  };

  render() {
    return (
      <div className="App">
        {/* <Route
          exact
          path="/"
          component={() => <Auth updateToken={this.updateToken} />}
        /> */}
        {this.protectedViews()}
      </div>
    );
  }
}

export default App;
