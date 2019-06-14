import React from 'react';
import axios from 'axios';
import { Button, Form } from 'reactstrap';

export default class Login extends React.Component {
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
    const endpoint = 'https://dadjokes-app.herokuapp.com/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
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
          <Button size="lg" color="primary" type="submit">Login</Button>
        </Form>
      </>
    );
  }
}