import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BeerDetails from "./BeerDetails";

class RandomBeer extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        console.log(response);
        this.setState(
          {
            beer: response.data
          },
          () => {
            console.log("hey", this.state.beer);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.beer === null) {
      return <div></div>;
    }
    return <BeerDetails beer={this.state.beer} />;
  }
}

export default RandomBeer;
