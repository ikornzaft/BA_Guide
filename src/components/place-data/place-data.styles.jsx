import styled from 'styled-components';
import { colors, device } from '../../styled'

const Container = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 5rem 0;
  & h3 {
    color: ${colors.grey};
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    @media ${device.tablet} {
        font-size: 1.2rem;
    }
    @media ${device.desktop_large} {
        font-size: 2.5rem;
    }
  }
  .placedata-noInfo {
    width: 15rem;

  }
  .placedata-icon {
    margin-top: 1rem;
    width: 1rem;
    height: 1rem;
    @media ${device.tablet} {
      width: 1.2rem;
      height: 1.2rem;
    }
    @media ${device.desktop_large} {
      width: 2rem;
      height: 2rem
    }
  }
  .placedata-category {
    & p {
      font-weight: 100;
      display: inline-block;
      margin-left: 1rem;
      font-size: 0.9rem;
      @media ${device.tablet} {
        font-size: 1rem;
      }
      @media ${device.desktop_large} {
        font-size: 2.5rem;
      }
    }
    & a {
      font-size: 0.9rem;
      font-weight: 100;
      text-decoration: none;
      color: ${colors.blue_dark};
      margin-left: 1rem;
      @media ${device.tablet} {
        font-size: 1.2rem;
      }
      @media ${device.desktop_large} {
        font-size: 2.5rem;
      }
      &:hover {
        cursor: pointer;
        color: ${colors.blue};
      }
    }
  }
`;

export { Container };