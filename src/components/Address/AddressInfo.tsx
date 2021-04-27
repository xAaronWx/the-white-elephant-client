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
    console.log(this.props);
    return (
      <div>
        <h2>Update your address info</h2>
        <div>
          <AddressCreate
            token={this.props.token}
            fetchAddress={this.fetchAddress()}
          />
          {this.state.userAddress.length > 0 ? (
            <AddressTableAndDelete
              token={this.props.token}
              userAddress={this.state.userAddress}
              fetchAddress={this.fetchAddress()}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddressInfo;
