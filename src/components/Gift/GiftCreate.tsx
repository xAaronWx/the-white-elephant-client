import React from "react";

export interface GiftCreateProps {
  token: string;
  fetchMyGifts: Function;
}

export interface GiftCreateState {
  itemType: string;
  name: string;
  weight: string;
  description: string;
  giftImage: string;
}

class GiftCreate extends React.Component<GiftCreateProps, GiftCreateState> {
  constructor(props: GiftCreateProps) {
    super(props);
    this.state = {
      itemType: "",
      name: "",
      weight: "",
      description: "",
      giftImage: "",
    };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.props.token);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:3000/gift/create", {
      method: "POST",
      body: JSON.stringify({
        itemType: this.state.itemType,
        name: this.state.name,
        weight: this.state.weight,
        description: this.state.description,
        giftImage: this.state.giftImage,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((response) => response.json())
      .then((createData) => {
        console.log(createData);
        this.setState({
          itemType: "",
          name: "",
          weight: "",
          description: "",
          giftImage: "",
        });
        this.props.fetchMyGifts();
      });
  };

  render() {
    return (
      <div style={{ marginLeft: "120px" }}>
        <form className="create-wrapper" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Gift Type</label>
            <br></br>
            <input
              type="text"
              name="itemType"
              onChange={(e) => this.setState({ itemType: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="name">Product Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <br></br>
            <input
              type="text"
              name="weight"
              onChange={(e) => this.setState({ weight: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br></br>
            <input
              type="text"
              name="description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="giftImage">Gift Image (URL Address) </label>
            <br></br>
            <input
              type="text"
              name="gift image"
              onChange={(e) => this.setState({ giftImage: e.target.value })}
            />
          </div>
          <br></br>
          <div className="submit">
            <button>Submit your gift</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GiftCreate;
