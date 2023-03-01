import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  render() {
    return (
      <>
        <div className="image-container grid-item">
          <img src={this.props.src} alt="basket-ball" />
        </div>
      </>
    );
  }
}

export default Image;
