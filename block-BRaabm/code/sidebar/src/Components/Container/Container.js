import React from "react";
import Movie from "../Movie/Movie";
import BackdropComponent from "../BackdropComponent/BackdropComponent";
import Data from "../data";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="backdrop-container">
            {this.state.selected ? (
              <>
                <div className="backdrop-movie">
                  <span className="backdrop-movie-title">
                    {Data[this.state.selected].Title}
                  </span>
                  <span
                    className="backdrop-movie-close"
                    onClick={() => {
                      this.setState({
                        selected: 0,
                      });
                    }}
                  >
                    Close
                  </span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <h1>Movie Database</h1>
          <div className="movie-container">
            {Data.map((item) => {
              return (
                <>
                  <div
                    onClick={(event) => {
                      this.setState({ selected: item.id });
                    }}
                  >
                    <Movie
                      key={item.id}
                      poster={item.Poster}
                      title={item.Title}
                      released={item.Released}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Container;
