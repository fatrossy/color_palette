import styled, { injectGlobal } from 'styled-components';

const StyledBody = injectGlobal`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    * {
      box-sizing: border-box;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: auto;
  bottom: 20px;
  top: 20px;
`
