import React, {useEffect} from 'react';
import * as styles from './chuckJokeStyles';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function ChuckJoke(props){
  console.log(props);
 
    return(
      
    <div>
      <h3>Chuck jokes go here!</h3>
    </div>
  );
}


export default ChuckJoke;