import React from "react";

class Button extends React.Component {
  render(props) {
    return (
      <>
        <button className="button-item grid-item" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </>
    );
  }
}

export default Button;
