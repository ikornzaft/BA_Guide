import styled from 'styled-components';

import { colors, device } from '../../styled'
import searchIcon from "../../assets/icons/search.svg";

const InputField = styled.input`
  margin: 2rem;
  width: 12rem;
  border-radius: 50px;
  background: ${colors.neutral_light} url(${searchIcon}) no-repeat 5% 50%;
  background-size: 1.5rem;
  color: ${colors.grey};
  outline: none;
  border: none;
  padding: 1rem 4rem;
  @media ${device.tablet} {
    width: 16rem;
  }
  &:focus {
    background-color: ${colors.blue_light};
  }
`;

export { InputField };