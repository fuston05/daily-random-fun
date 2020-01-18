import styled from 'styled-components';

// div, ul, li, a

const NavCont= styled.nav`
  display: flex;
  justify-contents: flex-end;
  width: 70%;
  padding: 2% 0 2% 0;
`;

const ULItem= styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const ListItem= styled.li`
  display: flex;
  justify-content: center;
  align-items; center;
  width: 20%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-left: 1%;
  list-style: none;

  &:hover{
    cursor: pointer;
    opacity: 0.6;
  }

  a{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2% 2%;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;

    
  }
`;

export {NavCont, ULItem, ListItem};