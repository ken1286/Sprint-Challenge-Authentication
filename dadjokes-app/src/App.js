import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import Login from './auth/Login';
import JokeList from './jokes/JokeList';
import Register from './auth/Register';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/jokes">Jokes</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <div>
          <Route path="/jokes" component={JokeList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  };
}

export default withRouter(App);
