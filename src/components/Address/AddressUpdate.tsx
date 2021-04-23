import React from "react";

export interface AddressUpdateProps {}

export interface AddressUpdateState {}

class AddressUpdate extends React.Component<
  AddressUpdateProps,
  AddressUpdateState
> {
  constructor(props: AddressUpdateProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Address Update</div>;
  }
}

export default AddressUpdate;
