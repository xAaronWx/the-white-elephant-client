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

export interface AddressUpdateProps {
  token: string;
  fetchAddress: Function;
  address: any;
}

export interface AddressUpdateState {
  modal: boolean;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

class AddressUpdate extends React.Component<
  AddressUpdateProps,
  AddressUpdateState
> {
  constructor(props: AddressUpdateProps) {
    super(props);
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      modal: true,
    };
  }

  updateAddress = (event: any) => {
    event.preventDefault();
    console.log(this.props.address);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`http://localhost:3000/address/update/${this.props.address.id}`, {
      method: "PUT",
      body: JSON.stringify({
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
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
          street: "",
          city: "",
          state: "",
          zipcode: "",
        });
        this.props.fetchAddress();
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
            <Form onSubmit={this.updateAddress}>
              <FormGroup>
                <Label htmlFor="street">Street:</Label>
                <Input
                  name="street"
                  value={this.props.address.street}
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city">City:</Label>
                <Input
                  name="city"
                  value={this.props.address.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="state">State:</Label>
                <Input
                  name="state"
                  value={this.props.address.state}
                  onChange={(e) => this.setState({ state: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="zipcode">Zipcode:</Label>
                <Input
                  name="zipcode"
                  value={this.props.address.zipcode}
                  onChange={(e) => this.setState({ zipcode: e.target.value })}
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

export default AddressUpdate;
