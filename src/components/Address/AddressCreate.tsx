import React from "react";

export interface AddressCreateProps {
  token: string;
  fetchAddress: Function;
}

export interface AddressCreateState {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

class AddressCreate extends React.Component<
  AddressCreateProps,
  AddressCreateState
> {
  constructor(props: AddressCreateProps) {
    super(props);
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.props.token);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:3000/address/create", {
      method: "POST",
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
      .then((createData) => {
        console.log(createData);
        this.setState({
          street: "",
          city: "",
          state: "",
          zipcode: "",
        });
        this.props.fetchAddress();
      });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Create Your Contact Information</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="street">Street</label>
                <br></br>
                <input
                  type="text"
                  name="street"
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <br></br>
                <input
                  type="text"
                  name="city"
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <br></br>
                <input
                  type="text"
                  name="state"
                  onChange={(e) => this.setState({ state: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="zipcode">Zipcode</label>
                <br></br>
                <input
                  type="text"
                  name="zipcode"
                  onChange={(e) => this.setState({ zipcode: e.target.value })}
                />
              </div>
              <br></br>
              <div className="submit">
                <button>Add Address Info</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressCreate;
