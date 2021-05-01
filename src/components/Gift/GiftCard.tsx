import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import GiftUpdate from "./GiftUpdate";

export interface GiftCardProps {
  token: string;
  gift: any;
  fetchMyGifts: Function;
}

export interface GiftCardState {}

class GiftCard extends React.Component<GiftCardProps, GiftCardState> {
  constructor(props: GiftCardProps) {
    super(props);
    this.state = {};
  }

  deleteGift = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`http://localhost:3000/gift/delete/${this.props.gift.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then(() => {
      this.props.fetchMyGifts();
      // this.props.gift;
    });
    console.log(this.props.gift.id);
  };

  render() {
    console.log(this.props.gift.id);
    return (
      <div className="container, gift-wrapper">
        <Card className="card-style">
          <CardImg
            top
            width="75%"
            src={this.props.gift.giftImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.gift.name}</CardTitle>
            <CardSubtitle>{this.props.gift.itemType}</CardSubtitle>
            <CardText>{this.props.gift.description}</CardText>
            <GiftUpdate
              token={this.props.token}
              fetchMyGifts={this.props.fetchMyGifts}
              giftUpdate={this.props.gift}
            />
            <Button onClick={this.deleteGift}>Remove this gift</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GiftCard;
