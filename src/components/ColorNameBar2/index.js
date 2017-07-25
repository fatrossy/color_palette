import React, { Component } from 'react';
import { ColorNB } from './style';

function ColorNameBar2 (props) {
  const { data } = props;

  // console.log(data)

  const nameRef = /(rgba\(\d+,\d+,\d+,[\d\.]+\))/g;

  const parsingColors = (d) => {
    if (d[0] != '#'){
      if (d[1] != 'g') {
        let m;
        console.log(d)
        while ((m = nameRef.exec(d)) !== null) {
          if (m.index === nameRef.lastIndex) {
              nameRef.lastIndex++;
          }
           m.forEach((match, groupIndex) => {
             console.log(match)
              return match
           });
        //console.log(m, m[1])
        return `${m[0]} ${m[1]}`
        }}
      return d;
    }
    else {
      return d;
    }
  }

  //console.log(parsingColors(data))

  return (
      <ColorNB>{parsingColors(data)}</ColorNB>
  );
};

export default ColorNameBar2;
