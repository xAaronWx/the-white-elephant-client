import React from "react";
import GiftCreate from "./GiftCreate";
import GiftTableAndDelete from "./GiftTableAndDelete";
import { IGifts } from "../interfaces";

export interface GiftInfoProps {
  token: string;
}

export interface GiftInfoState {
  myGifts: IGifts[];
}

class GiftInfo extends React.Component<GiftInfoProps, GiftInfoState> {
  constructor(props: GiftInfoProps) {
    super(props);
    this.state = {
      myGifts: [],
    };
    this.fetchMyGifts = this.fetchMyGifts.bind(this);
  }

  fetchMyGifts = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:3000/gift/mine", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          myGifts: data,
        });
      });
  };

  componentDidMount() {
    this.fetchMyGifts();
  }

  render() {
    console.log(this.state.myGifts);
    return (
      <div>
        <h2>View and submit your offered gifts</h2>
        <GiftCreate token={this.props.token} fetchMyGifts={this.fetchMyGifts} />
        <br />
        <GiftTableAndDelete
          token={this.props.token}
          fetchMyGifts={this.fetchMyGifts}
          myGifts={this.state.myGifts}
        />
      </div>
    );
  }
}

export default GiftInfo;
