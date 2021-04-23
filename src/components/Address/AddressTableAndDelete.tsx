import React from "react";

export interface AddressTableAndDeleteProps {}

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
    return <div>Address Table Delete</div>;
  }
}

export default AddressTableAndDelete;
