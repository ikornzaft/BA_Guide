import React from 'react';

import { CardContainer, CardBody, IconContainer, Icon, TitleContainer, Title, Footer } from './card.styles.jsx';
import { useIconSelector, useFormatNameString } from '../../hooks';
import { InfoButton } from '../';

const Card = ({ page, type, place }) => {
  return (
    <CardContainer className={page}>
      <CardBody className={page}>
        <IconContainer>
          <Icon src={useIconSelector(place.nombre.toLowerCase())} alt={type} />
        </IconContainer>
        <TitleContainer>
          <Title className={page}> {useFormatNameString(place.nombre)} </Title>
        </TitleContainer>
      </CardBody>
      <Footer>
      <InfoButton page={page} location={place.id} text="+ Info">Info</InfoButton>
      </Footer>
    </CardContainer>
    )
  };
    
export { Card };