import React from "react";
import AddressCreate from "./AddressCreate";
import AddressTableAndDelete from "./AddressTableAndDelete";
import { IUserAddress } from "../interfaces";
import APIURL from "../../helpers/environment";

export interface AddressInfoProps {
  token: string;
}

export interface AddressInfoState {
  userAddress: IUserAddress[];
}

class AddressInfo extends React.Component<AddressInfoProps, AddressInfoState> {
  constructor(props: AddressInfoProps) {
    super(props);
    this.state = {
      userAddress: [],
    };
    this.fetchAddress = this.fetchAddress.bind(this);
  }

  fetchAddress = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`${APIURL}/address/get`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //THIS BIT OF CODE WILL KEEP THE APP FROM CRASHING IF NO DATA EXISTS
        if (data != null) {
          this.setState({
            userAddress: data,
          });
        }
      });
  };

  componentDidMount() {
    this.fetchAddress();
  }

  render() {
    console.log(this.state.userAddress);
    return (
      <div className="compDiv">
        <h2 className="comp-headline">
          IF YOU WOULD LIKE TO ADD YOUR ADDRESS INFO, PLEASE DO SO BELOW
        </h2>
        <AddressCreate
          token={this.props.token}
          fetchAddress={this.fetchAddress}
        />
        <br />
        <AddressTableAndDelete
          fetchAddress={this.fetchAddress}
          token={this.props.token}
          address={this.state.userAddress}
        />
      </div>
    );
  }
}

export default AddressInfo;
