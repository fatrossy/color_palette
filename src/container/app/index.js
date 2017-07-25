import React, { Component } from 'react';
import { Wrap } from './style';
import colors from './color';
import BackgroundBox from '../../components/BackgroundBox';
import BackgroundBox2 from '../../components/BackgroundBox2';
import BackgroundBox3 from '../../components/BackgroundBox3';

export default class App extends Component {
  render() {
    const bgColor = ['#FFFFFF','#939598','#000000'];
    const bgBox = bgColor.map((d,i) => <BackgroundBox bcolor={d} key={i} data={colors} />);
    return (
      <Wrap>
        {bgBox}
      </Wrap>
    );
  }
}
