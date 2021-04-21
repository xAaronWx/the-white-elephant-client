import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <Auth />} />
      </Switch>
    </div>
  );
};

export default App;
