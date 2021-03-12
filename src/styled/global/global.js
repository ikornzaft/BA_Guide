import { createGlobalStyle } from 'styled-components';
import { colors, primaryFont, device } from '../';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    font-size: 16px;
    @media ${device.laptop_large} {
      font-size: 20px;
    }
  }
  body {
    background-color: ${colors.neutral_medium};
    box-sizing: border-box;
    font-family: ${primaryFont};
    font-weight: 300;
    color: ${colors.blue_dark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { GlobalStyle };