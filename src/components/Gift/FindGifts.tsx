import React from "react";

export interface FindGiftsProps {}

export interface FindGiftsState {}

class FindGifts extends React.Component<FindGiftsProps, FindGiftsState> {
  constructor(props: FindGiftsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Find Gifts</div>;
  }
}

export default FindGifts;
