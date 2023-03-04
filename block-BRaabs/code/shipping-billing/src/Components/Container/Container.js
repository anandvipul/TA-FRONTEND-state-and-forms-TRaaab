import React from "react";
import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      isSame: true,
    };
  }

  handleChange = (event) => {
    console.log("hello");
    let name = this.router(event.target.name);

    let shipping = this.state.shipping;
    let billing = this.state.billing;

    // Check for Shipping
    if (name) {
      shipping.address = event.target.value;
      this.setState({
        shipping,
      });
    }
  };

  router = (name) => {
    var re = /Shipping/;
    return re.test(name);
  };

  update = (name, obj) => {};

  render() {
    return (
      <>
        <div className="main-container">
          <h1>Controlled Component</h1>
          <div className="form-container">
            <form className="shipping-form">
              <h3>Shipping Address</h3>
              <div className="form-item">
                <label htmlFor="addressShipping" />
                Address
                <input
                  id="addressShipping"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="zipShipping" />
                ZIP / Postal Code
                <input
                  id="zipShipping"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="cityShipping" />
                City
                <input
                  id="cityShipping"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="countryShipping" />
                Country
                <input
                  id="countryShipping"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <form className="billing-form">
              <h3>Billing Address</h3>
              <span className="check">
                <label htmlFor="checkboxSame" /> Same as Shipping
                <input id="checkboxSame" type="checkbox" name="isSame" />
              </span>
              <div className="form-item">
                <label htmlFor="addressBilling" />
                Address
                <input
                  id="addressBilling"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="zipBilling" />
                ZIP / Postal Code
                <input
                  id="zipBilling"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="cityBilling" />
                City
                <input
                  id="cityBilling"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="countryBilling" />
                Country
                <input
                  id="countryBilling"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Container;
