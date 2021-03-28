import React from 'react';
import parse from 'html-react-parser';

import { Container } from './place-data.styles.jsx';

import daysImg from '../../assets/icons/clock.svg';
import emailImg from '../../assets/icons/email.svg';
import phoneImg from '../../assets/icons/telefono.svg';
import wwwImg from '../../assets/icons/world-wide-web.svg';

const PlaceData = ({ days, phone, email, web }) => {
      
  return (
    <Container>
      <h3>Other information about this place:</h3>
      {days ? <span className="placedata-category"><img className="placedata-icon" src={daysImg} alt="Visiting hours"/><p>Visiting hours: {days}</p></span> : null}
      {phone ? <span className="placedata-category"><img className="placedata-icon" src={phoneImg} alt="Phone"/><p>{phone}</p></span> : null}
      {email ? <span className="placedata-category"><img className="placedata-icon" src={emailImg} alt="Email"/>{parse(email)}</span> : null}
      {web ? <span className="placedata-category"><img className="placedata-icon" src={wwwImg} alt="Website"/>{parse(web)}</span> : null}
    </Container>
  )
};
    
export { PlaceData };