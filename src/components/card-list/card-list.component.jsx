import React from 'react';
import { Card } from '../';

import { ListContainer } from './card-list.styles';

const CardList = props => (
  <ListContainer className='card-list'>
    {props.places.map(place => (
      <Card key={place.id} place={place} />
    ))}
  </ListContainer>
);

export { CardList };