import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import SiteBar from "./components/Sitebar";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <SiteBar />
      <Footer />
    </div>
  );
};

export default App;
