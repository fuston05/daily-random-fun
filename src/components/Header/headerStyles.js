import styled from 'styled-components';

const HeaderCont= styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #666;
  max-width: 100%;
  width: 100%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 1);
`;

const Heading_1= styled.h1`
  font-size: 2rem;
  color: #999;
  text-shadow: 1px 1px 3px #000;
`;

export {HeaderCont, Heading_1};