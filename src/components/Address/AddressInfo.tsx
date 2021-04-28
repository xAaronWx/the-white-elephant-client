import React from "react";
import AddressCreate from "./AddressCreate";
import AddressTableAndDelete from "./AddressTableAndDelete";
import { IUserAddress } from "./interfaces";

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
    fetch("http://localhost:3000/address/get", {
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
          userAddress: data,
        });
      });
  };

  componentDidMount() {
    this.fetchAddress();
  }

  render() {
    console.log(this.state.userAddress);
    return (
      <div>
        <h3>If you would like to add your address info, please do so below</h3>
        <div>
          <AddressCreate
            token={this.props.token}
            fetchAddress={this.fetchAddress}
          />
          <br />
          <AddressTableAndDelete
            token={this.props.token}
            fetchAddress={this.fetchAddress}
            userAddress={this.state.userAddress}
          />
        </div>
      </div>
    );
  }
}

export default AddressInfo;
