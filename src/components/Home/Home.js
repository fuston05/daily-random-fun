import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { JokeCont, Heading2, Heading4 } from '../../global/globalStyles';

function Home(props) { //Joke of the day
  const [joke, setJoke] = useState('');

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  useEffect(() => {
    if (getRandomNum(0, 100) < 50) { //either call chuck norris api or geek joke api randomly
      Axios
        .get('https://geek-jokes.sameerkumar.website/api') //chuck norris api
        .then(res => {
          setJoke(res.data);
          // console.log('Geek Joke: ',res.data);
        })
        .catch(err => console.log('Error: ', err))
    } else {
      Axios
        .get('http://api.icndb.com/jokes/random/') //chuck norris api
        .then(res => {
          setJoke(res.data.value.joke);
          // console.log('chuck Joke: ',res.data.value.joke);
        })
        .catch(err => console.log('Error: ', err))
    }//end if
  }, [])

  return (
    <JokeCont>
      <Heading2>Random Joke of the Day</Heading2>
      <Heading4>{unescape(joke)}</Heading4>
    </JokeCont>
  );
}

export default Home;