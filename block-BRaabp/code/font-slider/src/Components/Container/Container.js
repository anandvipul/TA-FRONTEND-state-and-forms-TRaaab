import React from "react";
import Card from "../Card/Card";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      fontsize: 12,
    };
    this.fontFamily = [
      "Climate Crisis",
      "Roboto",
      "Poppins",
      "Golos Text",
      "Tilt Neon",
      "Open Sans",
      "Noto Sans Japanese",
      "Noto Sans",
      "Monserrat",
      "Tilt Warp",
    ];
  }

  handleTextChange = (event) => {
    this.setState(
      (prevState) => {
        return {
          text: event.target.value,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSliderChange = (event) => {
    // console.log(event.target.value);
    this.setState((prevState) => {
      return {
        fontsize: +event.target.value,
      };
    });
  };
  render() {
    return (
      <>
        <div className="main-container">
          <div className="header-container">
            <div className="input-text-space">
              <input
                value={this.state.text}
                onChange={(event) => this.handleTextChange(event)}
                type="text"
              />
            </div>
            <div className="inpit-font-size">
              <input
                type="range"
                min="1"
                max="100"
                value={this.state.fontsize}
                onChange={(event) => this.handleSliderChange(event)}
              />
            </div>
          </div>
          <div className="fonts-container">
            {this.fontFamily.map((item) => {
              return (
                <Card
                  fontFamily={item}
                  text={this.state.text}
                  fontsize={this.state.fontsize}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Container;
