import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beer = props => {
  console.log(props);
  return (
    <div className="col-12 col-md-6 border-bottom">
      <div className="card flex-row border-0 py-4">
        <div className="flex-shrink-0 text-center w-25">
          <img
            className="card-image-left"
            height="150px"
            src={props.beer.image_url}
            alt={props.beer.name}
          />
        </div>
        <div className="pl-4">
          <Link  className="h2" to={`/beers/${props.beer._id}`}>{props.beer.name}</Link>
          <h3>{props.beer.tagline}</h3>
          <p>
            <b>Created by: </b> {props.beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
};

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response.data);
        this.setState({
          beers: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.beers.map(beer => {
            return <Beer key={beer._id} beer={beer} />;
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
