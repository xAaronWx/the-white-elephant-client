import React from "react";

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
        <p>Hello form MainPage</p>
      </div>
    );
  }
}

export default MainPage;
