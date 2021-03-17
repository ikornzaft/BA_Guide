import React, { useState } from 'react';

import { InfoPanelButton } from '../';
import { Container } from './info-panel.styles';

const InfoPanel = (onClick) => {
  const [InfoStatus, setInfoStatus] = useState(false);

  const infoPanel = 
  <Container>
  <InfoPanelButton buttonSize='2' text='X' onClick={() => setInfoStatus(!InfoStatus)} />
  Hola
  </Container>;

  return (
  <div>
    <InfoPanelButton buttonSize='9.5' text='Learn More' onClick={() => setInfoStatus(!InfoStatus)} />
    {InfoStatus ? infoPanel : null}
  </div>
  )
};
    

export { InfoPanel };