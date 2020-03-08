import React from "react";
import { Switch, Route } from "react-router";
import Categories from "./Categories";
import RandomJokes from "./RandomJokes";
import QuerySearch from "./QuerySearch";
import Home from "./Home";
const RouterApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/categories/" component={Categories}></Route>
      <Route path="/categories/:id" component={RandomJokes}></Route>
      <Route path="/search" component={QuerySearch}></Route>
    </Switch>
  );
};

export default RouterApp;
