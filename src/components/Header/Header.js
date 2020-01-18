import React from 'react';
import Nav from '../Nav/Nav.js';
import {HeaderCont, Heading_1} from './headerStyles';

function Header(props){
  return(
    <HeaderCont>
      <Heading_1>Daily Random Fun</Heading_1>
      <Nav />
    </HeaderCont>
  );
}

export default Header;