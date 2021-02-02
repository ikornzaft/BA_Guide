import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <h2> {props.place.nombre} </h2>
  </div>
)