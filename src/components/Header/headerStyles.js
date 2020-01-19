import styled from 'styled-components';
import {colors, sizes, theme} from '../../global/styleVars';

const HeaderCont= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray};
  max-width: 100%;
  padding: 1% 1% 0 1%;
  width: 100%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 1);
`;

const Heading1= styled.h1`
  font-size: ${sizes.h1Size};
  color: ${colors.h1Color};
  text-shadow: 1px 1px 3px #000;
`;

export {HeaderCont, Heading1};