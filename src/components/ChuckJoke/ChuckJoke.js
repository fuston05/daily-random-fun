import React, { useState } from 'react';
import { ChuckButton } from '../Buttons/Buttons';
import Axios from 'axios';

function ChuckJoke(props) {
  const [chuckJoke, setChuckJoke] = useState('');

  function getChuckJoke(e) {
    Axios
      .get('http://api.icndb.com/jokes/random/') //chuck norris api
      .then(res => {
        setChuckJoke(res.data.value.joke);
        // console.log('chuck Joke: ',res.data.value.joke);
      })
      .catch(err => console.log('Error: ', err))
  }//end func

  return (

    <div>
      <h2>Chuck Norris Jokes!</h2>
      <ChuckButton func={getChuckJoke} label='Get Chuck Norris Joke' />
      <h3>{chuckJoke}</h3>
    </div>
  );
}

export default ChuckJoke;