import React from "react";
import { CardColumns } from "reactstrap";
import GiftUpdate from "./GiftUpdate";
import { IGifts } from "../interfaces";
import GiftCard from "./GiftCard";
export interface GiftTableAndDeleteProps {
  token: string;
  fetchMyGifts: Function;
  // myGifts: IGifts[];
  myGifts: any;
}

export interface GiftTableAndDeleteState {
  giftInformation: any;
}

class GiftTableAndDelete extends React.Component<
  GiftTableAndDeleteProps,
  GiftTableAndDeleteState
> {
  constructor(props: GiftTableAndDeleteProps) {
    super(props);
    this.state = { giftInformation: [] };
  }

  componentDidMount() {
    fetch(this.props.myGifts)
      .then((res) => res.json())
      .then((json: IGifts) => {
        console.log(json);
        this.setState({ giftInformation: json.giftImage });
      });
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
        <h3>Gift Table</h3>
        <CardColumns>
          {this.state.giftInformation.length > 0 ? (
            this.state.giftInformation.map((Gift: IGifts, index: number) => (
              <GiftCard gift={this.props.myGifts} key={index} />
            ))
          ) : (
            <></>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default GiftTableAndDelete;
