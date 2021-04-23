import React from "react";
import Footer from "../Footer";
import Sitebar from "../Sitebar";
import AddressInfo from "../Address/AddressInfo";
import GiftInfo from "../Gift/GiftInfo";
import FindGifts from "../Gift/FindGifts";
import { Switch, Route } from "react-router-dom";

export interface MainPageProps {
  token: string;
}

export interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sitebar />
        <Switch>
          <Route exact path="/Profile" component={AddressInfo} />
          <Route exact path="/Gifts" component={GiftInfo} />
          <Route exact path="/FindGifts" component={FindGifts} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
