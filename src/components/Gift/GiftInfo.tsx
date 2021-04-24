import React from "react";
import FindGifts from "./FindGifts";

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
        <FindGifts />
      </div>
    );
  }
}

export default GiftInfo;
