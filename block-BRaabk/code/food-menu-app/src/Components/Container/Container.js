import React from "react";
import Data from "../data";
import { category } from "../data";
import Card from "../Card/Card";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTage: "lunch",
    };
  }

  setTag = (tag) => {
    this.setState(
      () => {
        return {
          selectedTage: tag,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render(props) {
    return (
      <>
        <div className="main-container">
          <h1>Our Menu</h1>
          <div className="tag-container">
            {category.map((item) => {
              return (
                <span
                  key={item.id}
                  className="tag"
                  onClick={(event) => {
                    this.setTag(event.target.innerText.toLowerCase());
                  }}
                >
                  {item.tag}
                </span>
              );
            })}
          </div>
          <div className="card-box">
            {Data.map((item) => {
              if (this.state.selectedTage === "all") {
                return (
                  <>
                    <Card
                      key={item.id}
                      heading={item.title}
                      price={item.price}
                      desc={item.desc}
                    />
                  </>
                );
              }
              if (item.category === this.state.selectedTage) {
                return (
                  <>
                    <Card
                      key={item.id}
                      heading={item.title}
                      price={item.price}
                      desc={item.desc}
                    />
                  </>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Container;
