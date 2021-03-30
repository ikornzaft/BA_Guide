import styled from 'styled-components';
import { colors, device } from '../../styled'

const Container = styled.div`
  width: 70%;
  height: 75%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.neutral_light};
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
  opacity: 0.95;
  z-index: 50;
  overflow-y: scroll;
  @media ${device.tablet} {
      overflow-y: hidden;
    }
    .info-text {
      font-size: 0.7rem;
      line-height: 1.3rem;   
      @media ${device.tablet} {
        font-size: 0.9rem;
        line-height: 1.3rem;
        text-align: justify;
    }
  }
  .info-link {
    font-size: 0.9rem;
    text-decoration: none;
    color: ${colors.blue};
    line-height: 1.3rem;  
    cursor: pointer;
    &:hover {
      color: ${colors.blue_medium};
    }
    @media {device.tablet} {
    }
    @media {device.tablet} {
    }
  }
`;

export { Container };