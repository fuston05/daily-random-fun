import styled from 'styled-components';

const Button= styled.button`
  display: ${props => props.display=== 'none' ? 'none' : 'inline-block'};
  padding: 1%;
`;



export {Button};