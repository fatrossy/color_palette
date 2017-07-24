import React, { Component } from 'react';
import { ColorB } from './style';

function ColorBar (props) {
  const {data} = props;
  return (
      <ColorB color={data} />
  );
};

export default ColorBar;
