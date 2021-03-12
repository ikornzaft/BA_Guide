import React from 'react';
import { CardWithRouter } from '../card/card.component';

import { ListContainer } from './card-list.styles';

const CardList = props => (
  <ListContainer className='card-list'>
    {props.places.map(place => (
      <CardWithRouter key={place.id} place={place} />
    ))}
  </ListContainer>
);

export { CardList };