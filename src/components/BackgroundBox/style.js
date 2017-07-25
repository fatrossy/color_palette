import styled from 'styled-components';

export const BgBox = styled.div`
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 33.5%;
  margin: 0;
  height: auto;
  background: ${ props => props.bcolor } ;
`
