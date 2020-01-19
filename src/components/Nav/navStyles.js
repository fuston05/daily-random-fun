import styled from 'styled-components';
import {sizes, theme, Media} from '../../global/styleVars';

const NavCont= styled.nav`
  display: flex;
  justify-contents: center;
  align-items: center;
  width: 100%;
  margin: 1% 0;
`;

const ULItem= styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const ListItem= styled.li`
  display: flex;
  justify-content: center;
  align-items; center;
  max-width: 100%;
  width: 150px;
  border-radius: 3px;
  background-color: ${theme.white};
  margin: 1.5% 1%;
  list-style: none;

  @media ${Media.tablet}{
    width: 100%;
  }

  &:hover{
    cursor: pointer;
    opacity: 0.6;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2% 1%;
    border-radius: 3px;
    text-decoration: none;
    color: ${theme.black};
    font-size: ${sizes.aSize};    
  }
`;

export {NavCont, ULItem, ListItem};