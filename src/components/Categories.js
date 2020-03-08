import React, { Component } from "react";
import { getJokesLista, randomJokes } from "../service/apicall";
import CategoriesList from "./CategoriesList";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      randomJoke: ""
    };
    this.get_random_jokes = this.get_random_jokes.bind(this);
  }

  get_random_jokes(item) {
    randomJokes(item).then(response => {
      this.setState({
        randomJoke: response.value
      });
    });
  }

  componentDidMount() {
    getJokesLista().then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        data: response
      });
    });
  }

  render() {
    const render_categories_List = () => {
      return (
        <CategoriesList
          get_random_jokes={this.get_random_jokes}
          data={this.state.data}
          randomJoke={this.state.randomJoke}
        />
      );
    };

    return <> {render_categories_List()} </>;
  }
}
export default Categories;
