import React from "react";

export interface GiftCreateProps {}

export interface GiftCreateState {}

class GiftCreate extends React.Component<GiftCreateProps, GiftCreateState> {
  constructor(props: GiftCreateProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Gift Create</div>;
  }
}

export default GiftCreate;
