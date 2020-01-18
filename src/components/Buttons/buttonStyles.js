import styled from 'styled-components';

const Button= styled.button`
  display: ${props => props.display=== 'none' ? 'none' : 'inline-block'};
  padding: 1%;
  font-size: 1rem;
  width: 15%;
  border-radius: 5px;
  background-color: dodgerBlue;
  color: #fff;
  margin: 1% 0;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
    color: #000;
  }
`;



export {Button};