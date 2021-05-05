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
  token: string;
  role: string;
  allGifts: any;
  fetchAllGifts: Function;
}

export interface AllGiftsState {}

class AllGifts extends React.Component<AllGiftsProps, AllGiftsState> {
  constructor(props: AllGiftsProps) {
    super(props);
    this.state = {
      role: "admin",
    };
  }

  deleteGift = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`http://localhost:3000/gift/delete/${this.props.allGifts.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then(() => {
      this.props.fetchAllGifts();
    });
    console.log(this.props.allGifts.id);
  };

  render() {
    console.log(this.props.allGifts.id);
    return (
      <div className="gift-wrapper">
        <Card className="card-style">
          <CardImg
            id="cardImg"
            top
            width="75%"
            src={this.props.allGifts.giftImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle id="cardTitle">{this.props.allGifts.name}</CardTitle>
            <CardSubtitle id="cardSubtitle">
              <em>Gift Type: </em> {this.props.allGifts.itemType}
            </CardSubtitle>
            <CardText id="cardDescrip">
              {this.props.allGifts.description}
            </CardText>
            <Button>Claim This Gift</Button>
            {localStorage.getItem("role") === "admin" ? (
              <Button onClick={this.deleteGift}>Remove this gift</Button>
            ) : null}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AllGifts;
