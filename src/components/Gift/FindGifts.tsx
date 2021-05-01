import React from "react";

export interface FindGiftProps {
  token: string;
}

export interface FindGiftState {}

class FindGift extends React.Component<FindGiftProps, FindGiftState> {
  constructor(props: FindGiftProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="compDiv">
        <h2 className="comp-headline">VIEW ALL OFFERED GIFTS</h2>
        <div></div>
      </div>
    );
  }
}

export default FindGift;

// fetchAllGifts = () => {
//   let token = this.props.token
//     ? this.props.token
//     : localStorage.getItem("token");
//   fetch("http://localhost:3000/address/get", {
//     method: "GET",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: token ? token : "",
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({
//         userAddress: data,
//       });
//     });
// };
