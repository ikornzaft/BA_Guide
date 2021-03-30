import React, { useState } from 'react';

import { InfoPanelButton } from '../';
import { Container } from './info-panel.styles';

const InfoPanel = (onClick) => {
  const [InfoStatus, setInfoStatus] = useState(false);
  
  const infoPanel = 
  <Container>
  <InfoPanelButton buttonSize='2' text='X' onClick={() => setInfoStatus(!InfoStatus)} />
  <p className="info-text">This app retrieves data from the Buenos Aires City's API.</p> 
  <p className="info-text">To read the API's documentation, you can visit this link: <a className="info-link" href="https://usig.buenosaires.gob.ar/apis/#/">GCBA API</a></p> 
  <br />
  <p className="info-text">The design of this site was inspired by this beautiful work from Valentina González:</p>
  <a className="info-link" href="https://www.behance.net/gallery/112855589/The-poor-travelers-guide-to-Malmoe">The poor travelers guide to Malmö</a> 
  <br/>
  <p className="info-text">The photographs used on this homepage are from unsplash.com:</p>
  <p className="info-text">Photo by <a className="info-link" href="https://unsplash.com/@gunnarridder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gunnar Ridderström</a> on <a className="info-link" href="https://unsplash.com/s/photos/park?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
  <p className="info-text">Photo by <a className="info-link" href="https://unsplash.com/@dannie_jing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dannie Jing</a> on <a className="info-link" href="https://unsplash.com/s/photos/museum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
  <p className="info-text">Photo by <a className="info-link" href="https://unsplash.com/@shs521?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Susan Holt Simpson</a> on <a className="info-link" href="https://unsplash.com/s/photos/wooden-blocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
  <br/>
  <p className="info-text">Icons made by <a className="info-link" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className="info-link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
  <p className="info-text">The amazing illustrations are from <a className="info-link" href="https://designs.ai/graphicmaker/illustrations/Flat_Geometric_Set">Designs.ai</a></p>
  <p className="info-text">Finally, the loading css's animation is from this <a className="info-link" href="https://codepen.io/russelljack/pen/MOvJxN">Codepen</a> by Russell Jack.</p>
  <br/>
  <p className="info-text">Thank you very much for visiting this site!</p>
  <p className="info-text">Ignacio.</p>


  </Container>;
  
  return (
    <div>
    <InfoPanelButton buttonSize='9.5' text='Learn More' onClick={() => setInfoStatus(!InfoStatus)} />
    {InfoStatus ? infoPanel : null}
  </div>
  )
};
    

export { InfoPanel };


