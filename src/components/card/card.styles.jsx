import styled from 'styled-components';
import { colors } from '../../styled'

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.green_medium};
  border-radius: 10px;
  overflow: hidden;
`;

const CardBody = styled.div`
  width: 100%;
  height: 68%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  background-color: ${colors.blue_medium};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 35%;
  height: 100%;
`;

const Icon = styled.img`
  margin-top: 0.8rem;
  width: 3rem;
  height: 3rem;
`;

const TitleContainer = styled.div`
  width: 65%;
  padding: 0.9rem 1rem 1rem 0;
  text-align: left;
`;

const Title = styled.div`
  color: ${colors.blue};
  font-size: 1.1rem;
  font-weight: 500;
`;

const Footer = styled.div`
  height: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
`;

export { CardContainer, CardBody, IconContainer, Icon, TitleContainer, Title, Footer };