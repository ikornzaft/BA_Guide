import React from 'react';
import { withRouter } from 'react-router-dom';

import { CardContainer, CardBody, IconContainer, Icon, TitleContainer, Title, Footer } from './card.styles.jsx';
import { useIconSelector } from '../../hooks';

const Card = ({ type, place, history }) => {

  return (
  <CardContainer className='card-container' onClick={() => history.push(`Places/${place.id}`)}>
    <CardBody>
      <IconContainer>
        <Icon src={useIconSelector(place.nombre.toLowerCase())} alt={type} />
      </IconContainer>
      <TitleContainer>
        <Title> {place.nombre.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')} </Title>
      </TitleContainer>
    </CardBody>
    <Footer>
    </Footer>
  </CardContainer>
  )
};

const CardWithRouter = withRouter(Card);

export { CardWithRouter };