import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route } from "react-router-dom";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beers from "./components/Beers";
import Navbar from "./components/Navbar";
import BeerDetails from "./components/BeerDetails";
import BeerItem from "./components/BeerItem";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />

        <Route path="/:sub" component={Navbar} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:beerId" component={BeerItem}/>
      </div>
    );
  }
}

export default App;
