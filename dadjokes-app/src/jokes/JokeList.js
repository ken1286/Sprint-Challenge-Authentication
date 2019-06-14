import React from 'react';
import { axiosAuth } from '../axiosAuth';

class JokeList extends React.Component {
  state = {
  };

  componentDidMount() {
    const endpoint = 'https://dadjokes-app.herokuapp.com/api/jokes';

    axiosAuth()
      .get(endpoint )
      .then(res => {
        console.log('jokes', res.data);
        this.setState(() => ({ jokes: res.data }));
      })
      .catch(({ response }) => {
        console.error('error', response);
      });
  }

  render() {
    if(!this.state.jokes) {
      return <h4>Loading Jokes...</h4>
    }
    return (
      <>
        <h2>Dad Jokes</h2>

        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  
}

export default JokeList;