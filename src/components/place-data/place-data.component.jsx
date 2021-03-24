import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

import { Container } from './place-data.styles.jsx';

import emailImg from '../../assets/icons/email.svg';
import phoneImg from '../../assets/icons/telefono.svg';
import wwwImg from '../../assets/icons/world-wide-web.svg';
import noInfo from '../../assets/img/scared.png';

const PlaceData = ({ phone, email, web }) => {

  const [isInformation, setIsInformation] = useState(true);

  useEffect(() => {
    (phone.length > 2 || email.length > 2 || web.length > 2) ? setIsInformation(true) : setIsInformation(false);
  }, [phone]);
      
  return (
    <Container>
      {isInformation ? <h3>Other information about this place:</h3> : <h3>Sorry, we don't have information about this place</h3>}
      {isInformation ? null : <img className="placedata-noInfo" src={noInfo} alt="No Information" />}
      {phone ? <span className="placedata-category"><img className="placedata-icon" src={phoneImg} alt="Phone"/><p>{phone}</p></span> : null}
      {email ? <span className="placedata-category"><img className="placedata-icon" src={emailImg} alt="Email"/>{parse(email)}</span> : null}
      {web ? <span className="placedata-category"><img className="placedata-icon" src={wwwImg} alt="Website"/>{parse(web)}</span> : null}
    </Container>
  )
};
    
export { PlaceData };