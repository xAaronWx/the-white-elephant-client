import React from "react";

export interface AddressInfoProps {}

export interface AddressInfoState {}

class AddressInfo extends React.Component<AddressInfoProps, AddressInfoState> {
  constructor(props: AddressInfoProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Address Info</div>;
  }
}

export default AddressInfo;
