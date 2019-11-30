import React, { Component } from "react";

const BeerDetails = props => {
console.log(props)

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column py-4">
          <div className="flex-shrink-0 w-100 text-center">
            <img height="300px" src={props.beer.image_url} alt="" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h2>{props.beer.name}</h2>
            <h3>{props.beer.attenuation_level}</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4>{props.beer.tagline} </h4>
            <h4>{props.beer.first_brewed}</h4>
          </div>
          <p>{props.beer.description}</p>
          <h5>{props.beer.contributed_by}</h5>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
