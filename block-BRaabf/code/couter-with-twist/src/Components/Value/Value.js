import React from "react";

class Value extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }
  render(props) {
    return (
      <>
        <div
          className={`value-item grid-item ${
            this.props.class ? this.props.class : ""
          }`}
          data-value={this.props.value}
          onClick={this.props.onClick}
        >
          {this.props.value}
        </div>
      </>
    );
  }
}

export default Value;
