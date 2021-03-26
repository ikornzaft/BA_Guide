import React, { useState } from 'react';

import { InfoPanelButton } from '../';
import { Container } from './info-panel.styles';

const InfoPanel = (onClick) => {
  const [InfoStatus, setInfoStatus] = useState(false);

  const infoPanel = 
  <Container>
    <InfoPanelButton buttonSize='2' text='X' onClick={() => setInfoStatus(!InfoStatus)} />
  </Container>;

  return (
  <div>
    <InfoPanelButton buttonSize='9.5' text='Learn More' onClick={() => setInfoStatus(!InfoStatus)} />
    {InfoStatus ? infoPanel : null}
  </div>
  )
};
    

export { InfoPanel };

// <span>Photo by <a href="https://unsplash.com/@dannie_jing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dannie Jing</a> on <a href="https://unsplash.com/s/photos/museum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <span>Photo by <a href="https://unsplash.com/@gunnarridder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gunnar Ridderström</a> on <a href="https://unsplash.com/s/photos/park?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <span>Photo by <a href="https://unsplash.com/@shs521?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Susan Holt Simpson</a> on <a href="https://unsplash.com/s/photos/wooden-blocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// https://codepen.io/russelljack/pen/MOvJxN
// https://designs.ai/graphicmaker/illustrations/All/16-list-is-empty

