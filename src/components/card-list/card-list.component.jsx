import React from 'react';
import { Card } from '../';

import { ListContainer, Pic } from './card-list.styles';

import empty from '../../assets/img/List-is-Empty.svg';

const CardList = props => (
  <ListContainer className='card-list'>
    {props.places < 1 ? <Pic src={empty} alt="No items" /> : null}
    {props.places.map(place => (
      <Card page={props.page} key={place.id} place={place} />
    ))}
  </ListContainer>
);

export { CardList };