import React, { useState } from 'react';
import Axios from 'axios';
import { GeekButton } from '../Buttons/Buttons';

function GeekJoke() {
  const [geekJoke, setGeekJoke] = useState('');

  function getGeekJoke(e) {
    Axios
      .get('https://geek-jokes.sameerkumar.website/api') //chuck norris api
      .then(res => {
        setGeekJoke(res.data);
        // console.log('Geek Joke: ',res.data);
      })
      .catch(err => console.log('Error: ', err))
  }//end func

  return (
    <div>
      <h2>Geek Jokes!</h2>
      <GeekButton func={getGeekJoke} label='Get Geek Joke' />
      <h3>{geekJoke}</h3>
    </div>
  );
}


export default GeekJoke;