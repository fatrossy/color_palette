import React, { Component } from 'react';
import ColorBox from '../ColorBox';
import { Catag1 } from './style';

function CatagoryBox1 (props) {
  const {data} = props;
  const key1 = Object.keys(data);
  const value1 = data[key1];
  const colorArr = Object.entries(value1);
  const clBoxNum = colorArr.map((d,i) => <ColorBox data={d} key={i}/>);
  return (
      <Catag1>
        {clBoxNum}
      </Catag1>
  );
};

export default CatagoryBox1;
