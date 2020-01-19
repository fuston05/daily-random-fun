import React, { useState } from 'react';
import { ChuckButton } from '../Buttons/Buttons';
import {JokeCont, Heading2, Heading4} from '../../global/globalStyles';
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

    <JokeCont>
      <Heading2>Chuck Norris Jokes!</Heading2>
      <ChuckButton func={getChuckJoke} label='Get Chuck Norris Joke' />
      <Heading4>{chuckJoke}</Heading4>
    </JokeCont>
  );
}

export default ChuckJoke;