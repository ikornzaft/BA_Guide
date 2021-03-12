import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled'

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
  
`;

const Title = styled.div`
  
`;

const Footer = styled.div`
  
`;

export { CardContainer, CardBody, IconContainer, Icon, TitleContainer, Title, Footer };