import React, { useState } from 'react';
import Axios from 'axios';
import { GeekButton } from '../Buttons/Buttons';
import {JokeCont, Heading2, Heading4} from '../../global/globalStyles';

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
    <JokeCont>
      <Heading2>Geek Jokes!</Heading2>
      <GeekButton func={getGeekJoke} label='Get Geek Joke' />
      <Heading4>{geekJoke}</Heading4>
    </JokeCont>
  );
}


export default GeekJoke;