import React, { Component } from "react";
import Genre from "./Genre";

class GenresDBFuncional extends Component {
  constructor() {
    super();
   /* Binding the function to the component. */
    this.handleBackground = this.handleBackground.bind(this);
    this.state = {
      genreList: [],
      test: " ",
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch("http://localhost:3001/api/genres");
      let result = await response.json();

      this.setState({
        genreList: result.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleBackground() {
    this.setState({
      test: "bg-secondary",
    });
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6
              onMouseOver={this.handleBackground}
              className="m-0 font-weight-bold text-gray-800"
            >
              Genres in Data Base
            </h6>
          </div>
          <div className={`card-body  ${this.state.test}`}>
            <div className="row">
              {this.state.genreList.map((genre, index) => {
                return <Genre {...genre} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresDBFuncional;
