import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavCont, ULItem, ListItem} from './navStyles';

function Nav(props){
  return(
    <NavCont>
      <ULItem>
        <ListItem><NavLink activeStyle={{backgroundColor: '#333333', color: "dodgerBlue"}} activeClassName="selected" exact to= '/'>Home</NavLink></ListItem>

        <ListItem><NavLink activeStyle={{backgroundColor: '#333333', color: "dodgerBlue"}} activeClassName="selected" to= '/dadjokes/dad'>Dad Jokes</NavLink></ListItem>

        <ListItem><NavLink activeStyle={{backgroundColor: '#333333', color: "dodgerBlue"}} activeClassName="selected" to= '/chuckjokes/chuck'>Chuck Norris Jokes</NavLink></ListItem>

        <ListItem><NavLink activeStyle={{backgroundColor: '#333333', color: "dodgerBlue"}} activeClassName="selected" to= '/geekjokes/geek'>Geek Jokes</NavLink></ListItem>
      </ULItem>
    </NavCont>
  );
}

export default Nav;