import React, { Component } from 'react';
import ColorBar from '../ColorBar';
import ColorNameBar1 from '../ColorNameBar1';
import ColorNameBar2 from '../ColorNameBar2';
import { ColorBo } from './style';

function ColorBox (props) {
  const { data } = props;
  return (
      <ColorBo>
        <ColorBar data={data[1]} />
        <ColorNameBar1 data={data[0]} />
        <ColorNameBar2 data={data[1]} />
      </ColorBo>
  );
};

export default ColorBox;
