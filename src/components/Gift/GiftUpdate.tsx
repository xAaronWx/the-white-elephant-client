import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import APIURL from "../helpers/environment";
export interface GiftUpdateProps {
  token: string;
  fetchMyGifts: Function;
  giftUpdate: any;
}

export interface GiftUpdateState {
  modal: boolean;
  itemType: string;
  name: string;
  weight: string;
  description: string;
  giftImage: string;
}

class GiftUpdate extends React.Component<GiftUpdateProps, GiftUpdateState> {
  constructor(props: GiftUpdateProps) {
    super(props);
    this.state = {
      modal: true,
      itemType: "",
      name: "",
      weight: "",
      description: "",
      giftImage: "",
    };
  }

  updateGift = (event: any) => {
    event.preventDefault();
    console.log(this.props.giftUpdate);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`${APIURL}/gift/update/${this.props.giftUpdate.id}`, {
      method: "PUT",
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
      .then((updateData) => {
        console.log(updateData);
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

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <div className="container">
        <Button color="primary" onClick={this.toggle}>
          Update gift details
        </Button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
          <div className="wrapper">
            <h3>Update Details</h3>
            <ModalBody style={{ paddingLeft: "100px" }}>
              <form className="update-gift-wrapper" onSubmit={this.updateGift}>
                <label htmlFor="itemType">Gift Type:</label>
                <input
                  name="itemType"
                  value={this.state.itemType}
                  onChange={(e) => this.setState({ itemType: e.target.value })}
                />
                <label htmlFor="name">Product Name:</label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <label htmlFor="weight">Gift Weight: (optional) </label>
                <input
                  name="weight"
                  value={this.state.weight}
                  onChange={(e) => this.setState({ weight: e.target.value })}
                />
                <label htmlFor="description">Description:</label>
                <input
                  name="description"
                  value={this.state.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
                <label htmlFor="giftImage">Gift Image: (URL Address) </label>
                <input
                  name="giftImage"
                  value={this.state.giftImage}
                  onChange={(e) => this.setState({ giftImage: e.target.value })}
                />
                <Button color="primary" type="submit" onClick={this.toggle}>
                  Submit Changes
                </Button>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </form>
            </ModalBody>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GiftUpdate;
