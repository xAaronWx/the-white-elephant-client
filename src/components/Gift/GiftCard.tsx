import React from "react";
import { IGifts } from "../interfaces";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export interface GiftCardProps {
  gift: IGifts;
}

export interface GiftCardState {}

class GiftCard extends React.Component<GiftCardProps, GiftCardState> {
  constructor(props: GiftCardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="10px"
            src={this.props.gift.giftImage}
            alt="Card image cap"
          />
          <CardBody>
            {this.props.gift.name}
            <CardTitle>{this.props.gift.name}</CardTitle>
            <CardSubtitle>{this.props.gift.itemType}</CardSubtitle>
            <CardText>{this.props.gift.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GiftCard;
