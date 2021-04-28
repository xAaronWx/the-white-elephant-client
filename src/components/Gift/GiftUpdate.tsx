import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
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
    fetch(`http://localhost:3000/gift/update/${this.props.giftUpdate.id}`, {
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
      <div>
        <Button color="primary" onClick={this.toggle}>
          Edit Your Address
        </Button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
          <ModalHeader>Edit Address</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.updateGift}>
              <FormGroup>
                <Label htmlFor="itemType">Item Type:</Label>
                <Input
                  name="itemType"
                  value={this.props.giftUpdate.itemType}
                  onChange={(e) => this.setState({ itemType: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                  name="name"
                  value={this.props.giftUpdate.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="weight">Gift Weight:</Label>
                <Input
                  name="weight"
                  value={this.props.giftUpdate.weight}
                  onChange={(e) => this.setState({ weight: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description:</Label>
                <Input
                  name="description"
                  value={this.props.giftUpdate.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="giftImage">Gift Image:</Label>
                <Input
                  name="giftImage"
                  value={this.props.giftUpdate.giftImage}
                  onChange={(e) => this.setState({ giftImage: e.target.value })}
                />
              </FormGroup>
              <Button color="primary" type="submit" onClick={this.toggle}>
                Submit Changes
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default GiftUpdate;
