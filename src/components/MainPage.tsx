import React from "react";
import SignUp from "./SignUp";

export interface MainPageProps {}

export interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default MainPage;
