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
  // myGifts: IGifts[];
  myGifts: any;
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
    console.log(this.props.myGifts);
    return (
      <div className="wrapper">
        <h2>Gift Table/Delete</h2>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Your Gifts</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.myGifts.name}
            </CardSubtitle>
            <CardText>
              Street: {this.props.myGifts.name}
              <br></br>
              City: {this.props.myGifts.name}
              <br></br>State: {this.props.myGifts.name}
              <br></br>Zipcode: {this.props.myGifts.name}
            </CardText>
            <GiftUpdate
              token={this.props.token}
              giftUpdate={this.props.myGifts}
              fetchMyGifts={this.props.fetchMyGifts}
            />
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GiftTableAndDelete;
