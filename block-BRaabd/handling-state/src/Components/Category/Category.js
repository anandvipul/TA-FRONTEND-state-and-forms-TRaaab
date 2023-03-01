import React from "react";
import "../style.css";
import Image from "../Image/Image";
import CategoryItem from "../CategoriesItem";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  clickHandler = (src) => {
    this.setState({
      selected: src,
    });
  };

  decorator = (event) => {
    Array.from(document.querySelectorAll(".grid-item")).forEach((item) =>
      item.classList.remove("selected")
    );
    event.target.classList.add("selected");
  };

  render() {
    return (
      <>
        <div className="category-container">
          <div
            className="basketball grid-item"
            data-item={CategoryItem.BASKETBALL}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            BasketBall
          </div>
          <div
            className="pubg grid-item"
            data-item={CategoryItem.PUBG}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            PubG
          </div>
          <div
            className="tiger grid-item"
            data-item={CategoryItem.TIGER}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            Tiger
          </div>
          <div
            className="phone grid-item"
            data-item={CategoryItem.PHONE}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            Phone
          </div>
          <div
            className="laptop grid-item"
            data-item={CategoryItem.LAPTOP}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            Laptop
          </div>
          <div
            className="cricket grid-item"
            data-item={CategoryItem.CRICKET}
            onClick={(event) => {
              this.clickHandler(event.target.getAttribute("data-item"));
              this.decorator(event);
            }}
          >
            Cricket
          </div>
          <Image src={this.state.selected} />
        </div>
      </>
    );
  }
}

export default Category;
