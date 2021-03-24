import styled from 'styled-components';
import { colors } from '../../styled'

const Container = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 5rem 0;
  & h3 {
    color: ${colors.grey};
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  .placedata-noInfo {
    width: 15rem;

  }
  .placedata-icon {
    margin-top: 1rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .placedata-category {
    & p {
      font-weight: 100;
      display: inline-block;
      margin-left: 1rem;
    }
    & a {
      font-size: 1.2rem;
      font-weight: 100;
      text-decoration: none;
      color: ${colors.blue_dark};
      margin-left: 1rem;
      &:hover {
        cursor: pointer;
        color: ${colors.blue};
      }
    }
  }
`;

export { Container };