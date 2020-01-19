import styled from 'styled-components';
import {colors, sizes, theme} from '../global/styleVars';

const JokeCont= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10% 2% 2% 2%;
  max-width: 100%;
  width: 100%;
  height: 100vh;
`;

const Heading2= styled.h2`
  font-size: ${sizes.h2Size};
  color: ${theme.gray};
`;

const Heading3= styled.h3`
  font-size: ${sizes.h3Size};
  color: ${colors.gray};
`
;
// h4 used to display the actual joke text
const Heading4= styled.h4` 
  font-size: ${sizes.h4Size};
  color: ${colors.gray};
  text-align: center;
  margin: 5% 0;
`;

const Heading5= styled.h5`
  font-size: ${sizes.h5Size};
  color: ${colors.gray};
`;

export {JokeCont, Heading2, Heading3, Heading4, Heading5};