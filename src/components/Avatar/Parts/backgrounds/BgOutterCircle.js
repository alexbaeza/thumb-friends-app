import React from 'react';
import colours from '../../../../colours';

const BgOutterCircle = () => {
  const colour = colours.bgColours.white;

  return <circle cx="400" cy="400" r="400" fill={colour} />;
};

export default BgOutterCircle;
