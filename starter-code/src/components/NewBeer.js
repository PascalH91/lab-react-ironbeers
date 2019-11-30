import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]:
          event.target.name === "attenuation_level"
            ? Number(event.target.value)
            : event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  submitForm = event => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-12 col-md-6 py-4">
            <div className="form-group">
              <label htmlFor="">Name: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Tagline: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="tagline"
                id="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">First Brewed: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="first_brewed"
                id="firstBrewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Brewers Tips: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="brewers_tips"
                id="brewersTips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Attenuation Level: </label>
              <input
                className="form-control rounded-pill"
                type="number"
                name="attenuation_level"
                id="attenuationLevel"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Contributed By: </label>
              <input
                className="form-control rounded-pill"
                type="text"
                name="contributed_by"
                id="contributedBy"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={this.submitForm}
              className="btn btn-primary col-12 col-md-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
