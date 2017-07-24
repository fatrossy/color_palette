import styled from 'styled-components';

export const ColorB = styled.div`
  margin:5px;
  width: 100px;
  height:100px;
  background: ${ props => props.color } ;
`
