import React from 'react';
import {HeaderDiv, DateSpan, TemperatureSpan} from './HeaderStyles'
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TemperatureSpan>98°</TemperatureSpan>
    </HeaderDiv>
  )
}

export default Header
