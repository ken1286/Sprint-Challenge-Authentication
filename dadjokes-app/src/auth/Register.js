import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3300/api/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
            <Button size="lg" color="success" type="submit">Register</Button>
          </div>
        </form>
      </>
    );
  }
}