import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import AddressUpdate from "./AddressUpdate";

export interface AddressTableAndDeleteProps {
  token: string;
  address: any;
  fetchAddress: Function;
}

export interface AddressTableAndDeleteState {}

class AddressTableAndDelete extends React.Component<
  AddressTableAndDeleteProps,
  AddressTableAndDeleteState
> {
  constructor(props: AddressTableAndDeleteProps) {
    super(props);
    this.state = {};
  }

  // THIS WILL BE USED FOR ADMINS IF I GET TIME
  // deleteAddress = () => {
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
    console.log(this.props.address);
    return (
      <div className="address-wrapper">
        <Card>
          <CardBody>
            <CardTitle>Current Address Details</CardTitle>
            <CardText className="card-text">
              <span className="span-text">Street</span> :
              {this.props.address.street}
              <hr />
              <span className="span-text">City</span> :{this.props.address.city}
              <hr />
              <span className="span-text">State</span> :
              {this.props.address.state}
              <hr />
              <span className="span-text">Zipcode</span> :
              {this.props.address.zipcode}
            </CardText>
            <AddressUpdate
              token={this.props.token}
              address={this.props.address}
              fetchAddress={this.props.fetchAddress}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddressTableAndDelete;
