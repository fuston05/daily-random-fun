import styled from 'styled-components';
import {sizes, theme} from '../../global/styleVars';

const Button= styled.button`
  display: ${props => props.display=== 'none' ? 'none' : 'inline-block'};
  padding: 0.5% 1%;
  box-sizing: content-box;
  font-size: ${sizes.aSize};
  width: 15%;
  border-radius: 5px;
  background-color: ${theme.blue};
  color: ${theme.white};
  margin: 1% 0;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
    color: ${theme.black};
  }
`;

export {Button};