import React, { Component } from 'react';
import CatagoryBox1 from '../CatagoryBox1';
import { BackgroundBox } from './style';

function BackgroundBox2 (props) {
  const {data} = props;
  const cata = data.map((d,i) => <CatagoryBox1 data={d} key={i} />);
  return (
      <BackgroundBox>
        {cata}
      </BackgroundBox>
  );
};

export default BackgroundBox2;
