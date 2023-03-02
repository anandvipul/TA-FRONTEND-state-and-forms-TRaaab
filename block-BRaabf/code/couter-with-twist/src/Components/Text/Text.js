import React from "react";

class Text extends React.Component {
  render(props) {
    return (
      <>
        <h3 className="text-style grid-item">{this.props.text}</h3>
      </>
    );
  }
}

export default Text;
