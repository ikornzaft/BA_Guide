import React from 'react';
import parse from 'html-react-parser';

import { Container } from './place-data.styles.jsx';
import { useIconSelector, useFormatNameString } from '../../hooks';

import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/telefono.svg';
import www from '../../assets/icons/world-wide-web.svg';

const PlaceData = ({ phone, email, web }) => {
  
  return (
    <div>
      {phone ? <p>{phone}</p> : null}
      {email ? parse(email) : null}
      {web ? parse(web) : null}
    </div>
  )
};
    
export { PlaceData };