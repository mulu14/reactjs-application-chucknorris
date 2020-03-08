import React, { Component } from "react";
import { queryJokes } from "../service/apicall";
import QueryJokesList from "./QueryJokesList";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class QuerySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryJoke: []
    };

    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this);
  }

  handleChangeQuery(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmitQuery(e) {
    e.preventDefault();
    queryJokes(this.state.query).then(response => {
      this.setState({
        queryJoke: response.result
      });
    });
  }

  render() {
    const render_categories_query = () => {
      return <QueryJokesList result={this.state.queryJoke} />;
    };
    return (
      <>
        <Col xs={4}>
          <Form onSubmit={this.handleSubmitQuery}>
            <Form.Group>
              <Form.Label>Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={this.state.query}
                onChange={this.handleChangeQuery}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={8}>
          {this.state.queryJoke != null ? render_categories_query() : null}
        </Col>
      </>
    );
  }
}

export default QuerySearch;
