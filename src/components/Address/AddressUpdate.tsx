import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import APIURL from "../helpers/environment";
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
    fetch(`${APIURL}/address/update/${this.props.address.id}`, {
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
      <div className="container">
        <Button color="primary" onClick={this.toggle}>
          Edit Your Address
        </Button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
          <div className="wrapper">
            <h3>Edit Address</h3>
            <ModalBody style={{ paddingLeft: "100px" }}>
              <form
                className="update-address-wrapper"
                onSubmit={this.updateAddress}
              >
                <label htmlFor="street">Street:</label>
                <input
                  name="street"
                  value={this.state.street}
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
                <label htmlFor="city">City:</label>
                <input
                  name="city"
                  value={this.state.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
                <label htmlFor="state">State (abbreviated) :</label>
                <input
                  name="state"
                  value={this.state.state}
                  onChange={(e) => this.setState({ state: e.target.value })}
                />
                <label htmlFor="zipcode">Zipcode:</label>
                <input
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={(e) => this.setState({ zipcode: e.target.value })}
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

export default AddressUpdate;
