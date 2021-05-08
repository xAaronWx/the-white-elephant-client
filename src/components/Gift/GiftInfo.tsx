import React from "react";
import GiftCreate from "./GiftCreate";
import { CardColumns } from "reactstrap";
import { IGifts } from "../interfaces";
import GiftCard from "./GiftCard";
import APIURL from "../../helpers/environment";

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
    fetch(`${APIURL}/gift/mine`, {
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
      <div className="compDiv">
        <h2 className="comp-headline">VIEW OR OFFER NEW GIFTS</h2>
        <GiftCreate token={this.props.token} fetchMyGifts={this.fetchMyGifts} />
        <CardColumns id="gift-columns">
          {this.state.myGifts.length > 0 ? (
            this.state.myGifts.map((Gift: IGifts, index: number) => (
              <GiftCard
                fetchMyGifts={this.fetchMyGifts}
                token={this.props.token}
                gift={Gift}
                key={index}
              />
            ))
          ) : (
            <></>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default GiftInfo;
