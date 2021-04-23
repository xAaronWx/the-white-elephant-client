import React from "react";

export interface AddressCreateProps {}

export interface AddressCreateState {}

class AddressCreate extends React.Component<
  AddressCreateProps,
  AddressCreateState
> {
  constructor(props: AddressCreateProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Address Create</div>;
  }
}

export default AddressCreate;
