import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import MainPage from "./components/MainPage/MainPage";

export interface AppProps {}

export interface AppState {
  token: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: "" };
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({
      token: "",
    });
  };

  updateToken = (token: string) => {
    localStorage.setItem("token", token);
    this.setState({ token: token });
    console.log(token);
  };

  protectedViews = () => {
    return localStorage.getItem("token") ? (
      <MainPage token={this.state.token} />
    ) : (
      <Auth updateToken={this.updateToken} />
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
