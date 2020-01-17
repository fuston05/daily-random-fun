import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as styles from './navStyles';

function Nav(props){
  return(
    <div>
      <ul>
        <li><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to= '/dadjokes'>Dad Jokes</NavLink></li>
        <li><NavLink to= '/chuckjokes'>Chuck Norris Jokes</NavLink></li>
        <li><NavLink to= '/geekJokes'>Geek Jokes</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;