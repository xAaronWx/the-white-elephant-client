import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import GiftUpdate from "./GiftUpdate";
import { IGifts } from "./interface";
export interface GiftTableAndDeleteProps {
  token: string;
  fetchMyGifts: Function;
  myGifts: IGifts[];
}

export interface GiftTableAndDeleteState {}

class GiftTableAndDelete extends React.Component<
  GiftTableAndDeleteProps,
  GiftTableAndDeleteState
> {
  constructor(props: GiftTableAndDeleteProps) {
    super(props);
    this.state = {};
  }

  // deleteGift = () => {
  //   let token = this.props.token
  //     ? this.props.token
  //     : localStorage.getItem("token");
  //   fetch(
  //     `http://localhost:3000/artist/delete-profile/${this.props.userAddress[0].id}`,
  //     {
  //       method: "DELETE",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: token ? token : "",
  //       }),
  //     }
  //   ).then(() => this.props.fetchAddress());
  //   console.log(this.props.userAddress[0].id);
  // };

  render() {
    return <div>Gift Table Delete</div>;
  }
}

export default GiftTableAndDelete;
