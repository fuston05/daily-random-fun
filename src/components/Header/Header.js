import React from 'react';
import Nav from '../Nav/Nav.js';
import {HeaderCont} from './headerStyles';

function Header(props){
  return(
    <HeaderCont>
      <h1>Daily Random Fun</h1>
      <Nav />
    </HeaderCont>
  );
}

export default Header;