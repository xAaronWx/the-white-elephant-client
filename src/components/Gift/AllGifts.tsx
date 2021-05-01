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

export interface AllGiftsProps {
  allGifts: any;
  fetchAllGifts: Function;
}

export interface AllGiftsState {}

class AllGifts extends React.Component<AllGiftsProps, AllGiftsState> {
  constructor(props: AllGiftsProps) {
    super(props);
    this.state = {};
  }

  // deleteGift = () => {
  //   let token = this.props.token
  //     ? this.props.token
  //     : localStorage.getItem("token");
  //   fetch(`http://localhost:3000/gift/delete/${this.props.gift.id}`, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: token ? token : "",
  //     }),
  //   }).then(() => {
  //     this.props.fetchMyGifts();
  //     // this.props.gift;
  //   });
  //   console.log(this.props.gift.id);
  // };

  render() {
    console.log(this.props.allGifts.id);
    return (
      <div className="container, gift-wrapper">
        <Card className="card-style">
          <CardImg
            top
            width="75%"
            src={this.props.allGifts.giftImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.allGifts.name}</CardTitle>
            <CardSubtitle>{this.props.allGifts.itemType}</CardSubtitle>
            <CardText>{this.props.allGifts.description}</CardText>
            <Button>Claim This Gift</Button>
            {/* <Button onClick={this.deleteGift}>Remove this gift</Button> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AllGifts;
