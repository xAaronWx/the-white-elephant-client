import React from "react";

export interface GiftUpdateProps {}

export interface GiftUpdateState {}

class GiftUpdate extends React.Component<GiftUpdateProps, GiftUpdateState> {
  constructor(props: GiftUpdateProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Gift Update</div>;
  }
}

export default GiftUpdate;
