import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
