import React from "react";

export interface GiftTableAndDeleteProps {}

export interface GiftTableAndDeleteState {}

class GiftTableAndDelete extends React.Component<
  GiftTableAndDeleteProps,
  GiftTableAndDeleteState
> {
  constructor(props: GiftTableAndDeleteProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Gift Table Delete</div>;
  }
}

export default GiftTableAndDelete;
