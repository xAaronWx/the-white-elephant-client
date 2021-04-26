import React from "react";

export interface GiftInfoProps {}

export interface GiftInfoState {}

class GiftInfo extends React.Component<GiftInfoProps, GiftInfoState> {
  constructor(props: GiftInfoProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Your Gifts</h2>
      </div>
    );
  }
}

export default GiftInfo;
