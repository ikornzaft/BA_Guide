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
      padding-bottom: 5rem;
      height: 50%;
  }
  @media ${device.laptop_small} {
      height: 65%;
  }
  @media ${device.laptop_large} {
      height: 55%;
      padding-bottom: 8rem;
  }
  @media ${device.desktop} {
      width: 70%;
      padding: 4rem 1rem 5rem 1rem;
  }
  @media ${device.desktop_large} {
      height: 40%;
      width: 50%;
      padding: 6rem 1rem 5rem 1rem;
  }
  .info-text {
    font-size: 0.7rem;
    line-height: 1.3rem;   
    @media ${device.tablet} {
      font-size: 0.9rem;
      line-height: 1.3rem;
      text-align: justify;
    }
    @media ${device.desktop} {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
    @media ${device.desktop_large} {
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: justify;
    }
  }
  .info-link {
    font-size: 0.7rem;
    text-decoration: none;
    color: ${colors.blue};
    line-height: 1.3rem;  
    cursor: pointer;
    &:hover {
      color: ${colors.blue_medium};
    }
    @media ${device.tablet} {
      font-size: 0.9rem;
    }
    @media ${device.desktop} {
      font-size: 1.2rem;
    }
  }
  `;

const IconContainer = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  .fa {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-size: 1.2rem;
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    color: ${colors.neutral_light};
    background-color: ${colors.blue};
    &:hover {
      opacity: 0.7;
    }
  }
`;

export { Container, IconContainer };