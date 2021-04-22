import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";

export interface AppProps {}

export interface AppState {
  token: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: "" };
  }

  updateToken = (token: string) => {
    localStorage.setItem("token", token);
    this.setState({ token: token });
    console.log(token);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Auth updateToken={this.updateToken} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
