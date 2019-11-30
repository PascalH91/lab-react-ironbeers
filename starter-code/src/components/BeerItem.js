import React, { Component } from "react";
import axios from "axios";
import BeerDetails from "./BeerDetails"

class BeerItem extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        const beer = response.data.find(beer => {
          return beer._id === this.props.match.params.beerId;
        });
        console.log(beer);
        this.setState({
          beer
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.beer);
    if (this.state.beer === null) {
      return <div />;
    }

    return (
    <BeerDetails beer={this.state.beer}/>
    );
  }
}

export default BeerItem;
