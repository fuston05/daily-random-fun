import React from 'react';
import Nav from '../Nav/Nav.js';
import * as styles from './headerStyles';

function Header(props){
  return(
    <div>
      <h1>Daily Random Fun</h1>
      <Nav />
    </div>
  );
}

export default Header;