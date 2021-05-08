import React from "react";
import { IGifts } from "../interfaces";
import { CardColumns } from "reactstrap";
import AllGifts from "./AllGifts";
import APIURL from "../../helpers/environment";

export interface FindGiftProps {
  token: string;
  role: string;
}

export interface FindGiftState {
  allGifts: IGifts[];
}

class FindGift extends React.Component<FindGiftProps, FindGiftState> {
  constructor(props: FindGiftProps) {
    super(props);
    this.state = {
      allGifts: [],
    };
    this.fetchAllGifts = this.fetchAllGifts.bind(this);
  }

  fetchAllGifts = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`${APIURL}/gift/`, {
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
          allGifts: data,
        });
      });
  };

  componentDidMount() {
    this.fetchAllGifts();
  }

  render() {
    console.log(this.state.allGifts);
    return (
      <div className="compDiv">
        <h2 className="comp-headline">VIEW ALL OFFERED GIFTS</h2>
        <div>
          <CardColumns id="gift-columns">
            {this.state.allGifts.length > 0 ? (
              this.state.allGifts.map((Gift: IGifts, index: number) => (
                <AllGifts
                  token={this.props.token}
                  role={this.props.role}
                  fetchAllGifts={this.fetchAllGifts}
                  allGifts={Gift}
                  key={index}
                />
              ))
            ) : (
              <></>
            )}
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default FindGift;
