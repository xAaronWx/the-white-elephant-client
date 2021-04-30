import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import AddressUpdate from "./AddressUpdate";
import { IUserAddress } from "../interfaces";

export interface AddressTableAndDeleteProps {
  token: string;
  fetchAddress: Function;
  // userAddress: IUserAddress[];
  userAddress: any;
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
    console.log(this.props.userAddress);
    return (
      <div className="address-wrapper">
        <Card>
          <CardBody>
            <CardTitle>Current Address Details</CardTitle>
            <CardText className="card-text">
              <span className="span-text">Street:</span>
              {this.props.userAddress.street}
              <hr />
              <span className="span-text">City:</span>
              {this.props.userAddress.city}
              <hr />
              <span className="span-text">State:</span>
              {this.props.userAddress.state}
              <hr />
              <span className="span-text">Zipcode:</span>
              {this.props.userAddress.zipcode}
            </CardText>
            <AddressUpdate
              token={this.props.token}
              address={this.props.userAddress}
              fetchAddress={this.props.fetchAddress}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddressTableAndDelete;

// {
//   this.props.userAddress[0] > 0 ? (
//     <Card>
//       <CardBody>
//         <CardTitle tag="h5">User Address</CardTitle>
//         <CardSubtitle tag="h6" className="mb-2 text-muted">
//           {this.props.userAddress[0].city}
//         </CardSubtitle>
//         <CardText>
//           Street: {this.props.userAddress[0].street}
//           <br></br>
//           City: {this.props.userAddress[0].city}
//           <br></br>State: {this.props.userAddress[0].state}
//           <br></br>Zipcode: {this.props.userAddress[0].zipcode}
//         </CardText>
//         <AddressUpdate
//           token={this.props.token}
//           address={this.props.userAddress[0]}
//           fetchAddress={this.props.fetchAddress}
//         />
//         <Button onClick={(e) => this.deleteAddress()}>Button</Button>
//       </CardBody>
//     </Card>
//   ) : (
//     <></>
//   );
// }
