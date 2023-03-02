import React from "react";
import "../style.css";

import Text from "../Text/Text";
import Value from "../Value/Value";
import Button from "../Button/Button";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      max: 15,
      step: 1,
    };
  }

  setStep = (val) => {
    this.setState({
      step: val,
    });
  };

  setMaxValue = (val) => {
    this.setState({
      max: val,
    });
  };

  incCount = () => {
    let newCount = this.state.count + this.state.step;
    this.setState({
      count: newCount,
    });
  };

  decCount = () => {
    let newCount = this.state.count - this.state.step;
    this.setState({
      count: newCount,
    });
  };

  resetCount = () => {
    let newCount = 0;
    this.setState({
      count: newCount,
      step: 5,
    });
  };

  maxCheck = () => {
    if (this.state.count >= this.state.max) {
      alert("Limit Reached!! Please Reset");
      this.setState({
        step: 0,
      });
    }
  };

  render() {
    return (
      <>
        <div className="main-container " onClick={this.maxCheck}>
          <div className="counter-container grid-item">
            <div className="count">{this.state.count}</div>
          </div>
          <div className="controls-container grid-item">
            <div className="steps-container grid-item">
              <Text text={"Steps"} />
              <div className="blocks-container grid-item">
                <Value
                  value={"5"}
                  class={"step selected-block"}
                  onClick={(event) => {
                    document
                      .querySelector(".step.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setStep(5);
                  }}
                />
                <Value
                  value={"10"}
                  class={"step"}
                  onClick={(event) => {
                    document
                      .querySelector(".step.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setStep(10);
                  }}
                />
                <Value
                  value={"15"}
                  class={"step"}
                  onClick={(event) => {
                    document
                      .querySelector(".step.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setStep(15);
                  }}
                />
              </div>
            </div>
            <div className="max-container ">
              <Text text={"Max Value"} />
              <div className="blocks-container grid-item">
                <Value
                  value={"15"}
                  class={"max selected-block"}
                  onClick={(event) => {
                    document
                      .querySelector(".max.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setMaxValue(15);
                  }}
                />
                <Value
                  value={"100"}
                  class={"max"}
                  onClick={(event) => {
                    document
                      .querySelector(".max.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setMaxValue(100);
                  }}
                />
                <Value
                  value={"200"}
                  class={"max"}
                  onClick={(event) => {
                    document
                      .querySelector(".max.selected-block")
                      .classList.remove("selected-block");
                    event.target.classList.add("selected-block");
                    this.setMaxValue(200);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="buttons-container grid-item">
            <Button
              value={"Increment"}
              onClick={(event) => {
                this.incCount();
              }}
            />
            <Button
              value={"Decrement"}
              onClick={(event) => {
                this.decCount();
                // console.log(items[0].getAttribute("data-value"));
              }}
            />
            <Button
              value={"Reset"}
              onClick={(event) => {
                this.resetCount();
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Count;
