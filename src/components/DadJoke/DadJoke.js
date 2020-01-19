import React, { useState } from 'react';
import Axios from 'axios';
import {PunchLineButton, DadButton} from '../Buttons/Buttons';
import {JokeCont, Heading2, Heading4} from '../../global/globalStyles';

function DadJoke(props) {
  const [joke, setJoke] = useState('');
  const [punchLine, setPunchLine] = useState('');
  const[dadDisplay, setDadDisplay]= useState('inline-block'); 
  const[punchLineDisplay, setPunchLineDisplay]= useState('none'); 

  function getDadJoke(e) {
    setDadDisplay('none');
    Axios
      .get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes') //dad joke api
      .then(res => {
          setPunchLineDisplay('inline-block');
          setJoke(res.data.setup);
          setPunchLine(res.data.punchline);
      })
      .catch(err => console.log('Error: ', err))
  }//end func

  function getPuchLine(){
      setJoke(punchLine);
      setDadDisplay('inline-block');
      setPunchLineDisplay('none');
  }//end func

    return (
      <JokeCont>
        <Heading2>Dad Jokes!</Heading2>
        <DadButton display= {dadDisplay} func={getDadJoke} label= 'Get Dad Joke' />
        <PunchLineButton display= {punchLineDisplay} func={getPuchLine} label= 'See Punch Line' />
        <Heading4>{joke}</Heading4>     
      </JokeCont>
    );
}

export default DadJoke;