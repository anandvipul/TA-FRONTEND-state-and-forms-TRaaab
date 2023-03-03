import React from "react";
import Data from "../data";
import Card from "../Card/Card";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 4,
    };
  }

  changeSelected = (id) => {
    this.setState((prevState) => {
      return {
        selected: id,
      };
    });
  };

  render() {
    return (
      <>
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              onClick={(event) => {
                this.changeSelected(item.id);
              }}
              className="container-div"
            >
              <Card
                key={item.id}
                head={item.Q}
                text={item.A}
                class={this.state.selected === item.id ? true : false}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default Container;
