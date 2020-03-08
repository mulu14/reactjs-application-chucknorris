import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { randomJokes } from "../service/apicall";
import Col from "react-bootstrap/Col";

class RandomJokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomJoke: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    randomJokes(params.id).then(response => {
      this.setState({
        randomJoke: response.value
      });
    });
  }

  render() {
    return (
      <Col>
        <h2> Random Joke</h2>
        <p>{this.state.randomJoke != null ? this.state.randomJoke : null}</p>
      </Col>
    );
  }
}
export default withRouter(RandomJokes);
