import styled from 'styled-components';
import {colors} from './global/styleVars';

const MainCont= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: ${colors.white};
`;

export {MainCont};