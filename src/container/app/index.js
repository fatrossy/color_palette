import React, { Component } from 'react';
import { Wrap } from './style';
import colors from './color';
import BackgroundBox1 from '../../components/BackgroundBox1';
import BackgroundBox2 from '../../components/BackgroundBox2';
import BackgroundBox3 from '../../components/BackgroundBox3';

export default class App extends Component {
  render() {
    return (
      <Wrap>
        <BackgroundBox1 data={colors} />
        <BackgroundBox2 data={colors} />
        <BackgroundBox3 data={colors} />
      </Wrap>
    );
  }
}
