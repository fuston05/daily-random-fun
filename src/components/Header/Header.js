import React from 'react';
import Nav from '../Nav/Nav.js';
import {HeaderCont, Heading1} from './headerStyles';

function Header(props){
  return(
    <HeaderCont>
      <Heading1>Daily Random Fun</Heading1>
      <Nav />
    </HeaderCont>
  );
}

export default Header;