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
import { IUserAddress } from "./interfaces";

export interface AddressTableAndDeleteProps {
  token: string;
  fetchAddress: Function;
  userAddress: IUserAddress[];
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
  render() {
    console.log(this.props.userAddress[12]);
    return <div>Address Table Delete</div>;
  }
}

export default AddressTableAndDelete;
