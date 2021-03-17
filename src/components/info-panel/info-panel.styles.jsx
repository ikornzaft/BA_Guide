import styled from 'styled-components';
import { colors } from '../../styled'

const Container = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  left: 15%;
  top: 15%;
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
`;

export { Container };