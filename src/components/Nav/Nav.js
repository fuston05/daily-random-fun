import React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './navStyles';

function Nav(){
  return(
    <div>
      <ul>
        <li><Link to= '/dadjokes'>Dad Jokes</Link></li>
        <li><Link to= '/chuckjokes'>Chuck Norris Jokes</Link></li>
        <li><Link to= '/geekJokes'>Geek Jokes</Link></li>
      </ul>
    </div>
  );
}

export default Nav;