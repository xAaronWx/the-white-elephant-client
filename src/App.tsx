import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <MainPage />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
