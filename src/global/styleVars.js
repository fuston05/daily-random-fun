// **************** COLORS **********************
// ********** change colors here ****************

const white= 'Azure';
const black= 'black';
const gray= 'slateGray';
const green= 'darkSeaGreen';
const blue= 'cornflowerBlue';
const blue2= 'cadetBlue';
const orange= 'darkGoldenRod';
const brown= 'darkKahki';

// ****************** SIZES **********************
// ********** change font sizes here *************
  const aSize= '1rem';
  const pSize= '1.4rem';
  const h1Size= '2rem';
  const h2Size= '1.8rem';
  const h3Size= '1.6rem';
  const h4Size= '1.4rem';
  const h5Size= '1.4rem';
  const smSize= '0.8rem';
  const lgSize= '2.6rem';

// ************** MEDIA QUERIES ******************
// ********* change media queries here ***********
const Media= {
  tablet: '(max-width: 675px)',
}


// ***********************************************
// ***********************************************
const ThemeColors= {
  white: white,
  black: black,
  gray: gray, 
  green: green,
  blue: blue
}

const FontColors= {
  aColor: orange,
  pColor: gray,
  h1Color: green,
  h2Color: blue,
  h3Color: blue2,
  h4Color: blue,
  h5Color: brown
}

const FontSizes= {
  small: smSize,
  large: lgSize,
  aSize: aSize,
  pSize: pSize,
  h1Size: h1Size,
  h2Size: h2Size,
  h3Size: h3Size,
  h4Size: h4Size,
  h5Size: h5Size
}

export {FontColors as colors, FontSizes as sizes, ThemeColors as theme, Media};